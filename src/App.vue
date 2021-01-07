<template>
<div id="app">
  <header>
    <nav>
      <ul>
        <li class="nav-tem">
          <img class="logo" src="./assets/build-a-bot-logo.png"/>
          Build-a-Bot
        </li>
      </ul>
    </nav>
  </header>
<main>
	<!-- <div class="robot-name">
		This is a test
	</div> -->
  <robot-builder/>
</main>
</div>
</template>

<script>

// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobotBuilder.vue'

export default {
		name: 'App',
		components: {
		//	HomePage
		RobotBuilder
	},
	data () {
		return {}
	}
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
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
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
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
