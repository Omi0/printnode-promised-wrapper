# Printnode API promised wrapper

Simple wrapper around official Printnode API utilising Promises.

[Printnode](https://www.printnode.com/) is SAAS service to send printjob directly to the printer.

## System Requirements

- [Bluebird](https://github.com/petkaantonov/bluebird)
- [Request](https://github.com/request/request)

## Installation

To install enter the following command, second "npm instal" command is used to download files from repository:

```
npm install --save Omi0/printnode-promised-wrapper#master
npm install
```

To update enter the following command. Which removed local files and reupload them from repository again

```
npm uninstall @omio/printnode-promised-wrapper && npm install
```

## Usage

To Use we need to import the function. This is the basic example how to print a document with a default online printer

```
import { createPrintjob } from "./printjobs";
import { getPrinters } from "./printers";

getPrinters()
.then(printers => {
  // Getting Default Online Printer
  let printer = printers.find(
    printer => printer.default === true && printer.state === "online"
  );
  // Crepating Printjob for that printer
  return createPrintjob({
    printerId: printer.id,
    title: "My Test PrintJob",
    contentType: "pdf_uri",
    content:
      "https://link-to-pdf-file.pdf",
    source: "Website"
  })
})
.then(printjob => {
  console.log(printjob);
})
.catch(err => {
  console.log(printjob);
})
```
