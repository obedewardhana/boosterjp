<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card color="dark" elevation="0" class="mx-auto mt-4 mb-4 pa-3 d-flex flex-row align-center"
          style="max-width: 550px; width: 100%; border-radius: 8px">
          <v-icon class="orange--text text-h5 mr-2">mdi-account</v-icon>
          <p class="mb-0 white--text text-p text-bold text-uppercase text-center">
            Masuk
          </p>
        </v-card>
        <v-form @submit.prevent="submit" class="d-flex flex-column">
          <div class="form-single d-flex flex-column mb-5">
            <div class="form-group-single">
              <p>Username/Email</p>
              <v-text-field v-model="username" placeholder="Username/Email" solo light flat class=""
                :class="{ 'form-group--error': $v.username.$error }" :error-messages="usernameErrors">
              </v-text-field>
            </div>
            <div class="form-group-single">
              <p>Password</p>
              <v-text-field v-model="password" placeholder="Kata sandi" :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showeye ? 'text' : 'password'" solo light flat class="" @click:append="showeye = !showeye"
                :class="{ 'form-group--error': $v.password.$error }" :error-messages="passwordErrors">
              </v-text-field>
            </div>
          </div>

          <v-btn type="submit" small color="orange" class="pt-6 pb-6 mx-auto text-small text-shadow hover-transparent"
            style="max-width: 550px; width: 100%; border-radius: 8px">
            <p class="mb-0 white--text text-p">Masuk</p>
          </v-btn>
        </v-form>
        <p class="text-p black--text text-center mt-6">
          Lupa Password ?
          <span role="button" class="orange--text">Klik Disini</span>
        </p>
        <p class="text-p black--text mt-6 text-center">Belum punya akun?</p>
        <div style="width:100%" class="text-center">
          <v-btn type="submit" small color="dark" class="pt-6 pb-6 mx-auto text-small text-shadow hover-transparent"
            style="max-width: 550px; width: 100%; border-radius: 8px"
            @click.stop="$router.push('/register').catch(() => { })">
            <p class="mb-0 white--text text-p">Daftar</p>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";

import swal from "sweetalert2";
import urlPublic from "../../utilities/axios-public";
import { setStore } from "../../utilities/index";

window.Swal = swal;

export default {
  name: "LoginComp",
  mixins: [validationMixin],
  components: {
    swal,
  },
  validations: {
    username: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(13) },
  },
  data() {
    return {
      showeye: false,
      username: null,
      password: null,
      username: null,
      password: null,
      cpassword: null,
    };
  },
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Username harus diisi.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password harus diisi.");
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
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "error";
      } else {
        let formData = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);
        urlPublic
          .post("login", formData)
          .then((res) => {
            const data = res.data.data;
            setStore("token", data.token);
            setStore("member", data.member);
            window.location.href = "/";
          })
          .catch((err) => {
            const status = err.response.status;
            if (status > 400) {
              Swal.fire(
                "Gagal",
                "Periksa kembali username atau password Anda",
                "error"
              );
            }
          });
      }
    },
  },
};
</script>
  