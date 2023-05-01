<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-card elevation="0" color="white" class="rounded pa-3 overflow-auto">
          <v-card-title
            class="d-flex pa-0 pb-3 pt-2 flex-row flex-wrap align-center justify-space-between"
          >
            <p class="mb-0 pa-0 black--text text-bold text-h6">Akun saya</p>

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
                  color="orange"
                  elevation="0"
                  class="no-shadow hover-transparent"
                  v-bind="attrs"
                  v-on="on"
                  ><p class="text-bold white--text mb-0 pa-0">
                    <v-icon class="small-icon mr-2">mdi-plus</v-icon> Tambah
                    Akun
                  </p></v-btn
                >
              </template>
              <v-list
                light
                flat
                style="border: 1px solid var(--v-dark-base) !important"
                color="gray"
              >
                <v-list-item
                  :disabled="banks.length > 5"
                  class="hover-orange"
                  role="button"
                  style="border-bottom: 1px solid var(--v-dark-base)"
                  @click="dialogA = true"
                >
                  <v-btn
                    class="no-hover no-shadow no-padding text-capitalize"
                    text
                    depressed
                  >
                    <span :class="bank.length > 5 ? 'nav-menu black--text not-allowed' : 'nav-menu black--text'">
                      {{ bank.length > 5 ? "Rekening Penuh" : "Tambah Rekening"  }}
                    </span>
                  </v-btn>
                </v-list-item>
                <!-- <v-list-item
                  class="hover-orange"
                  role="button"
                  style="border-bottom: 1px solid var(--v-dark-base)"
                  @click="dialogB = true"
                >
                  <v-btn
                    class="no-hover no-shadow no-padding text-capitalize"
                    text
                    depressed
                  >
                    <span class="nav-menu black--text">Tambah Handphone</span>
                  </v-btn>
                </v-list-item>
                <v-list-item
                  class="hover-orange"
                  role="button"
                  @click="dialogC = true"
                >
                  <v-btn
                    class="no-hover no-shadow no-padding text-capitalize"
                    text
                    depressed
                  >
                    <span class="nav-menu black--text">Tambah E-wallet</span>
                  </v-btn>
                </v-list-item> -->
              </v-list>
            </v-menu>
          </v-card-title>
          <table class="table-simple">
            <thead>
              <tr>
                <th width="25%" class="text-left">No.</th>
                <th class="text-left">Akun</th>
                <th class="text-left">Nama Akun</th>
                <th class="text-left">Nomor Akun</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in banks" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.account }}</td>
                <td>{{ item.account_name }}</td>
                <td>{{ item.account_number }}</td>
              </tr>
            </tbody>
          </table>

          <!-- <v-pagination @input="pageHandler" v-model="pages" :length="length" :total-visible="7"></v-pagination> -->
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogA" width="550" v-if="!submitted">
      <v-btn
        elevation="0"
        text
        depressed
        color="transparent"
        class="no-shadow dialog-close"
        @click="dialogA = false"
        ref="closeA"
        ><v-icon class="small-icon black--text">mdi-close</v-icon>
      </v-btn>
      <AddAccountComp :account="bank" :form_type="form_typeA" />
    </v-dialog>

    <v-dialog v-model="dialogB" width="550" v-if="!submitted">
      <v-btn
        elevation="0"
        text
        depressed
        color="transparent"
        class="no-shadow dialog-close"
        @click="dialogB = false"
        ref="closeB"
        ><v-icon class="small-icon black--text">mdi-close</v-icon>
      </v-btn>
      <AddAccountComp :account="pulsa" :form_type="form_typeB" />
    </v-dialog>

    <v-dialog v-model="dialogC" width="550" v-if="!submitted">
      <v-btn
        elevation="0"
        text
        depressed
        color="transparent"
        class="no-shadow dialog-close"
        @click="dialogC = false"
        ref="closeC"
        ><v-icon class="small-icon black--text">mdi-close</v-icon>
      </v-btn>
      <AddAccountComp :account="wallet" :form_type="form_typeC"  />
    </v-dialog>
  </v-container>
</template>
    <script>
import AddAccountComp from "@/components/User/AddAccount.vue";
export default {
  name: "BankComp",
  components: {
    AddAccountComp,
  },
  data() {
    return {
      isLoading: true,
      pages: this.page,
      dialogA: false,
      dialogB: false,
      dialogC: false,
      submitted:false,
      form_typeA: "Bank",
      form_typeB: "Pulsa",
      form_typeC: "E-wallet",
      bank: [
        { id: "1", account_name: "BCA", account_type: "bank" },
        { id: "2", account_name: "Mandiri", account_type: "bank" },
        { id: "3", account_name: "BNI", account_type: "bank" },
        { id: "4", account_name: "PermataBank", account_type: "bank" },
        { id: "5", account_name: "BRI", account_type: "bank" },
      ],
      wallet: [
        { id: "1", account_name: "Gopay", account_type: "e-wallet" },
        { id: "2", account_name: "Dana", account_type: "e-wallet" },
        { id: "3", account_name: "Ovo", account_type: "e-wallet" },
        { id: "4", account_name: "ShopeePay", account_type: "e-wallet" },
        { id: "5", account_name: "DompetDuafa", account_type: "e-wallet" },
      ],
      pulsa: [
        { id: "1", account_name: "XL", account_type: "pulsa" },
        { id: "2", account_name: "Telkomsel", account_type: "pulsa" },
        { id: "3", account_name: "Indosat Ooredo", account_type: "pulsa" },
        { id: "4", account_name: "Smartfren", account_type: "pulsa" },
        { id: "5", account_name: "3", account_type: "pulsa" },
      ],
    };
  },
  methods: {
    goTo(id) {
      this.$router.push({
        path: `/${id}`,
      });
    },
  },
  props: {
    banks: {
      type: Array,
      required: true,
      default: () => [],
    },
    pageHandler : {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
    