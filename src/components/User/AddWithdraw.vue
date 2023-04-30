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
                  <v-row class="ma-0">
                    <v-col cols="5" class="pa-0">
                      <div class="form-group-single mb-4 mr-4">
                        <p style="padding-top: 6px">Akun/Rekening</p>
                        <v-select
                          v-model="selkun"
                          :items="accounttype"
                          label="Pilih Akun"
                          @change="paymentTypeChange"
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
                      <div class="form-group-single mb-5"
                      :class="{ 'form-disabled': isDisabledAccount }">
                        <p style="padding-top: 6px">Nomor Akun Anda</p>
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
                          :disabled="isDisabledAccount"
                          :error-messages="seloptErrors"
                        ></v-select>
                      </div>
                    </v-col>
                  </v-row>
                  <div class="form-group-single mb-5">
                    <p style="width: 100%">Jumlah</p>
                    <v-text-field
                      v-model="amount"
                      placeholder="Masukkan jumlah withdraw"
                      type="number"
                      solo
                      light
                      flat
                      class="select-phone"
                      :class="{
                        'form-group--error': $v.amount.$error,
                      }"
                      :error-messages="amountErrors"
                      ><p>Jumlah</p>
                    </v-text-field>
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
                      Jumlah Ditransfer
                    </th>
                    <td class="text-p text-bold">{{this.rupiahFormat}}</td>
                  </tr>
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Terbilang
                    </th>
                    <td class="text-p text-bold">
                      {{this.stringFormat.toUpperCase()}}
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
              @click="confirmWithdraw"
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
              <p
                class="mt-4 mb-2 text-h5 mb-0 black--text text-bold text-center text-uppercase"
              >
                TRANSAKSI BERHASIL
              </p>
              <p class="text-p text-center black--text">
                CUSTOMER SERVICE KAMI AKAN SEGERA MEMPROSES TRANSAKSI ANDA
              </p>

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
                      Jumlah Ditransfer
                    </th>
                    <td class="text-p text-bold">{{this.rupiahFormat}}</td>
                  </tr>
                  <tr>
                    <th class="text-left text-p" style="width: 150px">
                      Terbilang
                    </th>
                    <td class="text-p text-bold">
                      {{this.stringFormat.toUpperCase()}}
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
import method from '../../utilities/axios-setup';
import { rupiah, terbilang } from '../../utilities';
import Swal from 'sweetalert2';
window.Swal = swal;

export default {
  name: "AddWithdrawComp",
  mixins: [validationMixin],
  components: {
    swal,
  },
  validations: {
    account: { required },
    selkun: { required },
    amount: { required, minValue: minValue(50000) },
    selopt: { required },
  },
  data() {
    return {
      e1: 1,
      form_type: "",
      account: "Your account",
      stringFormat: "",
      rupiahFormat: "",
      amount: null,
      submitStatus: null,
      isDisabledAccount: true,
      selkun: "",
      selopt: "",
      accounttype: ["BCA", "BNI", "Mandiri"],
      options: [],
      formWithdraw: {
        member_bank_id: 0
      }
    };
  },
  computed: {
    accountErrors() {
      const errors = [];
      if (!this.$v.account.$dirty) return errors;
      !this.$v.account.required && errors.push("Nama Lengkap harus diisi.");
      return errors;
    },
    selkunErrors() {
      const errors = [];
      if (!this.$v.selkun.$dirty) return errors;
      !this.$v.selkun.required && errors.push("Pilih tipe akun.");
      return errors;
    },
    seloptErrors() {
      const errors = [];
      if (!this.$v.selopt.$dirty) return errors;
      !this.$v.selopt.required && errors.push("Pilih akun.");
      return errors;
    },
    amountErrors() {
      const errors = [];
      if (!this.$v.amount.$dirty) return errors;
      !this.$v.amount.required && errors.push("Nominal Deposit harus diisi.");
      !this.$v.amount.minValue &&
        errors.push("Nominal Deposit harus diatas 50000.");
      return errors;
    },
  },
  methods: {
    async paymentType() {
      console.log('jalan')
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
        console.log(this.options);
      })
    },
    async paymentTypeChange(event) {
      await this.memberBank(event)
      this.selkun = event;
      this.isDisabledAccount = false;
    },
    async memberBankChange(event) {
      this.formWithdraw.member_bank_id = event.value
    },
    async getMemberUpdate() {
      await method.get('member').then((res) => {
        const data = res.data.data;
        setStore('member', JSON.stringify(data));
      })
    },
    async confirmWithdraw() {
      let formData = new FormData();
      formData.append('amount', this.amount)
      formData.append('member_bank_id', this.formWithdraw.member_bank_id)
      await method.post('transaction/withdraw', formData)
      .then(async (res) => {
        this.e1 = "3"
        await this.getMemberUpdate();
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
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "error";
      } else {
        this.submitStatus = "success";
        this.e1 = "2";
        this.rupiahFormat = rupiah(this.amount);
        this.stringFormat = terbilang(parseInt(this.amount));
        this.$vuetify.goTo(0);
      }
    },
    setSelectedValue(event) {
      this.selectedValue = event.target.selectedOptions[0].value;
    },
  },
  mounted() {
    this.paymentType()
  },
};
</script>
  