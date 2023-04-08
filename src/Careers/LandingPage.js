// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";
// import { Container } from "@mui/material";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: "flex",
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     minHeight: "100vh",
// //   },
// //   title: {
// //     fontSize: 32,
// //     fontWeight: "bold",
// //     marginBottom: theme.spacing(2),
// //   },
// //   subTitle: {
// //     fontSize: 24,
// //     marginBottom: theme.spacing(2),
// //   },
// //   card: {
// //     minWidth: 275,
// //     margin: theme.spacing(2),
// //   },
// //   jobTitle: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //   },
// //   pos: {
// //     marginBottom: 12,
// //   },
// // }));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   applyButton: {
//     marginTop: theme.spacing(2),
//     alignSelf: "end",
//     margin: theme.spacing(3),
//   },
// }));

// const jobs = [
//   {
//     id: 1,
//     title: "Front-End Developer",
//     location: "New York, NY",
//     description:
//       "We are looking for an experienced Front-End Developer to join our team.",
//   },
//   {
//     id: 2,
//     title: "Back-End Developer",
//     location: "San Francisco, CA",
//     description:
//       "We are seeking a Back-End Developer to work on our API and server infrastructure.",
//   },
//   {
//     id: 3,
//     title: "Full Stack Developer",
//     location: "Chicago, IL",
//     description:
//       "We are looking for a Full Stack Developer to join our growing team.",
//   },
// ];

// const careersContent = {
//   title: "Join Our Team",
//   description:
//     "We are always looking for talented individuals to join our team. We value collaboration, creativity, and innovation. If you are passionate about technology and want to work with a team of like-minded individuals, we would love to hear from you.",
//   requirements: [
//     "Bachelor’s degree in Computer Science, Engineering, or a related field",
//     "2+ years of relevant work experience",
//     "Experience with React, Node.js, and SQL",
//     "Strong problem-solving skills and ability to work independently",
//   ],
//   benefits: [
//     "Competitive salary",
//     "Comprehensive health benefits package",
//     "Flexible work schedule",
//     "Opportunities for career growth and development",
//   ],
// };

// // const jobList = [
// //   {
// //     title: "Software Engineer",
// //     location: "San Francisco, CA",
// //     description:
// //       "We are looking for a software engineer with experience in ReactJS and NodeJS...",
// //     requirements: [
// //       "3+ years of experience with ReactJS",
// //       "Experience with NodeJS",
// //       "Strong problem solving skills",
// //     ],
// //   },
// //   {
// //     title: "Product Designer",
// //     location: "New York, NY",
// //     description:
// //       "We are looking for a product designer to help us create beautiful and user-friendly interfaces...",
// //     requirements: [
// //       "5+ years of experience as a product designer",
// //       "Expertise in Sketch and Figma",
// //       "Strong portfolio of previous work",
// //     ],
// //   },
// // ];

// const companyDetails = {
//   name: "ABC Inc.",
//   location: "San Francisco, CA",
//   website: "https://www.abcinc.com",
//   description:
//     "ABC Inc. is a leading provider of innovative solutions for the tech industry...",
// };

// const jobList = [
//   {
//     title: "Software Engineer",
//     location: "San Francisco, CA",
//     description:
//       "We are looking for a software engineer with experience in ReactJS and NodeJS...",
//     requirements: [
//       "3+ years of experience with ReactJS",
//       "Experience with NodeJS",
//       "Strong problem solving skills",
//     ],
//   },
//   {
//     title: "Product Designer",
//     location: "New York, NY",
//     description:
//       "We are looking for a product designer to help us create beautiful and user-friendly interfaces...",
//     requirements: [
//       "5+ years of experience as a product designer",
//       "Expertise in Sketch and Figma",
//       "Strong portfolio of previous work",
//     ],
//   },

//   {
//     title: "Product Designer",
//     location: "New York, NY",
//     description:
//       "We are looking for a product designer to help us create beautiful and user-friendly interfaces...",
//     requirements: [
//       "5+ years of experience as a product designer",
//       "Expertise in Sketch and Figma",
//       "Strong portfolio of previous work",
//     ],
//   },

