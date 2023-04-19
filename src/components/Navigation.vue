<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary :color="color">
      <v-list>
        <v-list-item
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
      </v-list>

      <template>
        <v-list dense>
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
        </v-list>
      </template>
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
              <div class="d-flex flex-row justify-start align-center">
                <v-toolbar-title
                  class="d-flex align-center ml-2"
                  style="width: 160px; cursor: pointer"
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
                <v-app-bar-nav-icon
                  @click.stop="drawer = !drawer"
                  v-if="isXs"
                />
                <div v-else class="d-flex flex-row align-center justify-start">
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
              </div>
              <div
                class="d-flex flex-row justify-end"
                style="margin-top: -16px"
              >
                <v-form @submit.prevent class="d-flex">
                  <v-text-field
                    v-model="username"
                    :rules="usernamerule"
                    label="Username / Email"
                    solo
                    light
                    flat
                    class=""
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="passwordrule"
                    :append-inner-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showeye ? 'text' : 'password'"
                    label="Kata Sandi"
                    solo
                    light
                    flat
                    class="mr-4"
                    @click:append="showeye = !showeye"
                  ></v-text-field>
                  <v-btn
                    type="submit"
                    small
                    color="greylighter"
                    class="mr-1 text-small text-shadow hover-transparent"
                    >Masuk</v-btn
                  >
                  <v-btn
                    type="button"
                    small
                    color="orange"
                    class="mr-2 text-small text-shadow hover-transparent"
                    >Daftar</v-btn
                  >
                </v-form>
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
export default {
  name: "Navigation",
  data: () => ({
    drawer: null,
    isXs: false,
    links: [
      ["Togel", "togel"],
      ["Slot", "slot"],
      ["Casino", "casino"],
      ["Games", "games"],
      ["Promo", "promo"],
      ["Mobile", "mobile"],
    ],
    username: "",
    password: "",
    showeye: true,
    usernamerule: [
      (value) => {
        if (value) return true;
        return "Username / Email harus diisi.";
      },
    ],
    passwordrule: [
      (value) => {
        if (value) return true;
        return "Kata Sandi harus diisi.";
      },
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    checkRoute() {
      console.log(this.$route.name);
    },
    goTo(id) {
      this.$router.push({
        path: `/${id}`,
      });
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
    this.checkRoute();
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
  