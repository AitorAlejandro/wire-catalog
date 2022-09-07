import { Wire } from "./domain/Wire";

export interface IWireDataRetriever {
  retrieve(): Promise<Wire[]>;
}