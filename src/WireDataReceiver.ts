import { IWireDataRetriever } from "./IWireDataRetriever";

export abstract class WireDataRetriever implements IWireDataRetriever {
  abstract retrieve(): any;
}