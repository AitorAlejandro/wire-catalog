import { IWireDataRetriever } from "../domain/IWireDataRetriever";
import { Wire } from "../domain/Wire";

export abstract class WireDataRetriever implements IWireDataRetriever {
  abstract retrieve(): Promise<Wire[]>;
}