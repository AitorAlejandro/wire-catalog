import { Wire } from "./Wire";

export interface IWireDataRequester {
  retrieve(): Promise<Wire[]>;
}
