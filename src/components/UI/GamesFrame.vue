<template>
	<div class="games-frame">
		<div class="header">

			<h1>
				<slot name="header">

				</slot>
			</h1>
			<div class="header-bg">

			</div>
		</div>

		<div class="game-itself">
			<slot name="content">


			</slot>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'GamesFrame',
        components: {  }
    };
</script>

<style scoped>
	.games-frame{
		min-height: 100%;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 60px calc(100% - 60px);
		grid-auto-flow: column;
	}
	.game-itself{
		min-height: 100%;
	}
	h1{
		margin: 0;
		font-size: 40px;
	}
	.header{
		justify-self: center;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
		overflow: hidden;
		animation-delay: 0.4s;
	}

	.header h1, .header-bg{
		grid-column: 1/2;
		grid-row: 1/2;
	}
	.header-bg{
		position: relative;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: white;
		transform: skew(-45deg);
		animation: menuButtonSide 0.5s;
		animation-fill-mode: forwards;
	}

	.game-itself div{
		height: 100%;
	}

</style>
