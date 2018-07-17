import { getRequest, postRequest } from "../requests/requests";
import {
  PrintNodePrintjob,
  PrintNodePrintjobOptions,
  PrintNodePrintjobAuthentication
} from "./printjobs.interface";

export function getPrintjobs(): Promise<PrintNodePrintjob[]> {
  const path: string = "/printjobs";
  return new Promise((resolve, reject) => {
    getRequest(path).then((body: PrintNodePrintjob[]) => {
      resolve(body);
    });
  });
}

export function createPrintjob(params: {
  printerId: number;
  title: string;
  contentType: "pdf_uri" | "pdf_base64" | "raw_uri" | "raw_base64";
  content: string;
  source: string;
  options?: PrintNodePrintjobOptions;
  expireAfter?: number;
  qty?: number;
  authentication?: PrintNodePrintjobAuthentication;
}): Promise<any> {
  const path: string = "/printjobs";
  return new Promise((resolve, reject) => {
    postRequest(path, params).then(body => {
      resolve(body);
    });
  });
}
