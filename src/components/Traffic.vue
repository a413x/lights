<template>
  <div class = 'traffic'>
    <light :active='this.lightsState[0]' :blink = 'blink' color = 'red' />
    <light :active='this.lightsState[1]' :blink = 'blink' color = 'yellow'/>
    <light :active='this.lightsState[2]' :blink = 'blink' color = 'green'/>
    <div class="counter">{{count}}</div>
  </div>
</template>

<script>
import Light from './Light.vue'

const times = [5,4,7];

export default {
  props:['lightsState'],
	data (){
		return {
			count:0,
      fromPath:'/yellow',
      intervalId:0,
      blink:false,
		}
	},
  components:{
    Light
  },

  mounted(){
    const index = this.lightsState.indexOf(1);
    const countCurrent = times[index];
    const countStorage = this.getFromStorage(index);

    if(countStorage && countStorage < countCurrent) {
      this.count = countStorage;
    }
    else{
      this.setCount(index);
    }

    this.intervalId = setInterval(()=>{
      if(this.count <= 0){
        this.goNext();
        this.blink = false;
        return;
      }
      if(this.count < 4) this.blink = true;
      this.count = this.count - 1;

      this.setStorage(this.lightsState.indexOf(1));
    },1000);
  },
  beforeDestroy(){
    clearInterval(this.intervalId);
    sessionStorage.clear();
  },
  beforeRouteEnter(to,from,next){
    next(vm => {vm.fromPath = from.path;});
  },

  methods:{
    goNext(){
      if(this.lightsState[0]){
        this.$router.push('/yellow');
        this.setCount(1);
      }
      else if(this.lightsState[1]){
        if(this.fromPath == '/green') {
          this.$router.push('/red');
          this.setCount(0);
        }
        else {
          this.$router.push('/green');
          this.setCount(2);
        }
      }
      else if(this.lightsState[2]){
        this.$router.push('/yellow');
        this.setCount(1);
      }
    },
    setCount(ind){
      this.count = times[ind];
    },
    setStorage(ind){
      const counter = [...times];
      counter[ind] = this.count;
      sessionStorage.setItem('counter',counter.toString());
    },
    getFromStorage(ind){
      let countStorage = sessionStorage.getItem('counter');
      if(!countStorage) return false;
      return countStorage.split(',')[ind];
    }
  }
}
</script>

<style>
 .counter{
   width:50px;
   margin-top: 10px;
   font-size:1.5em;
   text-align: center;
 }
</style>
