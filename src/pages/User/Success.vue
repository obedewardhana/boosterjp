<template>
  <div>
    <SuccessComp :profile="profile"/>
  </div>
</template>
  
<script>
import SuccessComp from "@/components/User/Success.vue";
import { getStore } from '../../utilities';
export default {
  name: "SuccessView",
  components: {
    SuccessComp
  },  
  data: () => ({
    profile: [JSON.parse(getStore("member"))]
  })
};
</script>
  