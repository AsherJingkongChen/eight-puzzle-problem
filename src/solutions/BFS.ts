import { Grid, Queue, Solution, StepNode } from "../models";

export const BFS: Solution = function BFS({ sourceNode, targetNode }) {
  const waitingSteps = new Queue<StepNode<Grid>>([new StepNode(sourceNode)]);
  const walkedSteps = <StepNode<Grid>[]>[];
  const walkedNodeString = new Set<string>();

  for (const step of waitingSteps) {
    // check if the node is already walked
    if (walkedNodeString.has(`${step.node}`)) {
      continue;
    }

    // mark the node as walked
    walkedNodeString.add(`${step.node}`);
    walkedSteps.push(step);
    step.id = walkedSteps.length;

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
