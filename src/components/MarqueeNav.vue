<template>
  <div class="marquee-nav" v-if="showMarquee">
    <v-container class="v-marquee" @click="$emit('click', $event)" color="dark">
      <div
        :style="{ 'animation-duration': time, 'animation-name': name }"
        :class="animate ? 'running' : 'pause'"
        class="text-marquee"
      >
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
    </v-container>
    <v-btn icon class="marquee-close" color="white" @click="removeMarquee(2)">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.marquee-nav {
  background-color: var(--v-dark-base);
  border-top: 1px solid var(--v-orange-base);
  margin-top: 65px;
  height: 38px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  &.is-top {
    margin-top: 0px !important;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
  }
  .v-marquee {
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;
    font-family: "Rajdhani";
    font-size: 20px;
    background-color: var(--v-dark-base);
    color: var(--v-white-base);
    height: 100%;
    margin: 0 auto;
    > div {
      display: inline-block;
      animation: marquee linear infinite;
    }
    .pause {
      animation-play-state: paused;
    }
    .running {
      animation-play-state: running;
    }
  }
  .marquee-close {
    display: block;
    position: absolute;
    right: 20px;
    top: 0;
  }
}
</style>

<script>
let count = 0;
export default {
  name: "VTextMarquee",
  props: {
    speed: {
      type: Number,
      default: 50,
    },
    content: String,
    animate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    count++;
    return {
      time: 0,
      name: "marquee" + count,
      styleEl: document.createElement("style"),
      showMarquee:true
    };
  },
  watch: {
    content() {
      this.start();
    },
    speed() {
      this.start();
    },
  },
  methods: {
    getTime() {
      return (
        Math.max(this.$el.firstChild.offsetWidth, this.$el.offsetWidth) /
          this.speed +
        "s"
      );
    },
    prefix(key, value) {
      return ["-webkit-", "-moz-", "-ms-", ""]
        .map((el) => `${el + key}:${value};`)
        .join("");
    },
    keyframes() {
      const from = this.prefix(
        "transform",
        `translateX(${this.$el.offsetWidth}px)`
      );
      const to = this.prefix(
        "transform",
        `translateX(-${this.$el.firstChild.offsetWidth}px)`
      );
      const v = `@keyframes ${this.name} {
                from { ${from} }
                to { ${to} }
            }`;
      this.styleEl.innerHTML = v;
      document.head.appendChild(this.styleEl);
    },
    start() {
      this.$nextTick(() => {
        this.time = this.getTime();
        this.keyframes();
      });
    },
    removeMarquee(seconds) {
      setTimeout(() => (this.showMarquee = false), seconds * 100);
    },
  },
  mounted() {
    this.start();
  },
};
</script>