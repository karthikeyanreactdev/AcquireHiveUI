import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  Grid,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container } from "@mui/material";

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
  fileName: {
    marginRight: theme.spacing(2),
  },
}));

function FileUpload() {
  const classes = useStyles();
  const [file, setFile] = useState(null);

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

  return (
    <Container maxWidth="lg">
      <Box>
        <input
          accept="image/*"
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
              <Grid container alignItems="center">
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
        {file && (
          <Box className={classes.fileContainer}>
            <Typography variant="subtitle1">Selected file:</Typography>
            <Typography variant="body1">{file.name}</Typography>
          </Box>
        )}
        <Box marginTop={2}>
          <Button variant="contained" color="primary">
            Upload
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default FileUpload;
