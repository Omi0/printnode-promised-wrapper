import { getRequest } from "../requests/requests";
import { PrintNodeClient } from "./clients.interface";

export function getClients(): Promise<PrintNodeClient[]> {
  const path: string = "/download/clients";
  return new Promise((resolve, reject) => {
    getRequest(path).then((body: PrintNodeClient[]) => {
      resolve(body);
    });
  });
}
