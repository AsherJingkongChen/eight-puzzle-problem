export class StepNode<TNode> {
  node: TNode;
  parentId?: number;
  id?: number;

  constructor(node: TNode, parentId?: number, id?: number) {
    this.node = node;
    this.parentId = parentId;
    this.id = id;
  }

  toString(): string {
    return `${this.parentId ?? "0((Start))"} -- ${this.id} --> ${this.id}[\n${this.node}]`;
  }
}
