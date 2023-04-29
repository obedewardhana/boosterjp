<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary :color="color">
      <v-list>
        <v-list-item
          v-if="!this.$route.meta.isLogin"
          @click.stop="$router.push('/home').catch(() => {})"
          class="brand-logo"
        >
          <v-img
            src="@/assets/img/logo.png"
            width="auto"
            height="40"
            contain
            class="my-auto mr-3"
          />
        </v-list-item>
        <v-list-item
          v-else-if="this.$route.meta.isLogin"
          @click.stop="$router.push('/dashboard').catch(() => {})"
          class="brand-logo"
        >
          <v-img
            src="@/assets/img/logo.png"
            width="auto"
            height="40"
            contain
            class="my-auto mr-3"
          />
        </v-list-item>
      </v-list>

      <template>
        <v-list dense style="margin-top: 30px">
          <v-list-item
            v-for="([text, link], i) in links"
            :key="i"
            link
            @click="goTo(link)"
          >
            <v-list-item-content>
              <v-list-item-title class="menu-title white--text hover-text">{{
                text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-if="this.$route.meta.isLogin"
            @click.stop="$router.push('/logout').catch(() => {})"
            ><v-list-item-content>
              <v-list-item-title class="menu-title white--text hover-text"
                >Logout</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
      <div
        class="d-flex flex-column justify-start"
        v-if="!this.$route.meta.isLogin"
      >
        <v-form @submit.prevent="submit" class="d-flex flex-column">
          <v-text-field
            v-model="username"
            label="Username / Email"
            solo
            light
            flat
            class="mb-2 mr-2"
            :class="{ 'form-group--error': $v.username.$error }"
            :error-messages="usernameErrors"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Kata Sandi"
            :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showeye ? 'text' : 'password'"
            solo
            light
            flat
            class="mb-2 mr-2"
            @click:append="showeye = !showeye"
            :class="{ 'form-group--error': $v.password.$error }"
            :error-messages="passwordErrors"
          >
          </v-text-field>
          <v-btn
            type="submit"
            small
            color="greylighter"
            class="ml-2 mr-2 mb-2 text-small text-shadow hover-transparent"
            >Masuk
          </v-btn>

          <v-btn
            type="button"
            small
            color="orange"
            class="ml-2 mr-2 text-small text-shadow hover-transparent"
            @click.stop="$router.push('/register').catch(() => {})"
            >Daftar</v-btn
          >
        </v-form>
      </div>
      <div
        v-else-if="this.$route.meta.isLogin"
        class="d-flex flex-row flex-wrap justify-center ml-4 mr-4 mt-4 rounded-lg pt-4 pb-4"
        style="width: inherit; background-color: var(--v-dark2-base)"
      >
        <div
          class="mr-3 mb-3 d-flex flex-column justify-end"
          style="width: 100%"
        >
          <p
            class="text-p white--text text-bold text-right text-capitalize mb-0"
          >
            Your name
          </p>
          <p
            class="text-p green--text text-bold text-right text-capitalize mb-0"
          >
            Rp. xxx
          </p>
        </div>
      </div>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-0 px-md-15 px-xl-15"
      style=""
      :class="{ expand: flat }"
      height="65"
    >
      <v-container class="px-0 py-0">
        <v-row>
          <v-col cols="12" class="px-0">
            <div class="d-flex align-center justify-space-between">
              <div
                class="d-flex flex-row justify-start align-center"
                style="width: 100%"
              >
                <v-toolbar-title
                  class="d-flex align-center ml-2"
                  style="width: 160px; cursor: pointer"
                  v-if="!this.$route.meta.isLogin"
                  @click.stop="$router.push('/home').catch(() => {})"
                >
                  <v-img
                    src="@/assets/img/logo.png"
                    width="auto"
                    height="100"
                    contain
                    class="my-auto mr-3"
                  />
                </v-toolbar-title>

                <v-toolbar-title
                  class="d-flex align-center ml-2"
                  style="width: 160px; cursor: pointer"
                  v-if="this.$route.meta.isLogin"
                  @click.stop="$router.push('/dashboard').catch(() => {})"
                >
                  <v-img
                    src="@/assets/img/logo.png"
                    width="auto"
                    height="100"
                    contain
                    class="my-auto mr-3"
                  />
                </v-toolbar-title>

                <v-app-bar-nav-icon
                  @click.stop="drawer = !drawer"
                  v-if="isXs"
                />
                <div
                  v-else
                  class="d-flex pl-3 flex-row align-center justify-space-between"
                  style="width: 100%"
                >
                  <div
                    class="d-flex flex-row align-center justify-start"
                    v-if="!isMd"
                  >
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/togel"
                      >
                        <span class="nav-menu">Togel</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/slot"
                      >
                        <span class="nav-menu">Slot</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/casino"
                      >
                        <span class="nav-menu">Casino</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/games"
                      >
                        <span class="nav-menu">Games</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/sports"
                      >
                        <span class="nav-menu">Sports</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/promo"
                      >
                        <span class="nav-menu">Promo</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/mobile"
                      >
                        <span class="nav-menu">Mobile</span>
                      </router-link>
                    </v-btn>
                  </div>

                  <div
                    class="d-flex flex-row align-center justify-start"
                    v-else
                  >
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/togel"
                      >
                        <span class="nav-menu">Togel</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover no-padding" text depressed>
                      <router-link
                        class="nav-link white--text hover-text"
                        to="/slot"
                      >
                        <span class="nav-menu">Slot</span>
                      </router-link>
                    </v-btn>

                    <v-menu
                      offset-y
                      transition="slide-y-transition"
                      style="z-index: 6 !important"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="no-hover no-padding ml-1"
                          depressed
                          v-bind="attrs"
                          v-on="on"
                        >
                          Others
                        </v-btn>
                      </template>
                      <v-list dark>
                        <v-list-item>
                          <v-btn class="no-hover no-padding" text depressed>
                            <router-link
                              class="nav-link white--text hover-text"
                              to="/casino"
                            >
                              <span class="nav-menu">Casino</span>
                            </router-link>
                          </v-btn>
                        </v-list-item>
                        <v-list-item>
                          <v-btn class="no-hover no-padding" text depressed>
                            <router-link
                              class="nav-link white--text hover-text"
                              to="/games"
                            >
                              <span class="nav-menu">Games</span>
                            </router-link>
                          </v-btn>
                        </v-list-item>
                        <v-list-item>
                          <v-btn class="no-hover no-padding" text depressed>
                            <router-link
                              class="nav-link white--text hover-text"
                              to="/sports"
                            >
                              <span class="nav-menu">Sports</span>
                            </router-link>
                          </v-btn>
                        </v-list-item>
                        <v-list-item>
                          <v-btn class="no-hover no-padding" text depressed>
                            <router-link
                              class="nav-link white--text hover-text"
                              to="/promo"
                            >
                              <span class="nav-menu">Promo</span>
                            </router-link>
                          </v-btn>
                        </v-list-item>
                        <v-list-item>
                          <v-btn class="no-hover no-padding" text depressed>
                            <router-link
                              class="nav-link white--text hover-text"
                              to="/mobile"
                            >
                              <span class="nav-menu">Mobile</span>
                            </router-link>
                          </v-btn>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>

                  <div
                    v-if="!this.isLogin"
                    class="d-flex flex-row justify-end"
                    style="margin-top: -16px"
                  >
                    <v-form @submit.prevent="submit" class="d-flex">
                      <v-text-field
                        v-model="username"
                        label="Username / Email"
                        solo
                        light
                        flat
                        :class="{ 'form-group--error': $v.username.$error }"
                        :error-messages="usernameErrors"
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        label="Kata Sandi"
                        :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showeye ? 'text' : 'password'"
                        solo
                        light
                        flat
                        class="mr-4"
                        @click:append="showeye = !showeye"
                        :class="{ 'form-group--error': $v.password.$error }"
                        :error-messages="passwordErrors"
                      >
                      </v-text-field>
                      <v-btn
                        type="submit"
                        small
                        color="greylighter"
                        class="mr-1 text-small text-shadow hover-transparent"
                        >Masuk
                      </v-btn>

                      <v-btn
                        type="button"
                        small
                        color="orange"
                        class="mr-2 text-small text-shadow hover-transparent"
                        @click.stop="$router.push('/register').catch(() => {})"
                        >Daftar</v-btn
                      >
                    </v-form>
                  </div>
                  <div
                    v-else-if="this.isLogin"
                    class="d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-wrap align-center"
                  >
                    <div
                      class="mr-3 mb-3 mr-sm-3 mb-sm-0 mr-md-3 mb-md-0 mr-lg-3 mb-lg-0"
                    >
                      <p
                        class="text-p white--text text-bold text-right text-capitalize mb-0"
                      >
                        {{this.member.username}}
                      </p>
                      <p
                        class="text-p green--text text-bold text-right text-capitalize mb-0"
                      >
                        Rp. {{this.member.balance}}
                      </p>
                    </div>
                    <v-btn
                      small
                      color="black"
                      width="35"
                      height="35"
                      class="no-padding hover-transparent mr-2 mb-2 mr-sm-2 mb-sm-0 mr-md-2 mb-md-0 mr-lg-2 mb-lg-0"
                      ><v-icon class="white--text">mdi-refresh</v-icon></v-btn
                    >

                    <v-menu
                      offset-y
                      elevation="0"
                      flat
                      transition="slide-y-transition"
                      style="z-index: 6 !important"
                      left
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="black"
                          width="35"
                          height="35"
                          class="no-padding hover-transparent mr-2 mb-2 mr-sm-2 mb-sm-0 mr-md-2 mb-md-0 mr-lg-2 mb-lg-0"
                          v-bind="attrs"
                          v-on="on"
                          ><v-icon class="white--text"
                            >mdi-credit-card</v-icon
                          ></v-btn
                        >
                      </template>
                      <v-list light flat>
                        <v-list-item
                          :class="{
                            'orange--active': this.$route.name == 'Profile',
                          }"
                          class="hover-orange"
                          role="button"
                          style="border: 1px solid var(--v-gray-base)"
                          @click.stop="$router.push('/profile').catch(() => {})"
                        >
                          <v-btn
                            class="no-hover no-shadow no-padding text-capitalize"
                            text
                            depressed
                          >
                            <span class="nav-menu black--text">Profile</span>
                          </v-btn>
                        </v-list-item>
                      </v-list>
                    </v-menu>

                    <v-btn
                      color="black"
                      width="35"
                      height="35"
                      class="no-padding hover-transparent mr-2 mb-2 mr-sm-2 mb-sm-0 mr-md-2 mb-md-0 mr-lg-2 mb-lg-0"
                      @click.stop="$router.push('/deposit').catch(() => {})"
                      ><v-icon class="white--text"
                        >mdi-currency-usd</v-icon
                      ></v-btn
                    >
                    <v-menu
                      offset-y
                      elevation="0"
                      flat
                      transition="slide-y-transition"
                      style="z-index: 6 !important"
                      left
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="black"
                          width="35"
                          height="35"
                          class="no-padding hover-transparent mr-2 mb-2 mr-sm-2 mb-sm-0 mr-md-2 mb-md-0 mr-lg-2 mb-lg-0"
                          v-bind="attrs"
                          v-on="on"
                          ><v-icon class="white--text"
                            >mdi-account</v-icon
                          ></v-btn
                        >
                      </template>
                      <v-list light flat>
                        <v-list-item
                          :class="{
                            'orange--active': this.$route.name == 'Profile',
                          }"
                          class="hover-orange"
                          role="button"
                          style="border: 1px solid var(--v-gray-base)"
                          @click.stop="$router.push('/profile').catch(() => {})"
                        >
                          <v-btn
                            class="no-hover no-shadow no-padding text-capitalize"
                            text
                            depressed
                          >
                            <span class="nav-menu black--text">Profile</span>
                          </v-btn>
                        </v-list-item>
                        <v-list-item
                          :class="{
                            'orange--active': this.$route.name == 'Transaction',
                          }"
                          class="hover-orange"
                          role="button"
                          style="border: 1px solid var(--v-gray-base)"
                          @click.stop="
                            $router.push('/transaction').catch(() => {})
                          "
                        >
                          <v-btn
                            class="no-hover no-shadow no-padding text-capitalize"
                            text
                            depressed
                          >
                            <span class="nav-menu black--text"
                              >Laporan Transaksi</span
                            >
                          </v-btn>
                        </v-list-item>
                        <v-list-item class="hover-orange">
                          <v-btn
                            class="no-hover no-shadow no-padding text-capitalize"
                            text
                            depressed
                          >
                            <span class="nav-menu black--text" @click="logout">Logout</span>
                          </v-btn>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
  
