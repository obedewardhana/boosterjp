<template>
  <v-stepper v-model="e1">
    <v-stepper-items>
      <v-stepper-content step="1" class="pa-0">
        <div>
          <v-row>
            <v-col cols="12" class="">
              <v-card
                color="dark"
                elevation="0"
                class="mx-auto mb-0 pa-3 d-flex flex-row align-center"
                style="max-width: 300px; width: 100%; border-radius: 8px"
              >
                <v-icon class="orange--text text-h5 mr-2"
                  >mdi-credit-card</v-icon
                >
                <p
                  class="mb-0 white--text text-p text-bold text-uppercase text-center"
                >
                  Deposit Instan
                </p>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-form @submit.prevent="submit" class="d-flex flex-column">
                <div class="form-single pa-0 d-flex flex-column">
                  <div class="form-group-single">
                    <p>Bank Tujuan Transfer</p>
                    <v-select
                      v-model="receiver"
                      :items="accounts"
                      label="Bank Tujuan Transfer"
                      solo
                      light
                      flat
                      class=""
                      :class="{ 'form-group--error': $v.receiver.$error }"
                      :error-messages="receiverErrors"
                    ></v-select>
                  </div>

                  <div class="form-group-single mb-5">
                    <p>Jumlah</p>
                    <v-text-field
                      v-model="amount"
                      placeholder="Masukkan jumlah deposit"
                      type="number"
                      solo
                      light
                      flat
                      class=""
                      :class="{ 'form-group--error': $v.amount.$error }"
                      :error-messages="amountErrors"
                    >
                    </v-text-field>
                  </div>
                </div>

                <v-btn
                  type="submit"
                  small
                  color="orange"
                  class="pt-5 pb-5 mx-auto text-small text-shadow hover-transparent"
                  style="max-width: 550px; width: 100%; border-radius: 8px"
                  ><p class="mb-0 white--text text-h6 text-uppercase">
                    Konfirmasi
                  </p></v-btn
                >
              </v-form>
            </v-col>
          </v-row>
        </div>
      </v-stepper-content>
      <v-stepper-content step="2" class="pa-0">
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minValue } from "vuelidate/lib/validators";

import swal from "sweetalert2";
import { getStore } from "../../utilities";
window.Swal = swal;

export default {
  name: "AddDepositInstantComp",
  mixins: [validationMixin],
  validations: {
    receiver: { required },
    amount: { required, minValue: minValue(50000) },
  },
  data() {
    return {
      e1: 1,
      amount: null,
      receiver: null,
      isLoading: true,
      accounts: [
        "BCA : xxxxxxx NURLELA",
        "BCA : xxxxxxx NURLELA",
        "BCA : xxxxxxx NURLELA",
        "BCA : xxxxxxx NURLELA",
      ],
    };
  },
  computed: {
    amountErrors() {
      const errors = [];
      if (!this.$v.amount.$dirty) return errors;
      !this.$v.amount.required && errors.push("Nilai nominal harus diisi.");
      !this.$v.amount.minValue &&
        errors.push("Nilai nominal harus diatas 50000.");
      return errors;
    },
    receiverErrors() {
      const errors = [];
      if (!this.$v.receiver.$dirty) return errors;
      !this.$v.receiver.required && errors.push("Bank tujuan harus diisi.");
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
        // Swal.fire("Berhasil!", "Data anda telah berhasil disimpan.", "success");

        // Swal.fire(
        //   "Transaksi Gagal!",
        //   "Silahkan selesaikan transaksi lain.",
        //   "error"
        // );
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
