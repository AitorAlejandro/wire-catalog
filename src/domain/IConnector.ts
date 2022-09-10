import { ConnectorName } from "./ConnectorName";
import { ConnectorType } from "./ConnectorType";
import { Sex } from "./Sex";

export interface IConnector {
  name: ConnectorName;
  type: ConnectorType;
  version: string;
  sex: Sex;
}