<template>
	<transition name="getSun">
		<div class="container">
			<audio ref="fanfare">
				<source src="../../assets/sounds/fanfare.wav">
			</audio>
			<div class="close" @click="clicked">
				X
			</div>
			<div class="description">
				<div class="text">
					<span>{{$t('getSun.part1')}}</span>
					<div class="move-bg move-bg--first"></div>
				</div>
				<div class="text">
					<span>{{$t('getSun.part2')}} {{this.$store.state.totalScore}} <img class="sun-img" src="../../assets/img/sun.svg">!!!!</span>
					<div class="move-bg move-bg--second"></div>
				</div>
				<div class="text">
					<span>{{$t('getSun.part3')}}</span>
					<div class="move-bg move-bg--third"></div>
				</div>
			</div>


		</div>
	</transition>

</template>

<script>
    export default {
        name: 'GetSun',
		mounted(){
            this.$refs.fanfare.play();
		},
		methods:{
            clicked(){
                this.$emit("close");
			}
		}
    };
</script>

<style scoped>
	.container{
		position: absolute;
		top: 10%;
		left: 20%;
		width: 700px;
		height: 300px;
		padding: var(--basePadding);
		display: grid;
		grid-template-rows: 20px auto;
		grid-template-columns: 100%;
		grid-auto-flow: column;
		/*background-image: url("../../assets/img/top_line.svg"), url("../../assets/img/side_line.svg"),  url("../../assets/img/top_line.svg"), url("../../assets/img/side_line.svg");
		background-repeat: no-repeat;
		background-position: left top, right top, right bottom, left top;*/
		background-image: url("../../assets/img/getSun.svg");
		background-size: contain;
		background-repeat: no-repeat;
		animation: bounce-in .5s;
	}
	.close{
		font-size: 24px;
		font-weight: bold;
		justify-self: end;
		cursor: pointer;
	}
	.text{
		line-height: 60px;
		font-size: 50px;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
		overflow: hidden;
	}
	.text span, .move-bg{
		grid-row: 1/2;
		grid-column: 1/2;
	}
	.move-bg{
		animation-duration: 1.5s;

	}
	.move-bg--second{
		animation-delay: 0.4s;
	}
	.move-bg--third{
		animation-delay: 0.8s;
	}
	img{
		width: 40px;
	}
	.getSun-enter-active {
		animation: bounce-in .5s;
	}
	.getSun-leave-active {
		animation: bounce-in 0.5s reverse;
	}

	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}

</style>
