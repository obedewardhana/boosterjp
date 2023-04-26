<template>
  <table class="table-simple">
    <thead>
      <tr>
        <th width="40%" class="text-left">Tanggal</th>
        <th class="text-left">Taruhan</th>
        <th class="text-left">Hasil</th>
        <th class="text-left">Jumlah</th>
        <th class="text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in history" :key="item.id">
        <td>{{ item.date }}</td>
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
</template>
  
  <script>
export default {
  name: "HistoryComp",
  data() {
    return {};
  },
  props: {
    history: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
  