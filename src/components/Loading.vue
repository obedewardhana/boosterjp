<template>
  <div>
    <!-- <v-overlay>
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay> -->
    <v-progress-linear
      indeterminate
      color="yellow darken-2"
    ></v-progress-linear>
  </div>
</template>
<script>
export default {
  name: "LoadingComp",
  data: () => ({}),
};
</script>