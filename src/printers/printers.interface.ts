import { PrintNodeComputer } from "../computers/computers.interface";

export interface PrintNodePrinter {
  id: number;
  computer: PrintNodeComputer;
  name: string;
  description: string;
  capabilities: PrintNodePrinterCapabilities;
  default: null;
  createTimestamp: string;
  state: string;
}
export interface PrintNodePrinterCapabilities {
  bins: string[];
  collate: boolean;
  color: boolean;
  copies: number;
  dpis: string[];
  duplex: boolean;
  extent: Array<number[]>;
  medias: any[];
  nup: any[];
  papers: { [key: string]: number[] };
  printrate: PrintNodePrinterCapabilitiesPrintrate;
  supports_custom_paper_size: boolean;
}

export interface PrintNodePrinterCapabilitiesPrintrate {
  unit: string;
  rate: number;
}
