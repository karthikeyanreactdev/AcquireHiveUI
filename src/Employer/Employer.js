import { Box, Button, Container, TextField } from "@mui/material";
import { Tabs, Tab } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import JobListTable from "./Component/JobListTable";
import Candidate from "./Component/Candidate";
import {
  getAllCandidate,
  getAllJobs,
  postJob,
} from "../Service/EmployerService";
import useNotification from "../Hooks/useNotification";

const Employer = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [jobList, setJobList] = useState([]);
  const [candidateList, setCandidateList] = useState([]);
  const navigate = useNavigate();
  const [sendNotification] = useNotification();
  const [description, setDescription] = useState("");

  useEffect(() => {
    getJobList();
    getCandidateListList();
  }, []);

  const getJobList = async () => {
    const responseData = await getAllJobs();
    if (responseData.status === 200) {
      setJobList(responseData?.data?.data);
    }
  };

  const getCandidateListList = async () => {
    const responseData = await getAllCandidate();
    if (responseData.status === 200) {
      setCandidateList(responseData?.data?.data);
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleNavigateUploadPage = async () => {
    const formData = {
      jobDescription: description,
    };
    const responseData = await postJob(formData);
    if (responseData.status === 200) {
      // setJobList(responseData?.data?.data);
      getJobList();
      sendNotification({ message: "Added Success fully", variant: "success" });
      setDescription("");
    }

    // navigate("/employer/upload");
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label="Job Description"
        multiline
        rows={4}
        fullWidth
        defaultValue=""
        value={description}
        onChange={handleChangeDescription}
      />
      <Box sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
        <Button
          sx={{ background: "#0a304c" }}
          variant="contained"
          color="primary"
          onClick={handleNavigateUploadPage}
        >
          Submit
        </Button>
      </Box>

      <Tabs sx={{ mb: 2 }} value={selectedTab} onChange={handleTabChange}>
        <Tab label="Job List" />
        <Tab label="Candidate" />
      </Tabs>
      {selectedTab === 0 && (
        <>
          <JobListTable jobList={jobList} />
        </>
      )}
      {selectedTab === 1 && <Candidate candidateList={candidateList} />}
    </>
  );
};

export default Employer;
