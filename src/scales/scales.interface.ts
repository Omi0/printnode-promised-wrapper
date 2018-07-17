export interface PrintNodeScale {
  mass: Array<number | null>;
  deviceName: string;
  deviceNum: number;
  port: string;
  count: null;
  measurement: PrintNodeScaleMeasurement;
  clientReportedCreateTimestamp: string;
  ntpOffset: null;
  ageOfData: number;
  computerId: number;
  vendor: string;
  product: string;
  vendorId: number;
  productId: number;
}

export interface PrintNodeScaleMeasurement {
  g: number;
}
