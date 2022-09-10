import { IConnector } from "./IConnector";
import { Url } from "./Url";
import { UUID } from "./UUID";

export interface Wire {
  id: UUID,
  connectors: IConnector[],
  length: number,
  pictures: Url[]
}
