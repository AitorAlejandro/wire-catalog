import { IWireDataRetriever } from "./IWireDataRetriever";
import { Wire } from "./domain/Wire";

export abstract class WireDataRetriever implements IWireDataRetriever {
  abstract retrieve(): Promise<Wire[]>;
}