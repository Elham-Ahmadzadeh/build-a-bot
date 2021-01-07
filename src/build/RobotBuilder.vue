<template>
<!-- content is the root el of robot-builder -->
   <div class="content">
	<button @click="addToCart" class="add-to-cart">Add to Cart</button>
    <div class="top-row" >
		<div :class="[saleBorderClass, 'top', 'part']">
		<!-- we can use class for styling <div :class="{'sale-border': selectedRobot.head.onSale}"> -->
      <!--we can use style instead of class like this
	<div class="top part" :style="headBorderStyle"> -->

		<!-- we can use :stye="{backgroundColor:'red'}" -->
	<div class="robot-name"> {{selectedRobot.head.title}}

		<!-- the difference between v-if and v-show is that v-show in console
		just adds display:none, however if we change to v-if leavs the element there.
		basicly, if we wanna show and hide an expensive element so we use v-show -->

	<span v-if="selectedRobot.head.onSale" class="sale" > Sale!</span>
	</div>

		<!-- IF YOU WANT TO RENDER ELEMENTS ONCE YOU CAN USE V-ONCE -->

        <img :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPreviousHead" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectPreviousLeftArm"  class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm"/>
        <button  @click="selectPreviousTorso"  class="prev-selector">&#9668;</button>
        <button  @click="selectNextTorso"  class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm"/>
        <button  @click="selectPreviousRightArm"  class="prev-selector">&#9650;</button>
        <button  @click="selectNextRightArm"  class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm"/>
        <button  @click="selectPreviousBase"  class="prev-selector">&#9668;</button>
        <button  @click="selectNextBase"  class="next-selector">&#9658;</button>
    </div>
 </div>
 <div>
	<h1>Cart</h1>
	<table>
		<thead>
			<tr>
				<th>
					Robot
				</th>
				<th class="cost">
					Cost
				</th>
			</tr>
		</thead>
	<tbody>
			<!-- we should never use v-if and v-for with each other -->
			<!-- vue needs to identify each elements so we use key attr. unique value  -->
			<tr v-for="(robot, index) in cart" :key="index" >
				<td>{{robot.head.title}}</td>
				<td class="cost">{{robot.cost}}</td>
			</tr>
		</tbody>
	</table>
</div>
</div>
</template>
<script>
import availableParts from '../data/parts'

function getPreviousValidIndex (index, length) {
  const deprecatedIndex = index - 1
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex
}

function getNextValidIndex (index, length) {
  const incrementedIndex = index + 1
  return incrementedIndex > length - 1 ? 0 : incrementedIndex
}

export default {
	name: 'RobotBuilder',
	computed: {
		saleBorderClass () {
			return this.selectedRobot.head.onSale
				? 'sale-border'
				: ''
		},
		headBorderStyle () {
			return {
				border: this.selectedRobot.head.onSale
					? '3px solid red'
					: '3px solid #aaa'
			}
		},
		selectedRobot () {
			return {
				head: availableParts.heads[this.selectedHeadIndex],
				leftArm: availableParts.arms[this.selectedLeftArmIndex],
				rightArm: availableParts.arms[this.selectedRightArmIndex],
				torso: availableParts.torsos[this.selectedTorsoIndex],
				base: availableParts.bases[this.selectedBaseIndex]
			}
		}
	},
	data () {
		return {
			availableParts,
			cart: [],
			selectedHeadIndex: 0,
			selectedLeftArmIndex: 0,
			selectedRightArmIndex: 0,
			selectedTorsoIndex: 0,
			selectedBaseIndex: 0
		}
	},
	methods: {
		addToCart () {
			const robot = this.selectedRobot
			const cost = robot.head.cost +
				robot.leftArm.cost +
				robot.torso.cost +
				robot.rightArm.cost +
				robot.base.cost
			this.cart.push(Object.assign({}, robot, { cost }))
			// we assign the objects
		},
		selectNextHead () {
			// console.log('call')

			this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, availableParts.heads.length)
		},
		selectPreviousHead () {
			this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex, availableParts.heads.length)
		},

		selectPreviousLeftArm () {
			this.selectedLeftArmIndex = getPreviousValidIndex(this.selectedLeftArmIndex, availableParts.arms.length)
		},
		selectNextLeftArm () {
			this.selectedLeftArmIndex = getNextValidIndex(this.selectedLeftArmIndex, availableParts.arms.length)
		},

		selectPreviousRightArm () {
			this.selectedRightArmIndex = getPreviousValidIndex(this.selectedRightArmIndex, availableParts.arms.length)
		},
		selectNextRightArm () {
			this.selectedRightArmIndex = getNextValidIndex(this.selectedRightArmIndex, availableParts.arms.length)
		},

		selectPreviousTorso () {
			this.selectedTorsoIndex = getPreviousValidIndex(this.selectedTorsoIndex, availableParts.torsos.length)
		},
		selectNextTorso () {
			this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex, availableParts.torsos.length)
		},
		selectPreviousBase () {
			this.selectedBaseIndex = getPreviousValidIndex(this.selectedBaseIndex, availableParts.bases.length)
		},
		selectNextBase () {
			this.selectedBaseIndex = getNextValidIndex(this.selectedBaseIndex, availableParts.bases.length)
		}

	}
}
</script>
<style  scoped>

.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}

	img {
  		width:165px;
	}

.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
	position: absolute;
	top: -25px;
	text-align: center;
	width: 100%;
}
.sale {
	color: red;
}
.content {
	position: relative;
}
.add-to-cart {
	position: absolute;
	right: 30px;
	width: 220px;
	padding: 3px;
	font: 30px;
}
td, th {
	text-align: left;
	padding: 5px;
	padding-right: 20px;
}
.cost {
	text-align: right;
}
.sale-border {
	border: 3px solid red;
}
</style>
