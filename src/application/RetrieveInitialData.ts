import { RemoteWireDataRetriever } from "../infrastructure/RemoteWireDataRetriever";

export function retrieveInitialData() {
  const wireDataReceiver = new RemoteWireDataRetriever();
  wireDataReceiver.retrieve();
}
