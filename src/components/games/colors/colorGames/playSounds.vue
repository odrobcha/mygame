<template>
<div>
  <img class="sound-icon" src="../../../../assets/img/sound.svg" @click="playColor">
  <div class="all-audios">
    <audio ref="en-red">
      <source src="../../../../assets/sounds/colors/en/red.wav">
    </audio>
    <audio ref="en-orange">
      <source src="../../../../assets/sounds/colors/en/orange.wav">
    </audio>
    <audio ref="en-yellow">
      <source src="../../../../assets/sounds/colors/en/yellow.wav">
    </audio>
    <audio ref="en-green">
      <source src="../../../../assets/sounds/colors/en/green.wav">
    </audio>
    <audio ref="en-blue">
      <source src="../../../../assets/sounds/colors/en/blue.wav">
    </audio>
    <audio ref="en-violet">
      <source src="../../../../assets/sounds/colors/en/violet.wav">
    </audio>
    <audio ref="en-pink">
      <source src="../../../../assets/sounds/colors/en/pink.wav">
    </audio>

    <audio ref="uk-red">
      <source src="../../../../assets/sounds/colors/en/red.wav">
    </audio>
    <audio ref="uk-orange">
      <source src="../../../../assets/sounds/colors/en/orange.wav">
    </audio>
    <audio ref="uk-yellow">
      <source src="../../../../assets/sounds/colors/en/yellow.wav">
    </audio>
    <audio ref="uk-green">
      <source src="../../../../assets/sounds/colors/en/green.wav">
    </audio>
    <audio ref="uk-blue">
      <source src="../../../../assets/sounds/colors/en/blue.wav">
    </audio>
    <audio ref="uk-violet">
      <source src="../../../../assets/sounds/colors/en/violet.wav">
    </audio>
    <audio ref="uk-pink">
      <source src="../../../../assets/sounds/colors/en/pink.wav">
    </audio>
  </div>
</div>
</template>

<script>
export default {
  name: "playSounds",
  props: ['colorNumber'],
  watch:{
    colorNumber: function(){
    }
  },
  data(){
    return{
      randomColor: this.colorNumber,
      currentColor: '',
      colors: [
        {color: "red", key: 1, },
        {color: "orange", key: 2, },
        {color: "yellow", key: 3, },
        {color: "green", key: 4, },
        {color: "blue", key: 5, },
        {color: "violet", key: 6, },
        {color: "pink", key: 7, }
      ],
    }
  },
  mounted(){
    for (const item of this.colors){
      if (item.key == this.colorNumber){
        this.currentColor = item.color;
      }
    }
  },
  methods:{
    playColor(){
      for (const item of this.colors){
        if (item.key == this.colorNumber){
          this.currentColor = item.color;
        }
      }

      let allRefs = this.$refs;
      for (let item in allRefs){
        if (item == this.$store.state.lang + '-' + this.currentColor){
          allRefs[item].play();
        }
      }
    }
  }
}
</script>

<style scoped>
.sound-icon{
  cursor: pointer;
  width: 60px;
}

</style>