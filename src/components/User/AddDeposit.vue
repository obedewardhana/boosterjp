<template>
  <v-row>
    <v-col cols="12">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">Formulir</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2"
            >Konfirmasi</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step step="3">Hasil</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              elevation="0"
              color="white"
              class="rounded pa-3"
              style="max-width: 550px; width: 100%; border-radius: 8px"
            >
              <v-form @submit.prevent="submit" class="d-flex flex-column">
                <div class="form-single d-flex flex-column pa-0">
                  <div class="form-group-single form-disabled">
                    <p style="padding-top: 6px" v-if="form_type == 'Bank'">
                      Nama Rekening
                    </p>
                    <p
                      style="padding-top: 6px"
                      v-else-if="form_type == 'E-wallet'"
                    >
                      Nama Lengkap
                    </p>
                    <p
                      style="padding-top: 6px"
                      v-else-if="form_type == 'Pulsa'"
                    >
                      Nama Lengkap
                    </p>
                    <p style="padding-top: 6px" v-if="form_type == ''">
                      Nama Lengkap
                    </p>
                    <v-text-field
                      v-model="fullname"
                      placeholder="Sesuai rekening bank anda"
                      solo
                      light
                      flat
                      class=""
                      :class="{ 'form-group--error': $v.fullname.$error }"
                      :error-messages="fullnameErrors"
                      disabled
                    >
                    </v-text-field>
                  </div>
                  <v-row class="ma-0">
                    <v-col cols="5" class="pa-0">
                      <div class="form-group-single mb-4 mr-4">
                        <p style="padding-top: 6px">Tipe Akun</p>
                        <v-select
                          @change="paymentTypeChange"
                          v-model="selkun"
                          :items="accounttype"
                          label="Tipe Akun"
                          solo
                          light
                          flat
                          class=""
                          :class="{ 'form-group--error': $v.selkun.$error }"
                          :error-messages="selkunErrors"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col cols="7" class="pa-0">
                      <div
                        class="form-group-single mb-5"
                        :class="{ 'form-disabled': isDisabled }"
                      >
                        <p style="padding-top: 6px" v-if="form_type == 'Bank'">
                          Rekening Bank
                        </p>
                        <p
                          style="padding-top: 6px"
                          v-else-if="form_type == 'E-wallet'"
                        >
                          Nama e-wallet
                        </p>
                        <p
                          style="padding-top: 6px"
                          v-else-if="form_type == 'Pulsa'"
                        >
                          Nama Provider
                        </p>
                        <p style="padding-top: 6px">Pilih Akun</p>
                        <v-select
                          @change="memberBankChange"
                          v-model="selopt"
                          :items="options"
                          label="Pilih Akun"
                          solo
                          light
                          flat
                          return-object
                          item-text="label"
                          class=""
                          :class="{ 'form-group--error': $v.selopt.$error }"
                          :disabled="isDisabled"
                          :error-messages="seloptErrors"
                        ></v-select>
                      </div>
                    </v-col>
                  </v-row>
                  <template v-if="!showForm">
                    <div class="form-group-single mb-5">
                      <p style="width: 100%">Jumlah Ditransfer</p>
                      <v-text-field
                        v-model="transferAmount"
                        placeholder="Masukkan jumlah deposit"
                        type="number"
                        solo
                        light
                        flat
                        class="select-phone"
                        :class="{
                          'form-group--error': $v.transferAmount.$error,
                        }"
                        :error-messages="transferAmountErrors"
                        ><p>Jumlah Ditransfer</p>
                      </v-text-field>
                    </div>
                    <div class="form-group-single mb-5">
                      <p style="padding-top: 6px">Tujuan Transfer</p>
                      <v-select
                        v-model="receiver"
                        @change="adminBankChange"
                        :items="adminBank"
                        label="Pilih tujuan"
                        solo
                        light
                        flat
                        return-object
                        item-text="label"
                        class=""
                        :class="{ 'form-group--error': $v.receiver.$error }"
                        :error-messages="receiverErrors"
                      ></v-select>
                    </div>
                    <div class="form-group-single">
                      <p style="padding-top: 6px">Catatan Tambahan</p>
                      <v-text-field
                        v-model="notes"
                        placeholder="Tambah Catatan"
                        solo
                        light
                        flat
                        class=""
                        :class="{ 'form-group--error': $v.notes.$error }"
                      >
                      </v-text-field>
                    </div>
                  </template>
                </div>

                <template v-if="!showButton">
                  <div class="receiver-box">
                    <div class="receiver-img">
                      <v-img
                        contain
                        width="80"
                        height="80"
                        :src="detailAdminBank.logo"
                      >
                      </v-img>
                    </div>
                    <div class="receiver-title">
                      <p
                        class="black--text text-p text-uppercase text-bold mb-0"
                      >
                        {{ detailAdminBank.accountName }}
                      </p>
                      <p
                        class="d-flex flex-row black--text text-p text-uppercase text-bold mb-0"
                      >
                        {{ detailAdminBank.accountNumber }}
                        <span
                          class="green--text text-p ml-3 text-uppercase text-bold mb-0"
                          >Online</span
                        >
                      </p>
                    </div>
                  </div>
                  <v-btn
                    type="submit"
                    small
                    color="orange"
                    class="mt-4 pt-5 pb-5 mx-auto text-small text-shadow hover-transparent"
                    style="max-width: 550px; width: 100%; border-radius: 8px"
                    @click="submit"
                    ><p class="mb-0 white--text text-h6 text-uppercase">
                      KONFIRMASI
                    </p></v-btn
                  >
                </template>
              </v-form>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              elevation="0"
              color="white"
              class="rounded pa-3"
              style="max-width: 550px; width: 100%; border-radius: 8px"
            >
              <div class="confirm-box">
                <table style="width: 100%">
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Rekening Bank
                    </th>
                    <td class="text-p">
                      {{ this.selopt.accountName }} <br />
                      {{this.selopt.label}}
                    </td>
                  </tr>
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Rekening Tujuan
                    </th>
                    <td class="text-p">
                      {{this.receiver.accountName}} <br />
                      {{this.receiver.label}}
                    </td>
                  </tr>
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Jumlah Ditransfer
                    </th>
                    <td class="text-p text-bold">{{ this.rupiahFormat }}</td>
                  </tr>
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Terbilang
                    </th>
                    <td class="text-p text-bold">
                      {{ this.stringFormat.toUpperCase() }}
                    </td>
                  </tr>
                </table>
              </div>
            </v-card>
            <v-btn
              type="submit"
              small
              color="orange"
              class="mt-4 pt-5 pb-5 mb-4 mx-auto text-small text-shadow hover-transparent"
              style="max-width: 550px; width: 100%; border-radius: 8px"
              @click="confirmDeposit"
              ><p class="mb-0 white--text text-h6 text-uppercase">
                KONFIRMASI
              </p></v-btn
            >
            <p
              role="button"
              @click="e1 = 1"
              class="text-p text-center orange--text text-bold"
            >
              Kembali ke halaman sebelumnya.
            </p>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              elevation="0"
              color="white"
              class="rounded pa-3"
              style="max-width: 550px; width: 100%; border-radius: 8px"
            >
              <v-img
                width="100"
                height="100"
                src="@/assets/img/icon-success.png"
                class="mx-auto mt-4"
              ></v-img>
              <p class="mt-4 mb-2 text-h5 mb-0 black--text text-bold text-center text-uppercase">
                TRANSAKSI BERHASIL
              </p>
              <p class="text-p text-center black--text">CUSTOMER SERVICE KAMI AKAN SEGERA MEMPROSES TRANSAKSI ANDA</p>

              <div class="confirm-box">
                <table style="width: 100%">
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Rekening Bank
                    </th>
                    <td class="text-p">
                      {{ this.selopt.accountName }} <br />
                      {{this.selopt.label}}
                    </td>
                  </tr>
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Rekening Tujuan
                    </th>
                    <td class="text-p">
                      {{this.receiver.accountName}} <br />
                      {{this.receiver.label}}
                    </td>
                  </tr>
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Jumlah Ditransfer
                    </th>
                    <td class="text-p text-bold">{{ this.rupiahFormat }}</td>
                  </tr>
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Terbilang
                    </th>
                    <td class="text-p text-bold">
                      {{ this.stringFormat.toUpperCase() }}
                    </td>
                  </tr>
                </table>
              </div>
            </v-card>
            <v-btn
              type="button"
              small
              color="orange"
              class="mt-4 pt-5 pb-5 mb-4 mx-auto text-small text-shadow hover-transparent"
              style="max-width: 550px; width: 100%; border-radius: 8px"
              @click.stop="$router.push('/dashboard').catch(() => {})"
              ><p class="mb-0 white--text text-h6 text-uppercase">
                SELESAI
              </p></v-btn
            >
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minValue } from "vuelidate/lib/validators";

