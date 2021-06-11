<template>
	<button @click="buttonClicked">
		<div class="button-bg">

		</div>
		<span class="button-title">{{buttonName}}</span>
		<slot>

		</slot>

	</button>

</template>

<script>
    export default {
        name: 'ButtonBase',
        props:["buttonName"],
		methods: {
            buttonClicked(){
                this.$emit("click");
			}
		}
    };
</script>

<style scoped>

	button{
		min-width: 70px;
		height: var(--buttonHeight);
		cursor: pointer;
		border: none;
		background-color: var(--mainBG);
		font-family:  mainFont;
		font-size: 24px;
		background-image: url("../../assets/img/button_small.svg");
		background-size: contain;
		background-repeat: no-repeat;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
		align-items: center;
		justify-items: center;
		font-weight: bold;

	}
	.button-bg, .button-title{
		grid-column: 1/2;
		grid-row:1/2;
	}
	.button-bg{
		width: 100%;
		height: 100%;
		overflow: hidden;

	}

</style>
