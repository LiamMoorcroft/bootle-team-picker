<template>
  <div class="box container is-widescreen">
    <h2 class="subtitle">Starting XI</h2>
    <input v-for="n in 11" type="text" class="input field" :key="n" v-model="firstTeam[n-1]" placeholder="Enter player name"  />

    <h2 class="subtitle">Substitutes</h2>
    <input v-for="n in 5" type="text" class="input field" :key="n + 'sub'" v-model="subtitutes[n-1]" placeholder="Enter substitute name (optional)" />

      <b-btn @click="submitTeam" variant="info">
        <span class="icon is-medium">
          <icon name="download"></icon>
        </span>
        <span>Generate</span>
      </b-btn>
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
  },

  methods: {
    submitTeam () {
      this.$store.dispatch('updateStartingPlayers', this.firstTeam)
      this.$store.dispatch('updateSubstitutions', this.subtitutes)
      this.$router.push('/team')
    }
  }
}
</script>
