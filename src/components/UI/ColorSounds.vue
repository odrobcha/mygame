<template>
	<div>

	</div>
</template>

<script>
    export default {
        name: 'color-sounds',
		props: ['color'],
		data(){
            return{
                currentColor: this.color,
			}
		},
        watch: {
            currentColor: function(newValue){
                this.currentColor = newValue;
            }
        },

		mounted(){

		}
    };
</script>

<style scoped>

</style>
