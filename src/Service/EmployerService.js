import axiosInstance from "../Utils.js/Axios";

export const getAllCandidate = () => {
  try {
    const response = axiosInstance.get("/get_candidates");
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllJobs = () => {
  try {
    const response = axiosInstance.get("/get_jobs");
    return response;
  } catch (error) {
    return error;
  }
};

export const postJob = (formData) => {
  try {
    const response = axiosInstance.post("/create_job_post", formData);
    return response;
  } catch (error) {
    return error;
  }
};

// axiosInstance.get("/get_jobs").then((response) => {
//   console.log(response.data);
// });
