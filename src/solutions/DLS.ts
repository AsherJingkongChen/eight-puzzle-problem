import { Grid, Solution, Stack, StepNode } from "../models";

export const DLS: Solution = function DLS({
  sourceNode,
  targetNode,
  maxDepth = 6,
}) {
  const waitingSteps = new Stack<StepNode<Grid>>([new StepNode(sourceNode)]);
  const walkedSteps = <StepNode<Grid>[]>[];
  const walkedNodeString = new Set<string>();

  const depthMap = new Map<number, number>();

  for (const step of waitingSteps) {
    // initialize the step id
    step.id = walkedSteps.length + 1;

    // check if the node depth is over the limit
    // otherwise, set the depth of the node
    const depth = (depthMap.get(step.parentId ?? 0) ?? 0) + 1;
    if (depth > maxDepth) {
      continue;
    }
    depthMap.set(step.id, depth);

    // check if the node is already walked
    // otherwise, set the node as walked
    if (walkedNodeString.has(`${step.node}`)) {
      continue;
    }
    walkedNodeString.add(`${step.node}`);
    walkedSteps.push(step);

    // check if the node is the target
    if (`${step.node}` === `${targetNode}`) {
      return walkedSteps;
    }

    // expand the node
    for (const direction of [
      [0, -1], // U
      [-1, 0], // L
      [0, 1], // D
      [1, 0], // R
    ] as const) {
      const child = step.node.movedBy(direction);
      if (child) {
        waitingSteps.push(new StepNode(child, walkedSteps.length));
      }
    }
  }
  return;
};
