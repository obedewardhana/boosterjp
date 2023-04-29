<template>
  <v-card class="rounded pa-4 overflow-auto">
    <table class="table-simple">
      <thead>
        <tr>
          <th width="25%" class="text-left">Tanggal</th>
          <th class="text-left">Pengirim & Penerima</th>
          <th class="text-left">Jumlah</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lasttrans" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.account }}</td>
          <td>
            <p
              class="green--text text-small text-uppercase text-bold mb-0 pa-0"
            >
              {{ item.category }}
            </p>
            {{ item.amount }}
          </td>
        </tr>
      </tbody>
    </table>
  </v-card>
</template>
      
      <script>
export default {
  name: "LastTransactionComp",
  data() {
    return {
      isLoading: true,
      page: 1,
    };
  },
  props: {
    lasttrans: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>
      