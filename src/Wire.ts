import { UUID, Url } from "./types";

export class Wire {
  id: UUID;
  source: string[];
  target: string[]
  length: number | null;
  picture: Url;

  constructor() { }
}