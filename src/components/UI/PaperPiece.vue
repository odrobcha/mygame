<template>
	<div>

	</div>

</template>

<script>
    export default {
        name: 'PaperPiece',
		props:['text'],
		data(){
            return{
                desccription: this.text,
			}
		}
    };
</script>

<style scoped>

</style>
