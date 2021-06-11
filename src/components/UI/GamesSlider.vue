<template>
	<div>
		<audio ref="pageTurn">
		<source src="../../assets/sounds/pageTurn.mp3" type="audio/mpeg">
	</audio>
		<slither-slider :options="{
						fullscreen:false,
						transition: 'slide',
						loop: true,
	}">
			<div v-for="item in games" :key="item.key">
				<component :is="item.game">

				</component>
			</div>
			<template slot="previous">
				<img src="../../assets/img/prev.svg" @click="turnPage">
			</template>
			<template slot="next">
				<img src="../../assets/img/next.svg" @click="turnPage">
			</template>

		</slither-slider>
	</div>

</template>

<script>
    export default {
        name: 'GamesSlider',
		props: ['games'],
		methods:{
            turnPage(){
                let audio = this.$refs.pageTurn;
                this.playSound(audio, 800);
			}
		}
    };
</script>

<style scoped>
	img{
		width: 30px;
	}

</style>
