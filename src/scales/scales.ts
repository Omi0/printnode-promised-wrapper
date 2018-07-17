import { getRequest } from "../requests/requests";
import { PrintNodeScale } from "./scales.interface";

export function getScale(computer_id: string): Promise<PrintNodeScale[]> {
  let path: string = "/computer/" + computer_id + "/scales";
  return new Promise((resolve, reject) => {
    getRequest(path).then((body: PrintNodeScale[]) => {
      resolve(body);
    });
  });
}
