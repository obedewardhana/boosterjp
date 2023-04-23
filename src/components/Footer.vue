<template>
  <div>
    <v-footer color="black">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-btn
              v-for="([text, link], i) in links"
              :key="i"
              link
              text
              color="grey"
              class="mb-3"
              @click="goTo(link)"
              >{{ text }}
            </v-btn>
            <v-divider class="border-opacity-100" color="orange"></v-divider>
          </v-col>
          <v-col cols="12">
            <v-row class="justify-space-between px-6 pt-8 pb-10">
              <div v-for="(bank, i) in banks" :key="i">
                <v-img
                  :src="bank.src"
                  :alt="bank.alt"
                  :width="75"
                  :height="25"
                  contain
                  class="shadow-white"
                ></v-img>
              </div>
            </v-row>
          </v-col>
          <v-col cols="12 mb-6">
            <v-row class="justify-space-between">
              <v-col cols="12" md="12" lg="4" class="px-6">
                <v-row class="flex-column">
                  <p class="text-p orange--text mb-4">Powered by:</p>
                  <v-toolbar-title
                    class="d-flex align-center"
                    style="width: 160px; cursor: pointer"
                    @click.stop="$router.push('/home').catch(() => {})"
                  >
                    <v-img
                      src="@/assets/img/logo.png"
                      width="auto"
                      height="40"
                      contain
                      class="my-auto mr-3"
                    />
                  </v-toolbar-title>
                </v-row>
              </v-col>
              <v-col cols="12" md="12" lg="4" class="pt-8 pt-md-8 pt-lg-0 pl-6 pl-md-6 pl-lg-0">
                <v-row class="">
                  <p class="text-p orange--text text-bold mb-4">
                    Aman Dan Terpercaya:
                  </p>
                </v-row>
                <v-row class="">
                  <div v-for="(partner, i) in partners" :key="i">
                    <v-toolbar-title
                      class="d-flex align-center"
                      style="width: auto; cursor: pointer"
                    >
                      <v-img
                        :src="partner.src"
                        width="auto"
                        :height="30"
                        contain
                        class="grayscale mb-4 mr-4"
                        @click="goTo(partner.link)"
                      ></v-img>
                    </v-toolbar-title>
                  </div>
                </v-row>
              </v-col>
              <v-col cols="12" md="12" lg="3" class="pt-8 pt-md-8 pt-lg-0 pl-6 pl-md-6 pl-lg-0">
                <v-row>
                  <p class="text-p orange--text text-bold mb-4">Kontak Kami:</p>
                </v-row>
                <v-row
                  class="justify-space-between"
                  v-for="(contact, i) in contacts"
                  :key="i"
                >
                  <v-toolbar-title
                    class="d-flex align-center grayscale justify-start"
                    style="width: ; cursor: pointer"
                  >
                    <v-img
                      :src="contact.src"
                      width="30"
                      :height="30"
                      contain
                      class="mb-4 mr-3"
                      @click="goTo(contact.link)"
                    ></v-img>
                    <p class="white--text text-p text-bold mr-4">
                      {{ contact.alt }}
                    </p>
                  </v-toolbar-title>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row class="justify-space-between mb-5">
              <v-col cols="12" md="12" lg="3" class="px-6">
                <v-row class="flex-column">
                  <p class="text-p orange--text text-bold mb-4">
                    Tanggung jawab bermain:
                  </p>
                </v-row>
                <v-row>
                  <div v-for="(res, i) in responsibility" :key="i">
                    <v-toolbar-title
                      class="d-flex align-center mr-3"
                      style="width: auto; cursor: pointer"
                      @click="goTo(res.link)"
                    >
                      <v-img
                        :src="res.src"
                        width="auto"
                        :height="30"
                        contain
                        class="mb-4"
                        @click="goTo(res.link)"
                      ></v-img>
                    </v-toolbar-title>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <div
              class="footer-description"
              :class="[visible ? 'show' : 'hide']"
            >
              <p class="white--text text-p">
                Boosterjp adalah SITUS MESIN SLOTGAMES 4D MANIA JACKPOT PAUS WD
                PASTI BAYAR 2022 100% Tanpa Ribet Hoki Jp Untung Manjur Anti
                NYedot Cheats Trending Games Populer Di Asia . Kami Himbau Untuk
                Tidak Candu Main Kasino Slotgames Darat / Online Apa lagi Bukan
                Menggunakan Uang Asli Sendiri . Rate deposit Pulsa ewalet Gak
                Pakai potongan Membuat Situs Ini Istimewa dan tranding di
                kalangan bettor mania . Memiliki Games slot Casino judi bola dan
                juga Sebagai situs judi terbaik yang hadir di Indonesia, kami
                menyediakan berbagai game judi bola Online, judi Casino dan Slot
                Online dari berbagai provider judi berskala internasional,
                seperti SBOBET, CQ9, Habanero Pragmatic PGsoft Joker123 Joker
                Gaming dan masih banyak provider lainnya. Seperti yang kita
                ketahui, provider-provider barusan merupakan provider judi
                terbesar dan resmi di dunia. Contohnya adalah Sbobet yang
                merupakan situs judi bola berlisensi di Asia dimana Sbobet sudah
                mempunyai ijin resmi di Eropa yang diberikan oleh Isle of Man,
                yang berstatus pemberi ijin resmi dalam bermain judi bola secara
                online. <br /><br />
                Boosterjp Juga Menjadi Salah Satu Situs Terbesar Di asia Yang
                Menerima Deposit Melalui Pulsa Ewalet yang 24jam nonstop . Bonus
                Promo Nya Pun Sangat Menarik Dan Bonus Bonus Yang Di Sediakan
                Paling Dicari Oleh Slotter Mania Tanah Air Karena Turnovernya
                Kecil Dan Claim Tanpa Ribet . Buat anda pecinta games online
                selain slot machine auto cuan winrate rtp nya yang tinggi . Anda
                Bisa coba bermain kasino blackjack rolet bakarat dragon tiger
                yang tidak kalah seru dan anda bermain secara live tanpa
                settingan.
              </p>
            </div>
            <div class="text-center">
              <v-btn
                outlined
                rounded
                color="orange"
                class="hover-transparent"
                @click="showDescription()"
                ><div v-if="!visible">
                  Tampilkan <v-icon class="ml-1">mdi-chevron-down</v-icon>
                </div>
                <div v-else>
                  Sembunyikan <v-icon class="ml-1">mdi-chevron-up</v-icon>
                </div>
              </v-btn>
            </div>
          </v-col>
          <p class="grey--text mx-auto">{{ version }}</p>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      ["Tentang Kami", "about"],
      ["Syarat & Ketentuan", "terms"],
      ["F.A.Q", "faq"],
    ],
    banks: [
      {
        src: "https://static.nukeasset.com/assets/images/banks/bca.png",
        alt: "Bank BCA",
      },
      {
        src: "https://static.nukeasset.com/assets/images/banks/mandiri.png",
        alt: "Bank Mandiri",
      },
      {
        src: "https://static.nukeasset.com/assets/images/banks/bni.png",
        alt: "Bank BNI",
      },
      {
        src: "https://static.nukeasset.com/assets/images/banks/bri.png",
        alt: "Bank BRI",
      },
      {
        src: "https://static.nukeasset.com/assets/images/banks/cimb.png",
        alt: "Bank CIMB",
      },
      {
        src: "https://static.nukeasset.com/assets/images/banks/maybank.png",
        alt: "Bank Maybank",
      },
      {
        src: "https://static.nukeasset.com/assets/images/banks/uob.png",
        alt: "Bank UOB",
      },
      {
        src: "https://static.nukeasset.com/assets/images/banks/dbs.png",
        alt: "Bank DBS",
      },
    ],
    partners: [
      {
        src: "https://static.nukeasset.com/assets/images/certificate/pagcor.png?h=30&quality=60",
        link: "https://google.com",
      },
      {
        src: "https://static.nukeasset.com/assets/images/certificate/Gambling-commision.png?h=30&quality=60",
        link: "#",
      },
      {
        src: "https://static.nukeasset.com/assets/images/certificate/BMM.png?h=30&quality=60",
        link: "#",
      },
      {
        src: "https://static.nukeasset.com/assets/images/certificate/Itech.png?h=30&quality=60",
        link: "#",
      },
      {
        src: "https://static.nukeasset.com/assets/images/certificate/GLI.png?h=30&quality=60",
        link: "#",
      },
      {
        src: "https://static.nukeasset.com/assets/images/certificate/MGA.png?h=30&quality=60",
        link: "#",
      },
    ],
    contacts: [
      {
        src: "https://static.nukeasset.com/assets/images/social/circle/secondary/livechat.png",
        link: "#",
        alt: "LiveChat",
      },
      {
        src: "https://static.nukeasset.com/assets/images/social/circle/secondary/whatsapp.png",
        link: "#",
        alt: "Whatsapp",
      },
      {
        src: "https://static.nukeasset.com/assets/images/social/circle/secondary/telegram.png",
        link: "#",
        alt: "Instagram",
      },
    ],
    responsibility: [
      {
        src: "https://static.nukeasset.com/assets/images/certificate/18+.png?h=30&quality=60",
        link: "#",
      },
      {
        src: "https://static.nukeasset.com/assets/images/certificate/GT.png?h=30&quality=60",
        link: "#",
      },
      {
        src: "https://static.nukeasset.com/assets/images/certificate/Gamcare.png?h=30&quality=60",
        link: "#",
      },
      {
        src: "https://static.nukeasset.com/assets/images/certificate/Begamble.png?h=30&quality=60",
        link: "#",
      },
    ],
    visible: true,
    version: "2.20.5",
  }),
  props: {
    color: String,
  },
  methods: {},

  watch: {},

  methods: {
    goTo(id) {
      window.open(id, "_blank");
    },
    showDescription() {
      this.visible = !this.visible;
    },
  },
};
</script>