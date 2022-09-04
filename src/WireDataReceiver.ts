import { IWireDataRetriever } from "./IWireDataRetriever";
import { Wire } from "./Wire";

export abstract class WireDataRetriever implements IWireDataRetriever {
  abstract retrieve(): Promise<Wire[]>;
}