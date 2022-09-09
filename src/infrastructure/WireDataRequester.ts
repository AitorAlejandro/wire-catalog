import { IWireDataRequester } from "../domain/IWireDataRequester";
import { Wire } from "../domain/Wire";

export abstract class WireDataRequester implements IWireDataRequester {
  abstract retrieve(): Promise<Wire[]>;
}