<style scoped>
.v-toolbar {
  transform: translateY(0);
  z-index: 8;
  /* transition: transform 0.2s linear; */
}

.is-hidden .v-toolbar {
  transform: translateY(-100%) !important;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
}
</style>
  
<script>
import Swal from 'sweetalert2';
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { getStore, removeItem, setStore } from "../utilities";
import urlPublic from '../utilities/axios-public';
import method from "../utilities/axios-setup";

export default {
  name: "Navigation",
  mixins: [validationMixin],
  validations: {
    username: { required },
    password: { required, minLength: minLength(6) },
  },
  data: () => ({
    drawer: null,
    isXs: false,
    isMd: false,
    isLogin: getStore("token") ? true : false,
    member: null,
    links: [
      ["Togel", "togel"],
      ["Slot", "slot"],
      ["Casino", "casino"],
      ["Games", "games"],
      ["Promo", "promo"],
      ["Mobile", "mobile"],
    ],
    username: null,
    password: null,
    submitStatus: null,
    showeye: false,
  }),
  props: {
    color: String,
    flat: Boolean,
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
      return errors;
    },
  },
  methods: {
    checkLogin() {
      if (getStore('member')) {
        this.isLogin = true;
        this.member = JSON.parse(getStore('member'));
      } else {
        this.isLogin = false;
        this.member = null;
      }
    },
    onResize() {
      this.isXs = window.innerWidth < 850;
      this.isMd = window.innerWidth < 991;
    },
    checkRoute() {
      console.log(this.$route.name);
    },
    goTo(id) {
      this.$router.push({
        path: `/${id}`,
      });
    },
    logout() {
      method.post("logout")
      .then(() => {
        window.location.reload();
        removeItem("token");
        removeItem("member");
      })
    },
    submit() {
      this.$v.$touch();
      let formData = new FormData();
      formData.append('username', this.username);
      formData.append('password', this.password);
      urlPublic.post('login', formData)
      .then((res) => {
        const data = res.data.data;
        setStore("token", data.token);
        setStore("member", data.member);
        window.location.reload();
      }).catch((err) => {
        const status = err.response.status;
        if (status > 400) {
          Swal.fire("Gagal", "Periksa kembali username atau password Anda", "error");
        }
      });
      // if (this.$v.$invalid) {
      //   this.submitStatus = "error";
      // } else {
      //   this.submitStatus = "success";
      //   this.$router.push({
      //     path: `/dashboard`,
      //   });
      // }
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    console.log(this.$route.meta.isLogin);
    this.checkRoute();
    this.onResize();
    this.checkLogin();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
  