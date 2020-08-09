<template>
   <div class="footer">
      <p>
         Copyright &#169; {{ year }}. 
      </p>
      <p>Powered by <strong><a href="https://github.com/suncica-negra?tab=repositories" target="_blank" class="orhidea">DEA</a></strong></p>
   </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  padding-top: 25px;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 115px;
  background-color: #fcfcfc;
}

.orhidea {
  color: #111a99;
}

a:hover {
  text-decoration: none;
}
</style>