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
  width: 70px;
  height: 70px;
  margin-top: 10px;
  border-radius:50%;
  background-color: gray;
}
.red{
  background: red;
  box-shadow: 0 0 40px 15px rgba(255,10,10,1),0 0 50px 20px rgba(255,120,120,.6);
}
.yellow{
  background: yellow;
  box-shadow: 0 0 40px 15px rgba(255,255,80,.8),0 0 50px 20px rgba(255,255,100,.6);
}
.green{
  background: lime;
  box-shadow: 0 0 40px 15px rgba(10,255,10,1),0 0 50px 20px rgba(120,255,120,.6);
}
.blink{
  animation: blink .5s infinite;
}
@keyframes blink{
  50% {background: grey; box-shadow: 0 0 0 0;}
}
</style>
