import { getRequest } from "../requests/requests";
import { PrintNodeComputer } from "./computers.interface";

export function getComputers(): Promise<PrintNodeComputer[]> {
  const path: string = "/computers";
  return new Promise((resolve, reject) => {
    getRequest(path).then((body: PrintNodeComputer[]) => {
      resolve(body);
    });
  });
}
