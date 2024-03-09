export class Grid {
  position: [number, number];
  records: number[][];

  constructor(options: { position: [number, number]; records: number[][] }) {
    this.position = [...options.position];
    this.records = options.records.map((record) => [...record]);
    if (
      typeof this.records[this.position[0]]?.[this.position[1]] !== "number"
    ) {
      throw new RangeError(`Invalid position: [${this.position}]`);
    }
  }

  movedBy(
    positionDifference:
      | readonly [0, -1]
      | readonly [0, 1]
      | readonly [-1, 0]
      | readonly [1, 0]
  ): Grid | undefined {
    const result = new Grid(this);

    // Update position
    result.position[0] += positionDifference[0];
    result.position[1] += positionDifference[1];
    if (
      result.position[0] < 0 ||
      result.position[1] < 0 ||
      result.position[0] >= result.records.length ||
      result.position[1] >= result.records[result.position[0]]!.length
    ) {
      return;
    }

    // Update records
    [
      result.records[this.position[0]]![this.position[1]]!,
      result.records[result.position[0]]![result.position[1]]!,
    ] = [
      result.records[result.position[0]]![result.position[1]]!,
      result.records[this.position[0]]![this.position[1]]!,
    ];
    return result;
  }

  toString(): string {
    return this.records.map((record) => record.join(" ")).join("\n");
  }
}