//   {
//     title: "Product Designer",
//     location: "New York, NY",
//     description:
//       "We are looking for a product designer to help us create beautiful and user-friendly interfaces...",
//     requirements: [
//       "5+ years of experience as a product designer",
//       "Expertise in Sketch and Figma",
//       "Strong portfolio of previous work",
//     ],
//   },

//   {
//     title: "Product Designer",
//     location: "New York, NY",
//     description:
//       "We are looking for a product designer to help us create beautiful and user-friendly interfaces...",
//     requirements: [
//       "5+ years of experience as a product designer",
//       "Expertise in Sketch and Figma",
//       "Strong portfolio of previous work",
//     ],
//   },

//   {
//     title: "Product Designer",
//     location: "New York, NY",
//     description:
//       "We are looking for a product designer to help us create beautiful and user-friendly interfaces...",
//     requirements: [
//       "5+ years of experience as a product designer",
//       "Expertise in Sketch and Figma",
//       "Strong portfolio of previous work",
//     ],
//   },
// ];

// const LandingPage = () => {
//   const classes = useStyles();

//   const handleApply = (jobId) => {
//     console.log(`Applying for job with id ${jobId}`);
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 3 }}>
//       {/* <div className={classes.root}>
//         <Typography className={classes.title}>Careers</Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Typography className={classes.subTitle}>
//               {careersContent.title}
//             </Typography>
//             <Typography variant="body1" component="p" gutterBottom>
//               {careersContent.description}
//             </Typography>
//             <Typography variant="h6" component="h6" gutterBottom>
//               Requirements
//             </Typography>
//             {careersContent.requirements.map((requirement) => (
//               <Typography
//                 key={requirement}
//                 variant="body2"
//                 component="p"
//                 gutterBottom
//               >
//                 - {requirement}
//               </Typography>
//             ))}
//             <Typography variant="h6" component="h6" gutterBottom>
//               Benefits
//             </Typography>
//             {careersContent.benefits.map((benefit) => (
//               <Typography
//                 key={benefit}
//                 variant="body2"
//                 component="p"
//                 gutterBottom
//               >
//                 - {benefit}
//               </Typography>
//             ))}
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography className={classes.subTitle}>Job Listings</Typography>
//             {jobs.map((job) => (
//               <Card key={job.id} className={classes.card}>
//                 <CardContent>
//                   <Typography
//                     className={classes.jobTitle}
//                     color="textPrimary"
//                     gutterBottom
//                   >
//                     {job.title}
//                   </Typography>
//                   <Typography className={classes.pos} color="textSecondary">
//                     {job.location}
//                   </Typography>
//                   <Typography variant="body2" component="p" gutterBottom>
//                     {job.description}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleApply(job.id)}
//                   >
//                     Apply
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </Grid>
//         </Grid>
//       </div> */}
//       <div className={classes.root}>
//         <Typography variant="h4" gutterBottom>
//           Join Our Team at {companyDetails.name}
//         </Typography>
//         <Typography variant="subtitle1" gutterBottom>
//           {companyDetails.location} |{" "}
//           <a href={companyDetails.website}>{companyDetails.website}</a>
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {companyDetails.description}
//         </Typography>
//         <Grid container spacing={3}>
//           {jobList.map((job) => (
//             <Grid item xs={12} sm={6} md={4} key={job.title}>
//               <Card className={classes.card}>
//                 <CardContent className={classes.cardContent}>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {job.title}
//                   </Typography>
//                   <Typography
//                     variant="subtitle1"
//                     color="textSecondary"
//                     gutterBottom
//                   >
//                     {job.location}
//                   </Typography>
//                   <Typography variant="body1" gutterBottom>
//                     {job.description}
//                   </Typography>
//                   <Typography variant="subtitle2" gutterBottom>
//                     Requirements:
//                   </Typography>
//                   <ul>
//                     {job.requirements.map((requirement) => (
//                       <li key={requirement}>{requirement}</li>
//                     ))}
//                   </ul>
//                 </CardContent>
//                 <Button
//                   className={classes.applyButton}
//                   variant="contained"
//                   color="primary"
//                 >
//                   Apply
//                 </Button>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </Container>
//   );
// };

