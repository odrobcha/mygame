<template>
	<div class="top-menu">
		<div class="score">

			<span>{{this.$store.state.totalScore}}</span>
			<img src="../assets/img/sun.svg">
		</div>
		<div class="buttons">

			<audio ref="audio">
				<source src="../assets/sounds/pen.wav" type="audio/mpeg">
			</audio>


				<button-base
					:buttonName="entry.title"
					class="lang"
					:class="{'active-button' : activeLang[entry.language]}"
					v-for="entry in languages"
					:key="entry.title"
					@click="changeLocale(entry.language)">
				</button-base>

		</div>

		<!--
				<h1>
					{{$t('headerTitle')}}
		</h1>
		-->
	</div>

</template>

<script>
    import i18n from '../i18n';
    import ButtonBase from '@/components/UI/ButtonBase';
    //import AudioBase from '@/components/UI/AudioBase';
   // import { bus } from '../main';
    export default {
        name: 'TopMenu',
		components: {ButtonBase},
		data(){
            return{
                languages:[
                    { flag: 'en', language: 'en', title: 'Eng' },
                    { flag: 'uk', language: 'uk', title: 'Укр' }
				],
				activeLang: {
                    en: true,
                    uk: false
                }
			}
		},
		methods: {
            changeLocale(locale) {
                i18n.locale = locale;
                this.$store.dispatch("changeLang", i18n.locale );
                for (let lang in this.activeLang){
                    this.activeLang[lang] = false;
                    if (lang == locale){
                        this.activeLang[lang] = true;
					}
				}
                let audio = this.$refs.audio;
				this.playSound(audio, 500);

            }
		}
    };
</script>

<style scoped>
	.top-menu{
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 100%;
		align-items: center;
		padding-right: calc(2*var(--basePadding));
	}
	.buttons{
		grid-column: 2/3;
		grid-row: 1/2;
		justify-self: end;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 100%;
		align-items: center;
		justify-items: center;
		grid-auto-flow: column;
	}
	.lang:first-child{
		margin-right: 5px;
	}
	.lang{
		background-image: url("../assets/img/button_small.svg");
	}
	.active-button{
		background-image: url("../assets/img/button_small_bg.svg"), url("../assets/img/button_small.svg");
		background-size: contain;
		background-repeat: no-repeat;
	}

	.top-menu{
		background-image: url("../assets/img/top_line.svg");
		background-position: left bottom;
		background-repeat: repeat-x;
	}

	.score{
		grid-column: 1/2;
		grid-row: 1/2;
		display: grid;
		grid-template-columns: 40px 40px;
		grid-template-rows: 100%;
		grid-auto-flow: row;
		align-items: center;
		margin-left: var(--baseMargin);
	}
	.score img{
		width: 40px;
	}
	.score span{
		font-size: 30px;
		font-weight: bolder;
	}

	.sun-img{
		animation-duration: 50s;
	}

</style>
