<template>
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
</template>

<script>
export default {
  name: "DepositComp",
  data() {
    return {
      isLoading: true,
    };
  },
  props: {
    deposit: {
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
