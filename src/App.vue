<template>
  <div id="App">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
* { margin: 0; padding: 0; text-decoration: none; font-size: 1em; outline: none; }
code, kbd, samp, pre, tt, var, textarea, input, select, isindex, listing, xmp, plaintext { 
font: inherit; font-size: 1em; white-space: normal; }
dfn, i, cite, var, address, em { font-style: normal; }
th, b, strong, h1, h2, h3, h4, h5, h6 { font-weight: normal; }
a, img, a img, iframe, form, fieldset, abbr, acronym, object, applet, table {
border: none;}
table { border-collapse: collapse; border-spacing: 0; }
caption, th, td, center { text-align: left; vertical-align: top; }
body { line-height: 1; background: white; color: black; }
q { quotes: "" ""; }
ul, ol, dir, menu { list-style: none; }
sub, sup { vertical-align: baseline; }
a { color: inherit; }
hr { display: none; }
font { color: inherit !important; font: inherit !important; color: inherit !important; } 
marquee { overflow: inherit !important; -moz-binding: none; }
blink { text-decoration: none; }
nobr { white-space: normal; }

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans:wght@400;600;700&display=swap');
@font-face {
font-family: 'Bebas Neue';
src: url("@/assets/fonts/ofont.ru_Bebas Neue.ttf") format("truetype"); 
font-style: normal; 
font-weight: normal; 
} 

#App{
  font-family: 'Noto Sans', sans-serif;
}
</style>
