<script setup lang="ts">
import { Grid, Solution } from "../models";
import mermaid from "mermaid";
import { onBeforeMount, ref } from "vue";

const { name, procedure } = defineProps<{
  name: string;
  procedure: Solution;
}>();

const answer = procedure({
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
const solution = answer
  ? {
      stepsCount: answer?.length,
      mermaidText:
        "flowchart TD\n" +
        answer
          ?.map(
            (step, i, a) =>
              `${step}\n` + (i === a.length - 1 ? `${step.id} -.-> Goal` : "")
          )
          .join(""),
    }
  : undefined;

let loaded = ref(false);
onBeforeMount(async () => {
  mermaid.initialize({
    theme: "neutral",
    themeCSS: `
      .nodeLabel { font-weight: bold; }
    `,
  });
  await mermaid.run({
    querySelector: ".mermaid",
  });
  loaded.value = true;
});
</script>

<template>
  <section class="solution">
    <h2>Solution: {{ name }}</h2>
    <div v-if="solution" v-show="loaded">
      <p>Steps Count: {{ solution.stepsCount }}</p>
      <pre class="mermaid">{{ solution.mermaidText }}</pre>
    </div>
    <div v-else>
      <p style="font-weight: bold; color: brown">No solution found</p>
    </div>
  </section>
</template>

<style scoped></style>
