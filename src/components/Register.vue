<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          color="dark"
          elevation="0"
          class="mx-auto mt-4 mb-4 pa-3 d-flex flex-row align-center"
          style="max-width: 550px; width: 100%; border-radius: 8px"
        >
          <v-icon class="orange--text text-h5 mr-2">mdi-pen</v-icon>
          <p
            class="mb-0 white--text text-p text-bold text-uppercase text-center"
          >
            Daftar
          </p>
        </v-card>
        <v-form @submit.prevent="submit" class="d-flex flex-column">
          <div class="form-single d-flex flex-column">
            <div class="form-group-single">
              <p>Nama Lengkap</p>
              <v-text-field
                v-model="fullname"
                placeholder="Sesuai rekening bank anda"
                solo
                light
                flat
                class=""
                :class="{ 'form-group--error': $v.fullname.$error }"
                :error-messages="fullnameErrors"
              >
              </v-text-field>
            </div>
            <div class="form-group-single">
              <p>Alamat Email</p>
              <v-text-field
                v-model="email"
                placeholder="Masukkan email anda"
                solo
                light
                flat
                class=""
                :class="{ 'form-group--error': $v.email.$error }"
                :error-messages="emailErrors"
              >
              </v-text-field>
            </div>
            <div class="form-group-single">
              <p style="width: 100%">Handphone</p>
              <div class="phone-box">
                <v-select
                  v-model="phonecode"
                  disabled
                  :items="countries"
                  item-text="name"
                  solo
                  absolute
                  light
                  flat
                  class="select-code"
                  ><template v-slot:selection="{ item }">
                    <img :src="item.image" />{{ item.phone }}
                  </template>
                  <template v-slot:item="{ item }">
                    <img :src="item.image" />{{ item.phone }}
                  </template>
                </v-select>
                <v-text-field
                  v-model="handphone"
                  placeholder="Ex: 81288888"
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
            <div class="form-group-single">
              <p>Username</p>
              <v-text-field
                v-model="username"
                placeholder="6 - 14 karakter huruf dan angka"
                solo
                light
                flat
                class=""
                :class="{ 'form-group--error': $v.username.$error }"
                :error-messages="usernameErrors"
              >
              </v-text-field>
            </div>
            <div class="form-group-single">
              <p>Password</p>
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

            <ul class="list-description">
              <li>- Minimal 6 kombinasi angka, huruf atau simbol</li>
              <li>- Maksimal 14 kombinasi angka, huruf atau simbol</li>
            </ul>
            <div class="form-group-single">
              <p>Konfirmasi ulang</p>
              <v-text-field
                v-model="cpassword"
                placeholder="6 - 14 karakter"
                :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showeye ? 'text' : 'cpassword'"
                solo
                light
                flat
                class=""
                @click:append="showeye = !showeye"
                :class="{ 'form-group--error': $v.cpassword.$error }"
                :error-messages="cpasswordErrors"
              >
              </v-text-field>
            </div>
            <div class="form-group-single">
              <p>Dari mana anda mengetahui kami? (opsional)</p>
              <v-select
                v-model="information"
                :items="options"
                label="Dari mana anda mengetahui kami? (opsional)"
                solo
                light
                flat
                class=""
              ></v-select>
            </div>

            <div
              style="
                width: 304px;
                height: 78px;
                background-color: var(--v-gray-base);
                border-radius: 3px;
              "
            ></div>
          </div>

          <v-card
            color="white"
            elevation="0"
            class="mx-auto mt-4 mb-4 pa-8"
            style="max-width: 550px; width: 100%; border-radius: 8px"
          >
            <p class="mb-0 black--text text-p text-center">
              Dengan menetapkan DAFTAR, Anda menyatakan bahwa benar Anda berusia
              18 tahun ke atas dan Anda setuju dengan
            </p>
            <p role="button" class="mb-0 orange--text text-p text-center" @click.stop="$router.push('/terms-condition').catch(() => {})">
              Syarat & Ketentuan
            </p>
          </v-card>

          <v-btn
            type="submit"
            small
            color="orange"
            class="pt-6 pb-6 mx-auto text-small text-shadow hover-transparent"
            style="max-width: 550px; width: 100%; border-radius: 8px"
            ><p class="mb-0 white--text text-p">Daftar</p></v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, email, sameAs } from "vuelidate/lib/validators";

import swal from "sweetalert2";
window.Swal = swal;

export default {
  name: "RegisterComp",
  mixins: [validationMixin],
  components: {
    swal,
  },
  validations: {
    fullname: { required },
    email: { required,email },
    handphone: { required },
    username: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(13) },
    cpassword: { required, minLength: minLength(6), maxLength: maxLength(13), sameAsPassword: sameAs('password')  },
  },
  data() {
    return {
      fullname: null,
      email: null,
      handphone: null,
      username: null,
      password: null,
      cpassword: null,
      information: "Pilih",
      submitStatus: null,
      showeye: false,
      phonecode: {
        name: "Indonesia",
        code: "ID",
        phone: "+62",
        emoji: "🇮🇩",
        unicode: "U+1F1EE U+1F1E9",
        image:
          "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
      },
      options: [
        "Pilih",
        "Facebook",
        "Instagram",
        "Web Iklan",
        "SMS/WA Promo",
        "Telemarketing",
      ],
      countries: [
        {
          name: "Australia",
          code: "AU",
          phone: "",
          emoji: "🇦🇺",
          unicode: "U+1F1E6 U+1F1FA",
          image:
            "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
        },
        {
          name: "China",
          code: "CN",
          phone: "",
          emoji: "🇨🇳",
          unicode: "U+1F1E8 U+1F1F3",
          image:
            "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
        },
        {
          name: "Indonesia",
          code: "ID",
          phone: "+62",
          emoji: "🇮🇩",
          unicode: "U+1F1EE U+1F1E9",
          image:
            "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
        },
        {
          name: "United States",
          code: "US",
          phone: "",
          emoji: "🇺🇸",
          unicode: "U+1F1FA U+1F1F8",
          image:
            "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
        },
      ],
    };
  },
  computed: {
    fullnameErrors() {
      const errors = [];
      if (!this.$v.fullname.$dirty) return errors;
      !this.$v.fullname.required && errors.push("Nama Lengkap harus diisi.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Email harus diisi.");
      !this.$v.email.email && errors.push("Email harus valid.");
      return errors;
    },
    handphoneErrors() {
      const errors = [];
      if (!this.$v.handphone.$dirty) return errors;
      !this.$v.handphone.required && errors.push("Handphone harus diisi.");
      return errors;
    },
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
    cpasswordErrors() {
      const errors = [];
      if (!this.$v.cpassword.$dirty) return errors;
      !this.$v.cpassword.required && errors.push("Password harus diisi.");
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
        !this.$v.cpassword.sameAsPassword && errors.push("Password tidak sesuai.");
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
        Swal.fire(
          "Registrasi Berhasil!",
          "Akun berhasil didaftarkan.",
          "success"
        );
        this.$router.push({
          path: `/home`,
        });
      }
    },
  },
};
</script>
