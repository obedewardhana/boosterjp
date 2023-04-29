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
                  <div class="form-group-single">
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
                      <div class="form-group-single mb-5">
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
                          v-model="selopt"
                          :items="options"
                          label="Pilih Akun"
                          solo
                          light
                          flat
                          class=""
                          :class="{ 'form-group--error': $v.selopt.$error }"
                          :error-messages="seloptErrors"
                        ></v-select>
                      </div>
                    </v-col>
                  </v-row>
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
                      :class="{ 'form-group--error': $v.transferAmount.$error }"
                      :error-messages="transferAmountErrors"
                      ><p>Jumlah Ditransfer</p>
                    </v-text-field>
                  </div>
                  <div class="form-group-single mb-5">
                    <p style="padding-top: 6px">Tujuan Transfer</p>
                    <v-select
                      v-model="receiver"
                      :items="options"
                      label="Pilih tujuan"
                      solo
                      light
                      flat
                      class=""
                      :class="{ 'form-group--error': $v.receiver.$error }"
                      :error-messages="receiverErrors"
                    ></v-select>
                  </div>
                </div>

                <v-btn
                  type="submit"
                  small
                  color="orange"
                  class="mt-4 pt-5 pb-5 mx-auto text-small text-shadow hover-transparent"
                  style="max-width: 550px; width: 100%; border-radius: 8px"
                  ><p class="mb-0 white--text text-h6 text-uppercase">
                    KONFIRMASI
                  </p></v-btn
                >
              </v-form>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
          </v-stepper-content>

          <v-stepper-content step="3">
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, between } from "vuelidate/lib/validators";

import swal from "sweetalert2";
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
    transferAmount: { required,between: between(50000,50000) },
  },
  data() {
    return {
      e1: 1,
      form_type: "",
      fullname: "Your name",
      transferAmount: null,
      submitStatus: null,
      selkun: "",
      selopt: "",
      receiver:"",
      accounttype: ["Bank", "Pulsa", "E-wallet"],
      options: ["a", "b", "c"],
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
        !this.$v.transferAmount.between &&
        errors.push("Nominal Deposit harus diantara 50000 sampai 50000.");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "error";
      } else {
        this.submitStatus = "success";
        this.e1 = "2";
      }
    },
  },
  mounted() {},
};
</script>
