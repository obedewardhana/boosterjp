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
    <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
  </v-card>
</template>
  
  <script>
export default {
  name: "HistoryBetComp",
  data() {
    return {
      isLoading: true,
      page:1
    };
  },
  props: {
    historybet: {
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
  