import { DLS } from ".";
import { Solution } from "../models";

export const IDDFS: Solution = function IDDFS({
  sourceNode,
  targetNode,
}) {
  let result: ReturnType<typeof DLS>;
  for (let maxDepth = 1; !(result = DLS({ sourceNode, targetNode, maxDepth })); maxDepth++);
  return result;
};
