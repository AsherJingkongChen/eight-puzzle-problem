<script setup lang="ts">
import Solution from "./components/Solution.vue";
import { BFS } from "./solutions";
import { DLS } from "./solutions";
// import { IDS } from "./solutions";
</script>

<template>
  <Solution name="BFS" :procedure="BFS" />
  <Solution name="DLS" :procedure="DLS" />
  <!-- <Solution name="IDS" :procedure="IDS" /> -->
</template>

<style scoped></style>
