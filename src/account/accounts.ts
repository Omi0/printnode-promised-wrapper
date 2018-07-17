import { getRequest } from "../requests/requests";
import { PrintNodeWhoami } from "./accounts.interface";

export function getWhoami(): Promise<PrintNodeWhoami> {
  const path: string = "/whoami";
  return new Promise((resolve, reject) => {
    getRequest(path).then((body: PrintNodeWhoami) => {
      resolve(body);
    });
  });
}
