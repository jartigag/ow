type Log = string;
type NodeID = string;

export enum PlanetColour {
  PURPLE,
  GREEN,
  ORANGE,
  GREY,
  RED,
}

export enum MapNodeSize {
  XSMALL,
  SMALL,
  MEDIUM,
  LARGE,
}

type Coordinate = {
  x: number;
  y: number;
};

export type MapNode = {
  id: NodeID;
  name: string;
  image: string;
  colour: PlanetColour;
  sizeClass: MapNodeSize;
  logs: Log[];
  connections: NodeID[];
  location: Coordinate;
};

export type Connection = {
  from: MapNode;
  to: MapNode;
};

export type Universe = {
  nodes: MapNode[];
};
