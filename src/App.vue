<!-- * making the nav links active use active class in css  -->
<!-- by default if we dont give router-view a name it has default name -->
<template>
<!--  -->
<div id="app">
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Home'}">
          <img class="logo" src="./assets/build-a-bot-logo.png"/>
          Build-a-Bot
          </router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Build'}">
          Build
          </router-link>
        </li>
            <li class="nav-item cart">
          <router-link class="nav-link" to="/cart" exact>
          Cart
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <!-- Aside -->
  <div class="container">
  <aside class="aside">
    <router-view name="sidebar" />
  </aside>
<main>
<router-view />
</main>
 </div>
</div>
</template>

<script>

export default {
	name: 'App'
  }
</script>
<style >
/* global style */
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
/* robot builder is a child component of app.vue */
/* we can scope the element with scoped attr vue put # to elements and target them.
the child will be inherited by some css elements like color. we can target the child
element by targetting the root element and using deep selector to child elem'
it also selects the child of child element we can use /deep/ same effect give us.

.content >>> .robot-name {
	color:red;
	border: 2px solid blue;
}
 */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;

}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
