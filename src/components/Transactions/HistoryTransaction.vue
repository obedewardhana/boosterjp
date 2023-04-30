<template>
  <v-card class="rounded pa-4 overflow-auto">
    <table class="table-simple">
      <thead>
        <tr>
          <th width="25%" class="text-left">Tanggal</th>
          <th class="text-left">Info Rekening</th>
          <th class="text-left">Jumlah</th>
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in historytrans" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.account }}</td>
          <td>{{ item.amount }}</td>
          <td
            :class="{
              'green--text': item.status == 'success',
              'red--text': item.status == 'rejected',
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
  name: "HistoryTransactionComp",
  data() {
    return {
      isLoading: true,
      pages:this.page
    };
  },
  props: {
    historytrans: {
      type: Array,
      required: true,
      default: () => [],
    },
    page: {
      type: Number,
      required: true,
      default: 1,
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
    