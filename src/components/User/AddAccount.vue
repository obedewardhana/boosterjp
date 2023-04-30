<template>
  <div>
    <v-card
      elevation="0"
      color="white"
      class="rounded pa-3"
      style="max-width: 550px; width: 100%; border-radius: 8px"
    >
      <v-card-title
        class="d-flex pa-0 pb-3 pt-0 flex-column flex-wrap align-start"
      >
        <p
          class="mb-0 pa-0 black--text text-bold text-uppercase text-h6 text-left"
          v-if="form_type == 'Bank'"
        >
          Tambah Bank
        </p>
        <p
          class="mb-0 pa-0 black--text text-bold text-uppercase text-h6 text-left"
          v-else-if="form_type == 'E-wallet'"
        >
          Tambah E-wallet
        </p>
        <p
          class="mb-0 pa-0 black--text text-bold text-uppercase text-h6 text-left"
          v-else-if="form_type == 'Pulsa'"
        >
          Tambah Provider Handphone
        </p>
        <template v-if="form_type == 'Bank'">
          <p class="mb-2 mt-2 text-p dark--text text-left">
            Silahkan lengkapi terlebih dahulu informasi rekening anda untuk
            melanjutkan transaksi
          </p>
        </template>
        <template v-if="form_type == 'E-wallet'">
          <p class="mb-2 mt-2 text-p dark--text text-left">
            Silahkan lengkapi terlebih dahulu informasi e-wallet anda untuk
            melanjutkan transaksi
          </p>
        </template>
        <template v-if="form_type == 'Pulsa'">
          <p class="mb-2 mt-2 text-p dark--text text-left">
            Silahkan lengkapi terlebih dahulu informasi nomor telephone anda
            untuk melanjutkan transaksi
          </p>
        </template>
      </v-card-title>
      <v-form @submit.prevent="submit" class="d-flex flex-column">
        <div class="form-single d-flex flex-column pa-0">
          <div class="form-group-single">
            <p style="padding-top: 6px" v-if="form_type == 'Bank'">
              Nama Rekening
            </p>
            <p style="padding-top: 6px" v-else-if="form_type == 'E-wallet'">
              Nama Lengkap
            </p>
            <p style="padding-top: 6px" v-else-if="form_type == 'Pulsa'">
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
              <div class="form-group-single mb-5 mr-4">
                <p style="padding-top: 6px">Tipe Akun</p>
                <v-select
                  v-model="selkun"
                  :items="accounttype"
                  @change="paymentTypeChange"
                  label="Tipe Akun"
                  return-object
                  item-text="name"
                  solo
                  light
                  flat
                  class=""
                ></v-select>
              </div>
            </v-col>
            <v-col cols="7" class="pa-0">
              <div class="form-group-single mb-5">
                <p style="padding-top: 6px" v-if="form_type == 'Bank'">
                  Rekening Bank
                </p>
                <p style="padding-top: 6px" v-else-if="form_type == 'E-wallet'">
                  Nama e-wallet
                </p>
                <p style="padding-top: 6px" v-else-if="form_type == 'Pulsa'">
                  Nama Provider
                </p>
                <v-select
                  v-model="selopt"
                  :items="options"
                  @change="selectOption"
                  label="Pilih Akun"
                  return-object
                  item-text="label"
                  solo
                  light
                  flat
                  class=""
                  :disabled="disabledBankName"
                  :class="{ 'form-group--error': $v.selopt.$error }"
                  :error-messages="seloptErrors"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <div class="form-group-single">
            <p style="width: 100%" v-if="form_type == 'Pulsa'">Handphone</p>
            <p style="width: 100%" v-else-if="form_type == 'E-wallet'">Handphone</p>
            <p style="width: 100%" v-else-if="form_type == 'Bank'">No. Rekening</p>
            <v-text-field
              v-model="handphone"
              placeholder="Ex: 81288888"
              type="number"
              solo
              light
              flat
              class="select-phone"
              :class="{ 'form-group--error': $v.handphone.$error }"
              :error-messages="handphoneErrors"
              ><p>Handphone</p>
            </v-text-field>
          </div>
        </div>

        <v-btn
          type="submit"
          small
          color="orange"
          class="mt-4 pt-5 pb-5 mx-auto text-small text-shadow hover-transparent"
          style="max-width: 550px; width: 100%; border-radius: 8px"
          ><p class="mb-0 white--text text-h6 text-uppercase">
            Tambah Akun
          </p></v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

