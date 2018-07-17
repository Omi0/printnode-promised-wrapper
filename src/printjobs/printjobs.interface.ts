import { PrintNodePrinter } from "../printers/printers.interface";

export interface PrintNodePrintjob {
  id: number;
  printer: PrintNodePrinter;
  title: string;
  contentType: string;
  source: string;
  expireAt: null;
  createTimestamp: string;
  state: string;
}
export interface PrintNodePrintjobState {
  printJobId: number;
  state: string;
  message: null;
  data: null;
  clientVersion: null;
  createTimestamp: string;
  age: number;
}
export interface PrintNodePrintjobOptions {
  bin: string;
  collate: boolean;
  copies: number;
  dpi: string;
  duplex: string;
  fit_to_page: boolean;
  media: string;
  nup: number;
  pages: string;
  paper: string;
  rotate: number;
}
export interface PrintNodePrintjobAuthentication {
  type: "BasicAuth" | "DigestAuth";
  credentials: {
    user: string;
    pass: string;
  };
}
