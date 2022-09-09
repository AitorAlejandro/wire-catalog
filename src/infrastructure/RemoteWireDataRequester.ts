import { Wire } from "../domain/Wire";
import { WireDataRequester } from "./WireDataRequester";

export class RemoteWireDataRequester extends WireDataRequester {
  public async retrieve(): Promise<Wire[]> {
    const wires = await this.getData();
    console.log('wires >>>> ', wires);
    return wires;
  }

  private async getData(): Promise<Wire[]> {
    const wireResponse: Response = await fetch(
      "https://aitoralejandro.github.io/wire-catalog/assets/wires.json"
    );
    const wireData = wireResponse.ok ? await wireResponse.json() : [];
    return wireData;
  }
}
