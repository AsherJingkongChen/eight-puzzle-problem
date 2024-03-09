import { DLS } from ".";
import { Solution } from "../models";

export const IDS: Solution = function IDS({ sourceNode, targetNode }) {
  let result: ReturnType<typeof DLS>;
  for (
    let maxDepth = 1;
    !(result = DLS({ sourceNode, targetNode, maxDepth }));
    maxDepth++
  );
  return result;
};
