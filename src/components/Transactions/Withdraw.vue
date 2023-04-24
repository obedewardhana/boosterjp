<template>
    <table class="table-simple" >
      <thead>
        <tr>
          <th width="40%" class="text-left">Tanggal</th>
          <th class="text-left">Penerima</th>
          <th class="text-left">Jumlah</th>
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in withdraw" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.sender }} <br>{{ item.receiver }}</td>
          <td>{{ item.amount }}</td>
          <td :class="{'green--text': item.status =='success',  'red--text': item.status=='rejected'}" class="text-uppercase text-bold">{{ item.status }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    name: "WithdrawComp",
    data() {
      return {
      };
    },
    props: {
      withdraw: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
  };
  </script>
  