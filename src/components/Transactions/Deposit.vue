<template>
  <div>
    <table class="table-simple">
      <thead>
        <tr>
          <th width="25%" class="text-left">Tanggal</th>
          <th class="text-left">Pengirim & Penerima</th>
          <th class="text-left">Jumlah</th>
          <th class="text-left">Status</th>
          <th class="text-left">Catatan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in deposit" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.sender }} <br />{{ item.receiver }}</td>
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
          <td>{{ item.note }}</td>
        </tr>
      </tbody>
    </table>
    <v-pagination @input="pageHandler" v-model="pages" :length="length" :total-visible="7"></v-pagination>
  </div>
</template>

<script>
export default {
  name: "DepositComp",
  data() {
    return {
      isLoading: true,
      pages: this.page,
    };
  },
  props: {
    deposit: {
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
