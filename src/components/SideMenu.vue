<template>
	<div class="side-menu">
		<audio ref="audio">
			<source src="../assets/sounds/pen.wav" type="audio/mpeg">
		</audio>

		<ul class="menu">
			<li v-for="item in sideMenu"
				:key="item.key"
				class="menu-item"
				@click="playItem">
					<router-link :to="item.link">
						<div class="menu-border"></div>

						<div class="white-bg"></div>
						<div class="orange-bg"></div>

						<span>{{$t(item.title)}}</span>
					</router-link>
			</li>

		</ul>


	</div>
</template>

<script>
	//import AudioBase from '@/components/UI/AudioBase';
    //import { bus } from '../main';
    export default {
        name: 'SideMenu',
		components: {},
        data() {
            return {
                sideMenu: [
                    { link: "/colors", title: "menuColors", key: "colors" },
                    { link: "/shapes", title: "menuShapes", key: "shapes" },

                ],
            }
        },
		methods:{
            playItem(){
                let audio = this.$refs.audio;
                this.playSound(audio, 800);
			}
		}

    };
</script>

<style scoped>
	.side-menu{
		background-image: url("../assets/img/side_line.svg");
		background-repeat: repeat-y;
		background-position: right top;
		height: calc(100vh - 100px);
	}
	.menu{
		display: grid;
		grid-template-rows: repeat(10, auto);
		grid-template-columns: 100%;
		grid-auto-flow: column;
		align-items: center;
		justify-items: center;
		padding: 0;
	}

	.menu-item{
		list-style: none;
		font-size: 24px;
		width: 140px;
		height: 60px;
		margin-bottom: var(--baseMargin);

	}
	.menu-item a{

	}
	.menu-item a{
		color: var(--mainFontColor);
		text-decoration: none;
		font-weight: bolder;
		width: var(--sideMenuButtonWidth);
		height: var(--sideMenuButtonHeight);
		display: grid;
		align-items: center;
		display: grid;
		grid-template-rows: 100%;
		grid-template-columns: 100%;
		justify-items: center;
		overflow: hidden;
	}
	.menu-item .white-bg{
		display: none;
		position: relative;
		width: 100px;
		height: 100px;
		top: 0;
		left: 0;
		z-index: 15;
	}

	.menu-item .router-link-active .white-bg{
		background-size: contain;
		background-repeat: no-repeat;
		position: relative;
		display: block;
		grid-column: 1/2;
		grid-row: 1/2;
		width: 100%;
		height: 100%;
		background-color: white;
		transform: skew(-45deg);
		overflow: hidden;
		animation: menuButtonSide 0.5s;
		animation-fill-mode: forwards;
		top: 0;
		left: 0;
		z-index: 9;
	}
	@keyframes test{
		from {}
	}

	.menu-item a span{
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 10;
	}

	.menu-item{
		z-index: 10;
	}
	.menu-border{
		background-image:  url("../assets/img/button.svg");
		background-size: contain;
		background-repeat: no-repeat;
		grid-column: 1/2;
		grid-row: 1/2;
		width: 100%;
		height: 100%;
		z-index: 11;
	}
	.menu-item .router-link-active .orange-bg{
		background-image: url("../assets/img/button_bg.svg");
		z-index: 8;
		width: 100%;
		height: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		grid-column: 1/2;
		grid-row: 1/2;

	}


	@keyframes menuButtonSide {
		0% {top: 0px; left: 0; }
		5% {top: 0%; left: 20%; }
		10% {top: 0%; left: 15%; }
		15% {top: 0%; left: 20%; }
		20% {top: 00%; left: 25%; }
		25% {top: 0%; left: 35%; }
		30% {top: 0%; left: 40%; }
		35% {top: 0%; left: 45%; }
		40% {top: 0%; left: 55%; }
		45% {top: 0%; left: 60%; }
		50% {top: 0%; left: 65%; }
		55% {top: 0%; left: 70%; }
		65% {top: 0%; left: 75%; }
		70% {top: 0%; left: 80%; }
		75% {top: 0%; left: 85%; }
		80% {top: 0%; left: 95%; }
		85% {top: 0%; left: 95%; }
		90% {top: 0%; left: 97%; }
		95% {top: 0%; left: 99%; }
		100% {top: 100%; left: 100%; }
	}

  @media only screen and (max-width: 1000px){

    .menu-item, .menu-item a{
      width: 100px;
      height: 40px;
      font-size: 20px;
    }
  }

</style>
