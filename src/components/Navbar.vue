<template>
<nav>
 <ul>
  <li> <router-link to = "/">Home</router-link></li>
  <li><a href="#news">Docs</a></li>
  <li><a href="#contact">Quick Guide</a></li>
  <li> <router-link to = "/m">Test</router-link></li>

  <li style="float:right"> <router-link to = "/l" class="active">Back Up</router-link></li>
 
</ul>
</nav>

</template>

<script>



export default {
    name: 'navbar'
}


</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'montserrat', sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}

</style>
