<template>
	<div class="game-header">
		<div class="outer">
			<div class="bg">

			</div>
			<h1>
				<slot></slot>
			</h1>
		</div>


	</div>

</template>

<script>
    export default {
        name: 'GameHeader',
    };
</script>

<style scoped>
	h1{
		margin: 0;
	}
	.game-header{
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:100%;
		grid-auto-flow: column;
		height: var(--gameHeader);
	}
	.outer{
		justify-self: center;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
		overflow: hidden;
	}
	.bg, h1{
		grid-column: 1/2;
		grid-row: 1/2;
	}
	.bg{
		position: relative;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: white;
		transform: skew(-30deg);
		animation:  moveRight 0.5s;
		animation-delay: 0.3s;
		animation-fill-mode: forwards;
	}

</style>
