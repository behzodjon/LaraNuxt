<template>
  <div>
    <h2 v-if="$auth.user">{{$auth.user.name}}</h2>
    <h2>salom</h2>
  </div>
</template>

<script>
export default {
  created(){
    this.$axios.$get('/users').then(res=>{
      console.log(res)
    })
  }
}
</script>