import swal from "sweetalert2";
import method from '../../utilities/axios-setup';
import { getStore } from '../../utilities';
window.Swal = swal;

export default {
  name: "AddAccountComp",
  mixins: [validationMixin],
  components: {
    swal,
  },
  validations: {
    fullname: { required },
    selopt: { required },
    handphone: { required },
  },
  props: {
    form_type: String,
    account: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      fullname: "Your name",
      disabledBankName: true,
      handphone: null,
      submitStatus: null,
      selkun: "",
      selopt: "",
      accounttype: [],
      options: [],
      formAdd : {
        payment_type_id: 0,
        bank_payment_id: 0,
      }
    };
  },
  computed: {
    fullnameErrors() {
      const errors = [];
      if (!this.$v.fullname.$dirty) return errors;
      !this.$v.fullname.required && errors.push("Nama Lengkap harus diisi.");
      return errors;
    },
    seloptErrors() {
      const errors = [];
      if (!this.$v.selopt.$dirty) return errors;
      !this.$v.selopt.required && errors.push("Pilih akun.");
      return errors;
    },
    handphoneErrors() {
      const errors = [];
      if (!this.$v.handphone.$dirty) return errors;
      if(this.form_type =='Bank')  
      !this.$v.handphone.required && errors.push("Nomor Rekening harus diisi.");
      else if(this.form_type =='Pulsa')  
      !this.$v.handphone.required && errors.push("Handphone harus diisi.");
      else if(this.form_type =='E-wallet')  
      !this.$v.handphone.required && errors.push("Handphone harus diisi.");
      return errors;
    },
  },
  methods: {
    loadMember() {
        const data = JSON.parse(getStore('member'));
        this.fullname = data.fullname
    },
    async paymentType() {
      await method.get('dataset/payment-type').then((res) => {
        const data = res.data.data;
        let arrData = [];
        data.forEach(row => {
          arrData.push(row)
        });
        this.accounttype = arrData;
      });
    },
    async paymentTypeChange(event) {
      this.disabledBankName = false;
      await this.getBank(event.id)
    },
    async getBank(paymentType) {
      await method.get(`dataset/bank?payment_type=${paymentType}`)
      .then((res) => {
        const data = res.data.data;
        let arrData = [];
        data.forEach(row => {
          let item = {
            value: row.id,
            paymentType: row.payment_type_id,
            label: row.name
          }

          arrData.push(item)
        });
        this.options = arrData;
      })
    },
    selectOption(event) {
      this.formAdd.payment_type_id = event.paymentType;
      this.formAdd.bank_payment_id = event.value;
    },
    async confirmAdd() {
      let formData = new FormData();
      formData.append('payment_type_id', this.formAdd.payment_type_id)
      formData.append('bank_payment_id', this.formAdd.bank_payment_id)
      formData.append('account_number', this.handphone)
      await method.post('bank', formData)
      .then((res) => {
        Swal.fire(
          "Registrasi Berhasil!",
          "Akun berhasil didaftarkan.",
          "success"
        ).then((confirmed) => {
          window.location.reload();
        });
      }).catch((err) => {
        Swal.fire(
          "Gagal!",
          "Harap Periksa Form!",
          "error"
        );
      })
    },
    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "error";
      } else {
        this.submitStatus = "success";
        Swal.fire({
          icon: "warning",
          title: "Perhatian!",
          text: "Anda tidak dapat merubah detail Anda setelah berhasil melakukan transaksi. Harap dipastikan kembali bahwa semua detail yang diisi sudah benar.",
          showCancelButton: true,
          confirmButtonText: "Konfirmasi",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await this.confirmAdd()
          }
        });
      }
    },
  },
  mounted() {
    this.paymentType()
    this.loadMember();
  },
};
</script>
