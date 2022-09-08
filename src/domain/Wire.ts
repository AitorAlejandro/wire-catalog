import { UUID, Url } from "./types";

export interface Wire {
  id: UUID,
  source: string[],
  target: string[],
  length: number,
  pictures: Url[]
}