// export default LandingPage;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Avatar,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import logo from "../Assets/png/logo.png";
// import PostLoginHeader from "../Header/PostLoginHeader";
// import Footer from "../Footer/Footer";

// const useStyles = makeStyles((theme) => ({
//   header: {
//     // backgroundColor: "#fff",
//     padding: theme.spacing(2, 4),
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   logo: {
//     marginRight: theme.spacing(2),
//     width: "35px",
//   },
//   jobCardApplyButtonCard: {
//     justifyContent: "end",
//   },
//   hero: {
//     backgroundImage: 'url("/images/hero-background.jpg")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     // color: "#fff",
//     padding: theme.spacing(12, 0),
//   },
//   heroTitle: {
//     fontWeight: "bold",
//     marginBottom: theme.spacing(3),
//   },
//   heroSubtitle: {
//     marginBottom: theme.spacing(3),
//   },
//   jobCard: {
//     maxWidth: 400,
//     margin: "auto",
//     position: "relative",
//   },
//   jobCardHeader: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: theme.spacing(2),
//   },
//   jobCardAvatar: {
//     marginRight: theme.spacing(2),
//   },
//   jobCardTitle: {
//     fontWeight: "bold",
//   },
//   jobCardLocation: {
//     marginLeft: "auto",
//   },
//   jobCardApplyButton: {
//     // position: "absolute",
//     // bottom: theme.spacing(2),
//     // right: theme.spacing(2),
//   },
//   footer: {
//     backgroundColor: "#f1f1f1",
//     padding: theme.spacing(4, 0),
//     marginTop: theme.spacing(4),
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   mainContainer: {
//     minHeight: "calc(100vh - 70px)",
//   },
// }));

// const jobList = [
//   {
//     title: "React Developer",
//     location: "Pune, Maharashtra",
//     description:
//       "We are seeking a React Developer with 2+ years of experience to join our team in Pune...",
//     skills: ["React", "Node.js", "JavaScript"],
//   },
//   {
//     title: "Full Stack Developer",
//     location: "Remote",
//     description:
//       "We are seeking a Full Stack Developer with 3+ years of experience to join our remote team...",
//     skills: ["React", "Node.js", "JavaScript", "AWS"],
//   },
//   {
//     title: "UI/UX Designer",
//     location: "Mumbai, Maharashtra",
//     description:
//       "We are seeking a UI/UX Designer with 5+ years of experience to join our team in Mumbai...",
//     skills: ["Sketch", "Figma", "Adobe Creative Suite"],
//   },
// ];

// function LandingPage() {
//   const classes = useStyles();

//   return (
//     <>
//       <div className={classes.mainContainer}>
//         {/* Header */}
//         <PostLoginHeader />

//         {/* Hero */}
//         <section className={classes.hero}>
//           <Container maxWidth="md">
//             <Typography variant="h1" className={classes.heroTitle}>
//               Join Our Team
//             </Typography>
//             <Typography variant="h5" className={classes.heroSubtitle}>
//               We're looking for talented and passionate individuals to join us
//               on our mission to change the world.
//             </Typography>
//             <Button variant="contained" color="primary">
//               Browse Jobs
//             </Button>
//           </Container>
//         </section>

//         {/* Job Listings */}
//         <section>
//           <Container maxWidth="lg">
//             <Grid container spacing={4}>
//               {jobList.map((job) => (
//                 <Grid item xs={12} sm={6} md={4} key={job.title}>
//                   <Card className={classes.jobCard}>
//                     <CardContent>
//                       <div className={classes.jobCardHeader}>
//                         <Avatar className={classes.jobCardAvatar}>JD</Avatar>
//                         <div>
//                           <Typography
//                             variant="h6"
//                             className={classes.jobCardTitle}
//                           >
//                             {job.title}
//                           </Typography>
//                           <Typography
//                             variant="subtitle2"
//                             className={classes.jobCardLocation}
//                           >
//                             {job.location}
//                           </Typography>
//                         </div>
//                       </div>
//                       <Typography variant="body1">{job.description}</Typography>
//                     </CardContent>
//                     <CardActions className={classes.jobCardApplyButtonCard}>
//                       <Button
//                         variant="outlined"
//                         color="primary"
//                         className={classes.jobCardApplyButton}
//                       >
//                         Apply Now
//                       </Button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </section>
//       </div>
//       {/* Footer */}
//       {/* <footer className={classes.footer}>
//         <Typography variant="body2" align="center">
//           &copy; 2023 InStride Technologies Pvt. Ltd. All rights reserved.
//         </Typography>
//       </footer> */}
//       <Footer />
//     </>
//   );
// }

// export default LandingPage;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Container,
//   Typography,
//   Grid,
//   Box,
//   Button,
//   AppBar,
//   Toolbar,
// } from "@material-ui/core";
// // import backgroundImage from "./background.jpg";
// import logo from "../Assets/png/logo.png";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#F8F9FA",
//     minHeight: "100vh",
//     position: "relative",
//   },
//   hero: {
//     height: "70vh",
//     background: "#1a1a42",
//     // backgroundImage: `url('https://cdn.syncfusion.com/content/images/Careers/career-logo.png`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: theme.palette.common.white,
//     textAlign: "center",
//     [theme.breakpoints.down("xs")]: {
//       height: "50vh",
//     },
//   },
//   logo: {
//     width: 120,
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.down("xs")]: {
//       width: 100,
//     },
//   },
//   title: {
//     fontWeight: 700,
//     marginBottom: theme.spacing(4),
//   },
//   subtitle: {
//     fontWeight: 400,
//     marginBottom: theme.spacing(8),
//   },
//   jobTitle: {
//     fontWeight: 700,
//   },
//   jobDescription: {
//     marginBottom: theme.spacing(2),
//   },
//   jobRequirements: {
//     marginBottom: theme.spacing(4),
//     listStyle: "none",
//     paddingLeft: 0,
//   },
//   location: {
//     fontWeight: 700,
//   },
//   footer: {
//     top: "auto",
//     bottom: 0,
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   appLogo: {
//     width: "35px",
//     marginRight: theme.spacing(2),
//   },
// }));

// const CareersPage = () => {
//   const classes = useStyles();

//   const jobs = [
//     {
//       title: "Software Engineer",
//       description:
//         "We are seeking a highly skilled software engineer with experience in ReactJS and NodeJS to join our growing team.",
//       requirements: [
//         "5+ years of experience in software development",
//         "Strong proficiency in ReactJS and NodeJS",
//         "Experience with AWS and serverless architecture",
//         "Excellent problem-solving skills and ability to work collaboratively",
//       ],
//       location: "Remote",
//     },
//     {
//       title: "Product Manager",
//       description:
//         "We are looking for an experienced product manager to lead the development and launch of our new mobile app.",
//       requirements: [
//         "7+ years of experience in product management",
//         "Experience launching successful mobile apps",
//         "Strong analytical and strategic thinking skills",
//         "Excellent communication and collaboration skills",
//       ],
//       location: "San Francisco, CA",
//     },
//   ];

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <img src={logo} alt="Logo" className={classes.appLogo} />
//           <Typography variant="h6" color="textPrimary">
//             Company Name
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box className={classes.hero}>
//         <Container>
//           <Typography variant="h2" align="center" className={classes.title}>
//             Join Our Team
//           </Typography>
//           <Typography variant="h5" align="center" className={classes.subtitle}>
//             We are always looking for talented and passionate individuals to
//             join our growing team.
//           </Typography>
//           <Button variant="contained" color="primary">
//             View Open Positions{" "}
//           </Button>
//         </Container>
//       </Box>
//       <Container maxWidth="md" className={classes.content}>
//         <Grid container spacing={4}>
//           {jobs.map((job) => (
//             <Grid item xs={12} md={6} key={job.title}>
//               <Box boxShadow={2} p={4}>
//                 <Typography variant="h6" className={classes.jobTitle}>
//                   {job.title}
//                 </Typography>
//                 <Typography variant="body1" className={classes.jobDescription}>
//                   {job.description}
//                 </Typography>
//                 <Typography variant="subtitle1" className={classes.location}>
//                   Location: {job.location}
//                 </Typography>
//                 <ul className={classes.jobRequirements}>
//                   {job.requirements.map((requirement) => (
//                     <li key={requirement}>
//                       <Typography variant="body2">{requirement}</Typography>
//                     </li>
//                   ))}
//                 </ul>
//                 <Button variant="contained" color="primary">
//                   Apply Now
//                 </Button>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <AppBar position="static" color="primary" className={classes.footer}>
//         <Toolbar>
//           <Typography variant="body2" color="inherit">
//             © {new Date().getFullYear()} Company Name. All Rights Reserved.
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default CareersPage;

import React, { useEffect, useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import landingPageLogo from "../Assets/png/landingPageBg.png";
import logo from "../Assets/png/logo.png";
import PostLoginHeader from "../Header/PostLoginHeader";
import { getAllJobs } from "../Service/EmployerService";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "500px",
    maxWidth: "510px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: theme.spacing(5),
  },
  jobApply: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  appContainer: {
    // marginTop: theme.spacing(5),
    background: `url(${landingPageLogo})`,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backgroundSize: "cover",
    paddingTop: "40px",
    paddingBottom: "40px",
    // "&, &:before, &:after": {
    //   // your styles
    //   content: "",
    //   display: "block",
    //   opacity: 0.8,
    //   zIndex: -1,
    // },
  },
  submitButton: {
    marginTop: theme.spacing(5),
  },
  bgTransparent: {
    background: "transparent",
    backgroundColor: "transparent !important",
    color: "white",
  },
  logo: {
    width: "35px",
    marginRight: theme.spacing(2),
  },
  cardContent: {
    boxShadow: "0px 3px 5px 0px rgba(10,48,76,1) !important",
  },
  applyButton: {
    backgroundColor: "#0a304c !important",
  },
  aiPoweredText: {
    fontWeight: "bold",
  },
  aiPoweredSubText: {
    marginTop: theme.spacing(2),
    fontSize: "32px",
    fontWeight: "bold",
  },
  aiPoweredSubTextPara: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
  },
}));

