<template>
  <div>
    <v-row>
      <v-col cols="12" class="pb-1">
        <v-card
          elevation="0"
          class="d-flex flex-row justify-space-between pa-3"
          style="border-radius: 6px"
          v-for="pro in profile"
          :key="pro.id"
        >
          <v-avatar size="80px">
            <template v-if="urlimg == ''">
              <v-img v-if="pro.avatar == 'active'" alt="Avatar" :src="pro.src">
                <v-skeleton-loader
                  absolute
                  type="image"
                  v-if="isLoading"
                  class="fill-height"
                >
                </v-skeleton-loader>
              </v-img>
            </template>
            <template v-else-if="urlimg !== ''">
              <v-img alt="Avatar" :src="urlimg">
                <v-skeleton-loader
                  absolute
                  type="image"
                  v-if="isLoading"
                  class="fill-height"
                >
                </v-skeleton-loader>
              </v-img>
            </template>
            <v-file-input
              v-model="image"
              accept=".png, .jpeg, .jpg"
              hint="File extentions (.png, .jpg, .jpeg) File Size limits (max: 10mb)"
              placeholder="Upload profile image"
              prepend-icon="mdi-camera"
              outlined
              filled
              @click:clear="urlimg = ''"
              @change="previewImage"
              class="ava-input"
            />
          </v-avatar>
          <div
            class="mr-3 mb-3 d-flex flex-column justify-end"
            style="width: 100%"
          >
            <p
              class="text-p black--text text-bold text-right text-capitalize pa-0 mb-0"
            >
              Your name
            </p>
            <p
              class="text-p green--text text-bold text-right text-capitalize pa-0 mb-0"
            >
              Rp. xxx
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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
                disabled
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
                disabled
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
                  disabled
                  ><p>Handphone</p>
                </v-text-field>
              </div>
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
  </div>
</template>
  <script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

import swal from "sweetalert2";
window.Swal = swal;

export default {
  name: "ProfileComp",
  mixins: [validationMixin],
  components: {
    swal,
  },
  validations: {
    fullname: { required },
    email: { required, email },
    handphone: { required },
  },
  props: {
    profile: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      image: null,
      isLoading: true,
      fullname: "Your name",
      email: "youremail@gmail.com",
      handphone: "81249363362",
      submitStatus: null,
      urlimg: "",
      phonecode: {
        name: "Indonesia",
        code: "ID",
        phone: "+62",
        emoji: "🇮🇩",
        unicode: "U+1F1EE U+1F1E9",
        image:
          "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
      },
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
  },
  methods: {
    previewImage() {
      this.urlimg = URL.createObjectURL(this.image);
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "error";
      } else {
        this.submitStatus = "success";
        Swal.fire("Berhasil!", "Data anda telah berhasil disimpan.", "success");
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
  