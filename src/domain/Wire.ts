import { UUID, Url } from "../types";

export class Wire {
  id: UUID;
  source: string[];
  target: string[];
  length: number;
  pictures: Url[];

  constructor() { }
}