const jobs = [
  {
    title: "Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    applyLink: "https://example.com/apply",
  },
  {
    title: "Web Developer",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    applyLink: "https://example.com/apply",
  },
];

const JobCard = ({ job }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleApplyJob = (id) => {
    navigate("/upload", { state: { id: job?.id } });
  };

  return (
    <Card
      fullWidth
      sx={{ mt: 3 }}
      className={`${classes.bgTransparent} ${classes.cardContent}`}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {job.job_description} */}
          {job.job_description.length > 200
            ? `${job.job_description.substring(0, 200)}…`
            : job.job_description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          className={`${classes.applyButton}`}
          onClick={handleApplyJob}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default function LandingPage() {
  const classes = useStyles();
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    getJobList();
  }, []);

  const getJobList = async () => {
    const responseData = await getAllJobs();
    if (responseData.status === 200) {
      setJobList(responseData?.data?.data);
    }
  };

  return (
    <div>
      {/* <AppBar position="static" className={classes.appBar}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AcquireHive
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      <PostLoginHeader />
      <Box className={classes.appContainer}>
        <Container maxWidth="lg">
          <Paper className={classes.paper + " " + classes.bgTransparent}>
            {/* <Typography variant="h3">AcquireHive</Typography> */}

            <Typography variant="h2" className={classes.aiPoweredText}>
              AI Powered
            </Typography>
            <Typography variant="h3" className={classes.aiPoweredSubText}>
              Automated Recruitment System{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.aiPoweredSubTextPara}
            >
              An AI-powered recruitment system is a technology-driven platform
              that automates various aspects of the hiring process, such as
              resume screening, candidate matching, and interview scheduling, to
              streamline and optimize recruitment efforts.
            </Typography>
          </Paper>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <div>
          {jobList.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </Container>
      <footer className={classes.footer + " " + classes.bgTransparent}>
        <Typography variant="h6" align="center" gutterBottom>
          My Company
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius,
          sapien vel euismod porttitor, elit nulla laoreet arcu, at bibendum
          urna turpis vel justo. Proin vel quam dui. Curabitur vel justo in
          pellentesque viverra quis at mauris. Sed pharetra quam non orci
          bibendum, a imperdiet turpis euismod. Sed venenatis vitae sapien quis
          accumsan.
        </Typography>
      </footer>
    </div>
  );
}
