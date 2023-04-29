<template>
  <v-row>
    <v-col cols="12">
      <v-form @submit.prevent="submit" class="d-flex flex-column">
        <div class="form-single d-flex flex-column">
          <div class="form-group-single">
            <p>Password Lama</p>
            <v-text-field
              v-model="oldpassword"
              placeholder="Masukkan password yang lama"
              :append-icon="showpaningal ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showpaningal ? 'text' : 'password'"
              solo
              light
              flat
              class=""
              @click:append="showpaningal = !showpaningal"
              :class="{
                'form-group--error': $v.oldpassword.$error,
              }"
              :error-messages="oldpasswordErrors"
            >
            </v-text-field>
          </div>

          <div class="form-group-single">
            <p>Password Baru</p>
            <v-text-field
              v-model="password"
              placeholder="6 - 14 karakter huruf dan angka"
              :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showeye ? 'text' : 'password'"
              solo
              light
              flat
              class=""
              @click:append="showeye = !showeye"
              :class="{ 'form-group--error': $v.password.$error }"
              :error-messages="passwordErrors"
            >
            </v-text-field>
          </div>

          <div class="form-group-single">
            <p>Konfirmasi ulang Password Baru</p>
            <v-text-field
              v-model="cpassword"
              placeholder="6 - 14 karakter"
              :append-icon="showmata ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showmata ? 'text' : 'password'"
              solo
              light
              flat
              class=""
              @click:append="showmata = !showmata"
              :class="{
                'form-group--error': $v.cpassword.$error,
              }"
              :error-messages="cpasswordErrors"
            >
            </v-text-field>
          </div>
        </div>

        <v-btn
          type="submit"
          small
          color="orange"
          class="mt-4 pt-8 pb-5 mx-auto text-small text-shadow hover-transparent"
          style="max-width: 550px; width: 100%; border-radius: 8px"
          ><p class="mb-0 white--text text-h6 text-uppercase">
            simpan data
          </p></v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</template>
    <script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

import swal from "sweetalert2";
window.Swal = swal;

export default {
  name: "ChangePasswordComp",
  mixins: [validationMixin],
  components: {
    swal,
  },
  validations: {
    oldpassword: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(13) },
    cpassword: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(13),
      sameAsPassword: sameAs("password"),
    },
  },
  data() {
    return {
      isLoading: true,
      tabtitles: [
        { id: "1", name: "Profile", tag: "profile" },
        { id: "2", name: "Ganti Password", tag: "change_password" },
        { id: "3", name: "Akun Bank", tag: "bank_account" },
      ],
      oldpassword: null,
      password: null,
      cpassword: null,
      submitStatus: null,
      showpaningal: false,
      showeye: false,
      showmata: false,
    };
  },
  computed: {
    oldpasswordErrors() {
      const errors = [];
      if (!this.$v.oldpassword.$dirty) return errors;
      !this.$v.oldpassword.required && errors.push("Password lama harus diisi.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password baru harus diisi.");
      !this.$v.password.minLength &&
        errors.push(
          "Password minimal " +
            this.$v.password.$params.minLength.min +
            " karakter ."
        );
      !this.$v.password.maxLength &&
        errors.push(
          "Password maksimal " +
            this.$v.password.$params.maxLength.max +
            " karakter ."
        );
      return errors;
    },
    cpasswordErrors() {
      const errors = [];
      if (!this.$v.cpassword.$dirty) return errors;
      !this.$v.cpassword.required && errors.push("Konfirmasi Password baru harus diisi.");
      !this.$v.cpassword.minLength &&
        errors.push(
          "Password minimal " +
            this.$v.cpassword.$params.minLength.min +
            " karakter ."
        );
      !this.$v.cpassword.maxLength &&
        errors.push(
          "Password maksimal " +
            this.$v.cpassword.$params.maxLength.max +
            " karakter ."
        );
      !this.$v.cpassword.sameAsPassword &&
        errors.push("Password tidak sesuai.");
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
        Swal.fire("Berhasil!", "Data anda telah berhasil disimpan.", "success");
      }
    },
    goTo(id) {
      this.$router.push({
        path: `/${id}`,
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 400);
  },
};
</script>
    