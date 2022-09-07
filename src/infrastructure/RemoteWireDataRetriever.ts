import { Wire } from "../domain/Wire";
import { WireDataRetriever } from "./WireDataReceiver";

export class RemoteWireDataRetriever extends WireDataRetriever {
  public retrieve(): Promise<Wire[]> {
    return this.getData();
  }

  private async getData(): Promise<Wire[]> {
    const wireResponse: Response = await fetch(
      "https://aitoralejandro.github.io/wire-catalog/assets/wires.json"
    );
    const wires = wireResponse.ok ? await wireResponse.json() : [];
    console.log('wires >>>> ', wires);
    return wires;
  }
}