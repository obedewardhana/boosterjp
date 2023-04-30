<template>
  <v-card class="rounded pa-4 overflow-auto">
    <table class="table-simple">
      <thead>
        <tr>
          <th width="25%" class="text-left">Tanggal</th>
          <th class="text-left">Jenis Permainan</th>
          <th class="text-left">Taruhan</th>
          <th class="text-left">Hasil</th>
          <th class="text-left">Jumlah</th>
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in historybet" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.games }}</td>
          <td>{{ item.bet }}</td>
          <td>{{ item.result }}</td>
          <td>{{ item.amount }}</td>
          <td
            :class="{
              'green--text': item.status == 'win',
              'red--text': item.status == 'lose',
            }"
            class="text-uppercase text-bold"
          >
            {{ item.status }}
          </td>
        </tr>
      </tbody>
    </table>
    <v-pagination @input="pageHandler" v-model="pages" :length="length" :total-visible="7"></v-pagination>
  </v-card>
</template>
  
  <script>
export default {
  name: "HistoryBetComp",
  data() {
    return {
      isLoading: true,
      pages: this.page,
    };
  },
  props: {
    page: {
      type: Number,
      required: true,
      default: 1,
    },
    historybet: {
      type: Array,
      required: true,
      default: () => [],
    },
    pageHandler : {
      type: Function,
      required: false,
      default: () => null,
    },
    length: {
      type: Number,
      required: true,
      default: 15,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>
  