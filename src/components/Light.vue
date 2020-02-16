<template>
  <div class = 'circle' :class='className'/>
</template>

<script>
export default {
  props:['color','active','blink'],
  computed:{
    className(){
      const color = this.active ? this.color : '';
      const blink = this.blink ? ' blink' : '';
      return color + blink;
    },
  },
}
</script>

<style>
.circle{
  width:50px;
  height:50px;
  border-radius:50%;
  border:1px solid;
  background-color: gray;
}
.red{
  background: red;
}
.yellow{
  background: yellow;
}
.green{
  background: green;
}
.blink{
  animation: blink .5s infinite;
}
@keyframes blink{
  50% {background: grey;}
}
</style>
