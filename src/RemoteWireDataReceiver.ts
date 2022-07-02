import { Wire } from "./Wire";
import { WireDataRetriever } from "./WireDataReceiver";

export class RemoteRecipeDataRetriever extends WireDataRetriever {
  retrieve(): Promise<Wire[]> {
    return this.getData();
  }

  async getData(): Promise<Wire[]> {
    const wireResponse = await fetch(
      "https://aitoralejandro.github.io/wire-catalog/assets/wires.json"
    );
    const wires = await wireResponse.json();
    console.log(wires);
    return wires;
  }
}