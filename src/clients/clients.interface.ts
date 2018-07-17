export interface PrintNodeClient {
  id: number;
  enabled: boolean;
  edition: string;
  version: string;
  os: string;
  filename: string;
  filesize: number;
  sha1: string;
  releaseTimestamp: string;
  url: string;
}
