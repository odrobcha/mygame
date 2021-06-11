<template>
  <div id="app">


    <welcome></welcome>
  </div>
</template>

<script>

import Welcome from '@/components/Welcome';

export default {
  name: 'App',
  components: {
    Welcome,
  },
}
</script>

<style>
  @import 'assets/styles/main.scss';
  @font-face {
    font-family: mainFont;
    src: url(assets/fonts/Caveat/Caveat-VariableFont_wght.ttf);
  }
#app {
  font-family:  mainFont;
  color: var(--mainFontColor);
  text-align: center;
  margin: 0;
  padding: 0;
}
  body{
    margin: 0;
    padding: 0;
    max-width: 100vw;
  }
</style>
