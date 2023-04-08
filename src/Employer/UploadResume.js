import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, IconButton, Paper, Grid } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box, Container, Modal } from "@mui/material";
import ResumeDetailModal from "./Component/ResumeDetailModal";
import { Document, Page, pdfjs } from "react-pdf";
// import pdfjs from "pdfjs-dist";
import Iframe from "react-iframe";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(4),
    backgroundColor: theme.palette.grey[200],
    border: `2px dashed ${theme.palette.grey[500]}`,
    cursor: "pointer",
  },
  input: {
    display: "none",
  },
  fileContainer: {
    marginTop: theme.spacing(2),
  },
  fileNameContainer: {
    justifyContent: "center",
  },
  btnContainer: {
    marginTop: "1rem",
    mt: 2,
    display: "flex",
    justifyContent: "end",
  },
  fileName: {
    marginRight: theme.spacing(2),
  },
}));
const UploadResume = () => {
  const classes = useStyles();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const { state } = useLocation();
  console.log("state", state);

  const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleFileDelete = () => {
    setFile(null);
  };

  const handleUploadFile = () => {
    setIsDetailModalOpen(true);
  };

  const handleDetailModalClose = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <>
      {/* <Modal
        open={isDetailModalOpen}
        onClose={handleDetailModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ResumeDetailModal onClose={handleDetailModalClose} />
      </Modal> */}
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <ResumeDetailModal
          isOpen={isDetailModalOpen}
          onClose={handleDetailModalClose}
        />
        <Box>
          <input
            // accept="image/*"
            accept=".pdf"
            className={classes.input}
            id="file-upload"
            type="file"
            onChange={handleFileSelect}
          />
          <label htmlFor="file-upload">
            <Paper
              className={classes.root}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
            >
              {!file && (
                <React.Fragment>
                  <CloudUploadIcon fontSize="large" />
                  <Typography variant="h6" component="h2">
                    Drag and drop a file here, or click to select a file
                  </Typography>
                </React.Fragment>
              )}
              {file && (
                <Grid
                  container
                  alignItems="center"
                  className={classes.fileNameContainer}
                >
                  <Grid item className={classes.fileName}>
                    <Typography variant="h6">{file.name}</Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={handleFileDelete}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              )}
            </Paper>
          </label>
          {/* {file && (
          <Box className={classes.fileContainer}>
            <Typography variant="subtitle1">Selected file:</Typography>
            <Typography variant="body1">{file.name}</Typography>
          </Box>
        )} */}
          <Box
            marginTop={2}
            className={classes.btnContainer}
            onClick={handleUploadFile}
          >
            <Button variant="contained" color="primary">
              Upload
            </Button>
          </Box>

          {file && (
            <Box
              sx={{
                width: "100%",
                mt: 2,
                boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
                py: 3,
              }}
            >
              <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => (
                    <Page pageNumber={page} renderTextLayer={false} />
                  ))}
              </Document>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default UploadResume;
