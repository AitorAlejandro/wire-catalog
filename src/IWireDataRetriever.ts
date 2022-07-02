import { Wire } from "./Wire";

export interface IWireDataRetriever {
  retrieve(): Promise<Wire[]>;
}