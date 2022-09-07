import { RemoteWireDataRetriever } from "../infrastructure/RemoteWireDataRetriever";

export function startApp() {
  const wireDataReceiver = new RemoteWireDataRetriever();
  wireDataReceiver.retrieve();
}
