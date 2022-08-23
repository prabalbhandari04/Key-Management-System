<template>
<nav>
 <ul>
  <li style="float:left"> <router-link to = "/l" class="active">Project KMS</router-link></li>
  <li style="float:left"> <router-link to = "/" class="active">Home</router-link></li>
  <li style="float:left"> <router-link to = "#contact" class="active">Quick Quide</router-link></li>



  <li style="float:right"> <router-link to = "/l" class="active">Log In</router-link></li>
 
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
  background-color:transparent;
  height: 80px;
  display: flex;
  justify-content: center;
} 

li {
  float: left;
  width: 100%;

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
  background-color: #4b59f7;
}

</style>
