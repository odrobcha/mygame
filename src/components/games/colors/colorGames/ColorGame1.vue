<template>
	<div class="game">

		<audio ref="winning">
			<source src="../../../../assets/sounds/winning.wav" type="audio/mpeg">
		</audio>
		<audio ref="losing">
			<source src="../../../../assets/sounds/lossing.wav" type="audio/mpeg">
		</audio>
		<game-header>
			{{$t(title)}}
		</game-header>
		<div class="content">
			<div class="rules">
				<div class="text-itself">{{$t('colorGame1Rules')}}</div>
				<div class="bg"></div>
			</div>
			<get-sun v-if="getSun" @close="closeGetSun">

			</get-sun>
			<div class="random-color">
				<img :src="this.randomColorImgUrl">

				<play-sounds :colorNumber="randomColor"></play-sounds>


			</div>
			<div class="all-colors-outer">
				<div class="all-colors">
					<div class="one-color" v-for="item in colors" :key="item.key" @click="findColor(item.key)">
						<img :src="getImgUrl(item.color)">
					</div>
				</div>
			</div>



		</div>

	</div>
</template>

<script>
	import GameHeader from '@/components/UI/GameHeader';
	import GetSun from "../../../UI/GetSun";
  import PlaySounds from "./playSounds";
    export default {
        name: 'ColorGame1',
        components: {PlaySounds, GameHeader, GetSun},
        data(){
            return{
                title: 'colorGame1_Title',
                colors: [
                  {color: "red", key: 1, },
                  {color: "orange", key: 2, },
                  {color: "yellow", key: 3, },
                  {color: "green", key: 4, },
                  {color: "blue", key: 5, },
                  {color: "violet", key: 6, },
                  {color: "pink", key: 7, }
                ],
                randomColor: null,
                randomColorImgUrl: "",
                randomSoundColorUrl: '',
                currentColor: '',
                score: 0,
                test: true,
                getSun: false,
            }
		},
		created(){
            this.randomColorImgUrl = this.getRandomImgUrl();
		},
		watch: {

		},


		methods: {
            getImgUrl (color) {
                let images = require.context('../../../../assets/img/colorGame1/', false, /\.svg$/)
                return images('./' + color + ".svg")
            },
            getRandomImgUrl() {
                let number = Math.floor(Math.random() * 7) + 1;
                this.randomColor = number;
                for (let n in this.colors) {
                      if (number == this.colors[n].key){
                          this.currentColor = this.colors[n].color;
                          let sound = require.context('../../../../assets/sounds/colors/en/', false, /\.wav$/);
                          this.randomSoundColorUrl = sound('./' + this.colors[n].color + ".wav");

                          let images = require.context('../../../../assets/img/colorGame1/', false, /\.svg$/);
                          return images('./' + this.colors[n].color + ".svg");
                      }

            }
        },
            playColor(){
                let allRefs = this.$refs;
                for (let item in allRefs){
                   if (item == this.currentColor){
                       allRefs[item].play();
                   }
				}

			},
            findColor(key){

                if (key ==this.randomColor){
                    let audio = this.$refs.winning;
                    this.playSound(audio, 1500);
                    this.randomColorImgUrl = this.getRandomImgUrl();
                    this.score = ++this.score;
				} else {
                    let audio1 = this.$refs.losing;
                    this.playSound(audio1, 800);
				}
                if (this.score == 10){
                    setTimeout(()=>{
                        this.$store.dispatch("increaseScore");
                        this.getSun = true;
                    }, 1000);
                }

			},
            closeGetSun(){
                this.getSun = false;
            }
		}
    };
</script>

<style scoped>
	.all-colors-outer{
		display: grid;
		grid-template-rows: 100%;
		grid-template-columns: 100%;
		justify-items: center;
		margin-top: var(--baseMargin);
	}
	.all-colors{
		display: grid;
		grid-template-columns: repeat(4, 140px);
		grid-template-rows: 120px 120px;
		grid-auto-flow: row;
	}
	.one-color img{
		max-width: 120px;
		width: auto;
		cursor: pointer;
	}
	.random-color{
		padding: var(--basePadding);
		display: grid;
		grid-template-columns: 240px 40px 0;
		grid-template-rows: 100%;
		grid-auto-flow: column;
		justify-content: center;
		align-items: center;
	}

	.rules{
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
		font-size: 24px;
	}
	.rules .text-itself, .rules .bg{
		grid-column: 1/2;
		grid-row: 1/2;
	}
	.rules .bg{
		position: relative;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: white;
		transform: skew(-30deg);
		animation:  moveRight 1s;
		animation-delay: 0.3s;
		animation-fill-mode: forwards;
	}

</style>
