<script setup lang="ts">
import { Grid, Solution } from "../models";
import mermaid from "mermaid";
import { onBeforeMount } from "vue";

const { name, procedure } = defineProps<{
  name: string;
  procedure: Solution;
}>();

const walkedSteps = procedure({
  sourceNode: new Grid({
    position: [2, 1],
    records: [
      [2, 8, 3],
      [1, 6, 4],
      [7, 0, 5],
    ],
  }),
  targetNode: new Grid({
    position: [1, 1],
    records: [
      [1, 2, 3],
      [8, 0, 4],
      [7, 6, 5],
    ],
  }),
});

const walkedStepsCount = walkedSteps?.length;
const walkedStepsMermaidText = walkedSteps
  ?.map(
    (step, i, a) =>
      `${step}\n` + (i === a.length - 1 ? `${step.id} -.-> Goal` : "")
  )
  .join("");

onBeforeMount(() => {
  mermaid.initialize({
    theme: "neutral",
    themeCSS: `
      .nodeLabel { font-weight: bold; }
    `,
  });
  mermaid.run({
    querySelector: ".mermaid",
  });
});
</script>

<template>
  <section class="solution">
    <h2>Solution: {{ name }}</h2>
    <p v-if="walkedStepsCount">Walked Steps: {{ walkedStepsCount }}</p>
    <pre class="mermaid" v-if="walkedStepsMermaidText">
flowchart TB
{{ walkedStepsMermaidText }}
  </pre
    >
    <p v-else style="font-weight: bold; color: brown">No solution found</p>
  </section>
</template>

<style scoped></style>
