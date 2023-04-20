<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pt-10">
        <div class="scroll-x">
          <v-card
            elevation="0"
            class="region-box mr-4 mb-4 rounded-lg"
            v-for="(row, idx) in rows"
            :key="idx || row.brand"
            style="width: 120px; display: inline-block"
          >
            <v-card-title class="d-flex flex-column">
              <p class="text-small text-bold text-uppercase no-lineheight mb-1">
                {{ row.brand }}
              </p>
              <p class="text-h4 text-bold mb-1">
                {{ row.amount }}
              </p>
              <p class="text-small mb-1 no-lineheight lightblue--text">
                {{ row.date }}
              </p>
            </v-card-title>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "RegionComp",
  data() {
    return {};
  },
  props: {
    rows: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
