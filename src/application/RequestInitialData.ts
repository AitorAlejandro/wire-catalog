import { RemoteWireDataRequester } from "../infrastructure/RemoteWireDataRequester";

export function requestInitialData() {
  const wireDataRequester = new RemoteWireDataRequester();
  wireDataRequester.retrieve();
}
