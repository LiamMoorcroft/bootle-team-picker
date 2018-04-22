<template>
  <div>
    <h2 class="subtitle">Starting XI</h2>
    <div class="container is-widescreen">
      <input v-for="n in 11" type="text" class="input field" :key="n" v-model="firstTeam[n-1]" placeholder="Enter player name"  />
    </div>

    <h2 class="subtitle">Substitutes</h2>
    <div class="container is-widescreen">
      <input v-for="n in 5" type="text" class="input field" :key="n" v-model="subtitutes[n-1]" placeholder="Enter substitute name (optional)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamSelectorForm',
  data () {
    return {
      firstTeam: [],
      subtitutes: []
    }
  }
}
</script>
