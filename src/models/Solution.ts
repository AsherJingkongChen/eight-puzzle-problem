import { StepNode, Grid } from ".";

export type Solution = (options: {
  sourceNode: Grid;
  targetNode: Grid;
  [_: string]: any;
}) => StepNode<Grid>[] | undefined;
