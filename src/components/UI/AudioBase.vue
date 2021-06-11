<template>
	<audio ref="audio">
		<slot></slot>
	</audio>
</template>

<script>
    import { bus } from '../../main';
    export default {
        name: 'AudioBase',
		props: ['src'],
		data(){
            return{
                source: this.src,
			}
		},
        mounted (){


            bus.$on('playItem', () => {
                this.playMusic();
            })
        },

		methods:{
            playMusic(){
                let audio = this.$refs.audio;
                this.playSound(audio, 600);
			}

		}
    };
</script>

<style scoped>

</style>
