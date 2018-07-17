import { getRequest } from "../requests/requests";
import { PrintNodePrinter } from "./printers.interface";

export function getPrinters(): Promise<PrintNodePrinter[]> {
  let path: string = "/printers";
  return new Promise((resolve, reject) => {
    getRequest(path).then((body: PrintNodePrinter[]) => {
      resolve(body);
    });
  });
}
