import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { Document, Page } from "react-pdf";


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
          file="src/assets/matthew_northmore_resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </Container>
    </div>
  );
}

export default Resume;
