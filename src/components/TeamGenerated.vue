<template>
  <div>
    <h1>Team Generated Sheet</h1>
    <h2>Starting XI</h2>
    <p :key="player" v-for="player in startingPlayers">
      {{ player }}
    </p>

    <h2>Substitutions</h2>
    <p :key="sub" v-for="sub in substitutes">
      {{ sub }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'TeamGenerated',
  computed: {
    startingPlayers () {
      return this.$store.state.startingPlayers
    },
    substitutes () {
      return this.$store.state.substitutions
    }
  }
}
</script>
