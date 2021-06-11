<template>
	<div class="welcome" >

		<div v-if='hidden' @click="showWelcome" class="start">
			<paper-piece text="text1">
			</paper-piece>


			<img class="start-img" src="../assets/img/start.svg">
		</div>

		<transition name="welcome">
			<div class="container" v-show="this.$store.state.welcome">
				<empty-div class="audio-outer">
					<div class="audio-bg">

					</div>
					<div class="audio-custom" :class="{'audio-custom-play': playBgMusic, 'audio-custom-pause' : !playBgMusic}">

					</div>
					<div class="audio-outer" v-show='!hidden'  @click="toggleMusic">

					</div>
					<audio  loop class="audio-itself" ref="bgMusic">

						<source src="../assets/sounds/start-melody.mp3" type="audio/mpeg">
					</audio>
				</empty-div>


				<top-menu>

				</top-menu>

				<side-menu>

				</side-menu>
				<main-content>
					<router-view></router-view>

				</main-content>




			</div>
		</transition>
	</div>


</template>

<script>
	import SideMenu from '@/components/SideMenu';
	import TopMenu from '@/components/TopMenu';
	import MainContent from '@/components/MainContent';
	//import BackgroundMusic from '@/components/UI/BackgroundMusic';
  //  import { bus } from '../main';
    //import AudioBaseSimple from '@/components/UI/AudioBaseSimple';
    import PaperPiece from '@/components/UI/PaperPiece';
    import EmptyDiv from '@/components/UI/EmptyDiv';
   // import AudioBaseSimple from '@/components/UI/AudioBaseSimple';

    export default {
        name: 'welcome',
		components: { EmptyDiv, SideMenu, TopMenu, MainContent, PaperPiece},
		data(){
            return{
                hidden: true,
				playBgMusic: true,
				text1: "Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 Text1 "
			}
		},
		mounted(){

		},
		methods:{
            showWelcome(){
                this.hidden = false;
                this.$store.dispatch("showWelcome");
                let startAudio = this.$refs.bgMusic;
                startAudio.play();
            //   bus.$emit('playItem', 1000);

			},


            toggleMusic(){
                let startAudio = this.$refs.bgMusic;
                if (this.playBgMusic){
                    this.pauseSound(startAudio);
                    this.playBgMusic = false;
				} else{
                    this.playSound(startAudio, 20000);
                    this.playBgMusic = true;
				}
            },
		}
    };
</script>

<style scoped>
	.welcome-enter-active {
		animation: bounce-in .5s;
	}
	.welcome-leave-active {
		animation: bounce-in .5s reverse;
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
	.start{
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-rows: 50% 50%;
		grid-template-columns: 50% 50%;

	}
	.start img{
		grid-column: 1/3;
		grid-row: 1/3;
		align-self: center;
		justify-self: center;
		cursor: pointer;
		animation: shake 1.5s infinite;
		animation-timing-function: ease-in-out;
	}
	@keyframes shake{
		5%, 40% {
			transform: translate3d( -1px, 1px, 0);
			transform: rotate(-2deg);

		}

		10%, 40% {
			transform: translate3d(2px, -2px, 0);
			transform: rotate(2deg);
		}

		30%, 25%, 35% {
			transform: translate3d( -3px, 3px, 0);
			transform: rotate(-4deg);
		}

		20%, 30% {
			transform: translate3d( 3px, -3px, 0);
			transform: rotate(4deg);
		}
		60%{
			transform: translate3d( 0px,0px, 0);
			transform: rotate(0deg);
		}
	}

	.container{
		display: grid;
		grid-template-columns: 20% 80%;
		grid-template-rows: 100px auto;
	}

	.top-menu{
		grid-column: 1/3;
		grid-row: 1/2;
	}
	.side-menu{
		grid-column: 1/2;
		grid-row: 2/3;
	}
	.main-content{
		grid-column: 2/3;
		grid-row: 2/3;
	}

	.audio-outer{
		cursor: pointer;
		position: fixed;
		top: 25px;
		right: 0px;
		display: grid;
		grid-template-columns: var(--audioWidth);
		grid-template-rows: var(--audioHeight);
		overflow: hidden;
	}

	.audio-custom, .audio-itself, .audio-bg{
		grid-column: 1/2;
		grid-row: 1/2;


	}
	.audio-itself{
		align-self: start;
		opacity: 0.5;
	}

	.audio-custom, .audio-bg{
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;


	}
	.audio-bg{
		/*background-image:url("../assets/img/button_small.svg");*/

	}
	.audio-custom-play{
		background-image:url("../assets/img/sound-pause.svg");
		background-size: 40%;
	}
	.audio-custom-pause{
		background-image:url("../assets/img/sound.svg");
		background-size: 40%;
	}



</style>
