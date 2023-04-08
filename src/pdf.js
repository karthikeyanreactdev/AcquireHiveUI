import { Document, Page, pdfjs } from "react-pdf";
import { useState, useRef } from "react";

const PdfExample = () => {
  function convertPdfToImage(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const pdfData = event.target.result;
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      const pdfDoc = pdfjs.getDocument({ data: pdfData });
      pdfDoc.promise.then((doc) => {
        const numPages = doc.numPages;
        for (let i = 1; i <= numPages; i++) {
          doc.getPage(i).then((page) => {
            const canvas = document.createElement("canvas");
            const viewport = page.getViewport({ scale: 1 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const canvasContext = canvas.getContext("2d");
            const renderTask = page.render({
              canvasContext,
              viewport,
            });
            renderTask.promise.then(() => {
              const imageData = canvas.toDataURL("image/jpeg");
              console.log(imageData); // do something with the image data here
            });
          });
        }
      });
    };
    reader.readAsArrayBuffer(file);
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    convertPdfToImage(file);
  }
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default PdfExample;
