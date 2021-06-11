<template>
	<games-frame>
		<template v-slot:header>
			{{$t('headerColors')}}
		</template>

		<template v-slot:content>
			<games-slider :games="colorGames">

			</games-slider>

		</template>


		</games-frame>


</template>

<script>
	import GamesFrame from '@/components/UI/GamesFrame';
    import ColorGame1 from '@/components/games/colors/colorGames/ColorGame1';
    import ColorGame2 from '@/components/games/colors/colorGames/ColorGame2';
    import GamesSlider from '@/components/UI/GamesSlider';

    export default {
        name: 'Colors',
		components:{GamesFrame, GamesSlider},
		data(){
            return{
                colorGames: [
					{game: ColorGame1, key:1, },
                    {game: ColorGame2, key:2, }
				]
			}
		}
    };
</script>

<style scoped>



</style>