import swal from "sweetalert2";
import { getStore, rupiah, terbilang } from '../../utilities';
import method from '../../utilities/axios-setup';
import Swal from 'sweetalert2';
window.Swal = swal;

export default {
  name: "AddDepositComp",
  mixins: [validationMixin],
  components: {
    swal,
  },
  validations: {
    fullname: { required },
    selkun: { required },
    selopt: { required },
    receiver: { required },
    isDisabled: true,
    transferAmount: { required, minValue: minValue(50000) },
    notes: {  },
  },
  data() {
    return {
      e1: 1,
      form_type: "",
      fullname: "Your name",
      transferAmount: null,
      rupiahFormat: null,
      stringFormat: "",
      submitStatus: null,
      selkun: "",
      selopt: "",
      receiver: "",
      notes: "",
      accounttype: ["Bank", "Pulsa", "E-wallet"],
      adminBank: [],
      detailAdminBank : {
        logo: '',
        accountName: '',
        accountNumber: '',
        status: 'Online'
      },
      options: ["a", "b", "c"],
      test: [
        {
          label: 'test',
          value: 'test',
        }
      ],
      isDisabled: true,
      showForm: true,
      showButton: true,
      formDeposit: {
        amount: 0,
        member_bank_id: 0,
        admin_bank_id: 0,
      },
    };
  },
  computed: {
    fullnameErrors() {
      const errors = [];
      if (!this.$v.fullname.$dirty) return errors;
      !this.$v.fullname.required && errors.push("Nama Lengkap harus diisi.");
      return errors;
    },
    selkunErrors() {
      const errors = [];
      if (!this.$v.selkun.$dirty) return errors;
      !this.$v.selkun.required && errors.push("Pilih tipe akun.");
      return errors;
    },
    receiverErrors() {
      const errors = [];
      if (!this.$v.receiver.$dirty) return errors;
      !this.$v.receiver.required && errors.push("Pilih tujuan transfer.");
      return errors;
    },
    seloptErrors() {
      const errors = [];
      if (!this.$v.selopt.$dirty) return errors;
      !this.$v.selopt.required && errors.push("Pilih akun.");
      return errors;
    },
    transferAmountErrors() {
      const errors = [];
      if (!this.$v.transferAmount.$dirty) return errors;
      !this.$v.transferAmount.required &&
        errors.push("Nominal Deposit harus diisi.");
      !this.$v.transferAmount.minValue &&
        errors.push("Nominal Deposit harus diatas 50000.");
      return errors;
    },
  },
  methods: {
    rupiahFormat(string) {
      rupiah(string)
    },
    async paymentType() {
      await method.get('dataset/payment-type').then((res) => {
        const data = res.data.data;
        let arrData = [];
        data.forEach(row => {
          arrData.push(row.name)
        });
        this.accounttype = arrData;
      });
    },
    async memberBank(type) {
      await method.get(`dataset/user-bank?payment_type=${type}`)
      .then((res) => {
        const data = res.data.data;
        let arrData = [];
        data.forEach(row => {
          let item = {
            value: row.id,
            accountName: row.account_name,
            bankName: row.bank_name,
            label: row.bank_name +' - '+ row.account_number
          }
          arrData.push(item);
        });
        this.options = arrData;
      })
    },
    async getAdminBank(name) {
      await method.get(`dataset/admin-bank?name=${name}`)
      .then((res) => {
        const data = res.data.data;
        let arrData = [];
        data.forEach(row => {
          let item = {
            value: row.id,
            bankName: row.bank_name,
            accountName: row.account_name,
            accountNumber: row.account_number,
            label: row.bank_name +' - '+ row.account_name,
            logo: row.logo,
            status: row.status,
          };
          arrData.push(item);
        });
        this.adminBank = arrData;
      })
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "error";
      } else {
        this.submitStatus = "success";
        this.e1 = "2";
        this.rupiahFormat = rupiah(this.transferAmount);
        this.stringFormat = terbilang(parseInt(this.transferAmount));
        this.$vuetify.goTo(0);
      }
    },
    async confirmDeposit() {
      let formData = new FormData();
      formData.append('amount', this.transferAmount)
      formData.append('member_bank_id', this.formDeposit.member_bank_id)
      formData.append('admin_bank_id', this.formDeposit.admin_bank_id)

      await method.post('transaction/deposit', formData)
      .then((res) => {
        this.e1 = "3"
      }).catch((err) => {
        const error = err.response.data;
        const status = err.response.status;
        if (status > 400) {
          Swal.fire("Failed", error.data, 'error');
        } else {
          Swal.fire("Failed", "Terjadi Kesalahan. Mohon ulangi beberasapa saat lagi", 'error')
        }
      })
    },
    loadDataUser() {
      const data = JSON.parse(getStore('member'));
      this.fullname = data.fullname;
    },
    setSelectedValue(event) {
      this.selectedValue = event.target.selectedOptions[0].value;
    },
    async paymentTypeChange(event) {
      await this.memberBank(event)
      this.isDisabled = false;
    },
    async memberBankChange(event) {
      const bankName = event.bankName;
      await this.getAdminBank(bankName);
      this.formDeposit.member_bank_id = event.value
      this.showForm = false;
    },
    adminBankChange(event) {
      this.detailAdminBank = {
        logo: event.logo,
        bankName: event.bankName,
        accountName: event.accountName,
        accountNumber: event.accountNumber,
        status: 'Online'
      }
      this.formDeposit.admin_bank_id = event.value
      this.showButton = false;
    }
  },
  mounted() {
    this.paymentType();
    this.loadDataUser();
  },
};
</script>
