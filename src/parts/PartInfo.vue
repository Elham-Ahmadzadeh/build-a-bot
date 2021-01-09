<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>

</template>

<script>
import parts from '../data/parts'
export default {
    name: 'partInfo',
    computed: {
        part () {
          const { partType,  id }  = this.$route.params //DESTRUCTORING
          return parts[partType].find(part => part.id === +id) // ID IS A NUMBER BY ADDING PLUS
        }
    }
}

</script>
