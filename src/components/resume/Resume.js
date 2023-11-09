import React from 'react'
import { Document, Page } from 'react-pdf';

const Resume = () => {
  return (
    <>
        <Document file='/Resume.pdf'
          onLoadError={() => {
            console.log("CALLED");
          }} options={{ workerSrc: "/pdf.worker.js" }}>
            <Page pageNumber={1} />
        </Document>
    </>
  )
}

export default Resume
