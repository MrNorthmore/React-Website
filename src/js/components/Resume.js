import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container>
        <Document 
          file={'src/matthew_northmore_resume.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={pageNumber}/>
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </Container>
    </div>
  );
}

export default Resume;
