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
    let result = `${this.parentId ?? ''}`;
    this.parentId && (result += ' --> ');
    result += `${this.id}`;
    result += `[\n${this.node}]`;
    return result;
  }
}
