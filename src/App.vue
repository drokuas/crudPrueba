<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="nav navbar-nav">
        <router-link to="/crear" class="nav-link">Crear</router-link> 
        <router-link to="/lista" class="nav-link">Lista</router-link> 
    </div>
  </nav>

  <router-view/>
</template>



<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>  -->