<template>
  <div>
    <SuccessComp :profile="profile"/>
  </div>
</template>
  
<script>
import SuccessComp from "@/components/User/Success.vue";
export default {
  name: "SuccessView",
  components: {
    SuccessComp
  },  
  data: () => ({
    profile: [{
      id:'1',
      name:'Your name',
      saldo:'',
      avatar:'active',
      src:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
    }]
  })
};
</script>
  