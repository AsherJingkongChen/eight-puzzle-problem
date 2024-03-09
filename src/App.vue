<script setup lang="ts">
import Solution from "./components/Solution.vue";
import { BFS, DLS, IDDFS } from "./solutions";
</script>

<template>
  <Solution name="BFS" :procedure="BFS" />
  <Solution name="DLS" :procedure="DLS" />
  <Solution name="IDDFS" :procedure="IDDFS" />
</template>

<style scoped></style>
