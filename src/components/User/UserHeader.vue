<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          elevation="4"
          white
          class="d-flex pl-4 pr-4 pb-4 pt-4 flex-row flex-wrap justify-space-between align-center rounded-lg"
          v-for="pro in profile"
          :key="pro.id"
        >
          <v-card-title class="px-0 py-0 mb-5 mb-sm-5 mb-md-0 mb-lg-0">
            <v-avatar size="80px">
              <v-img v-if="pro.avatar == 'active'" alt="Avatar" :src="pro.src">
                <v-skeleton-loader
                  absolute
                  type="image"
                  v-if="isLoading"
                  class="fill-height"
                >
                </v-skeleton-loader>
              </v-img>
              <v-icon v-else>mdi-user</v-icon>
            </v-avatar>
            <div class="d-flex flex-column align-center">
              <p class="pl-3 mb-0 text-p black--text text-bold">
                {{ pro.name }}
              </p>
              <p
                role="button"
                @click.stop="$router.push('/profile').catch(() => {})"
                class="orange--text text-p pl-3 mb-0"
              >
                Edit Profile
              </p>
            </div>
          </v-card-title>

          <v-card-subtitle class="d-flex align-center px-0 py-0 mt-0 ml-auto mr-auto ml-sm-auto mr-sm-0 ml-lg-auto mr-md-0 ml-md-auto mr-lg-0">
            <div
              class="d-flex flex-column"
              style="
                padding-right: 16px;
                border-right: 1px solid var(--v-black-base);
              "
            >
              <p class="black--text text-bold text-right mb-0">Saldo Bonus</p>
              <p class="black--text text-bold text-right mb-0">Rp. xxx</p>
            </div>
            <v-btn
              class="ml-5 pl-5 pr-5 pt-6 pb-6 text-capitalize hover-transparent"
              dark
              >Claim Bonus</v-btn
            >
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script>
export default {
  name: "UserHeaderComp",
  data() {
    return {
      isLoading: true,
    };
  },
  props: {
    profile: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
  