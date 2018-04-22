<template>
    <div class="container is-widescreen">
        <input v-for="n in 11" type="text" class="input field" :key="n" v-model="firstTeam[n-1]" placeholder="Enter player name"  />
    </div>
</template>

<script>
export default {
  name: 'TeamSelectorForm',
  data () {
    return {
      firstTeam: []
    }
  }
}
</script>
