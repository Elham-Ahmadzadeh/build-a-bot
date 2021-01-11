/*
! add a default property to store like cart:[], vue gonna notice those changes.
? All changes to store must happens in MUTATIONS.
* lets call the MUTATINS in robotBuilder.vue
*/

import { createStore } from 'vuex'

const store = createStore({
  state: {
    cart: []
  },
  mutations: {
    // will be called from robotBuilder.ue
    addRobotToCart (state, robot) {
      state.cart.push(robot)
    }
  }
})

export default store
