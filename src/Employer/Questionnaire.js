// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   CircularProgress,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   Typography,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   question: {
//     margin: theme.spacing(4, 0),
//   },
//   answer: {
//     margin: theme.spacing(2, 0),
//   },
//   timer: {
//     marginTop: theme.spacing(4),
//   },
//   loading: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   },
// }));

// const QuestionnairePage = () => {
//   const classes = useStyles();
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(60);

//   useEffect(() => {
//     // Fetch questions data from server
//     setQuestions([
//       {
//         id: 1,
//         text: "What is the capital of France?",
//         choices: [
//           {
//             id: 1,
//             text: "Paris",
//           },
//           {
//             id: 2,
//             text: "Berlin",
//           },
//           {
//             id: 3,
//             text: "London",
//           },
//           {
//             id: 4,
//             text: "Rome",
//           },
//         ],
//       },
//       {
//         id: 2,
//         text: "What is the largest planet in our solar system?",
//         choices: [
//           {
//             id: 5,
//             text: "Mercury",
//           },
//           {
//             id: 6,
//             text: "Jupiter",
//           },
//           {
//             id: 7,
//             text: "Venus",
//           },
//           {
//             id: 8,
//             text: "Mars",
//           },
//         ],
//       },
//       {
//         id: 3,
//         text: "What is the highest mountain in the world?",
//         choices: [
//           {
//             id: 9,
//             text: "Mount Everest",
//           },
//           {
//             id: 10,
//             text: "Mount Kilimanjaro",
//           },
//           {
//             id: 11,
//             text: "Mount Fuji",
//           },
//           {
//             id: 12,
//             text: "Mount McKinley",
//           },
//         ],
//       },
//     ]);
//   }, []);

//   useEffect(() => {
//     // Update timer every second
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     // Reset timer and move on to next question when time runs out
//     if (timeLeft === 0) {
//       handleAnswer(null);
//     }

//     // Clear timer when component unmounts
//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const handleAnswer = (answerId) => {
//     // Update selected answer and move on to next question after a delay
//     setSelectedAnswer(answerId);
//     setTimeout(() => {
//       setSelectedAnswer(null);
//       if (currentQuestionIndex < questions.length - 1) {
//         setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//         setTimeLeft(60);
//       } else {
//         // Submit answers when on the last question
//         submitAnswers();
//       }
//     }, 1000);
//   };

//   const submitAnswers = () => {
//     console.log("choices");
//     // TODO: Implement submit answers functionality
//   };

//   if (questions.length === 0) {
//     return (
//       <div className={classes.loading}>
//         <CircularProgress />
//       </div>
//     );
//   }

//   const question = questions[currentQuestionIndex];

//   return (
//     <div>
//       <Container maxWidth="sm">
//         <Box>
//           <Typography variant="h4" component="h1" className={classes.question}>
//             {question.text}
//           </Typography>
//           <FormControl component="fieldset">
//             <RadioGroup
//               value={selectedAnswer}
//               onChange={(event) => handleAnswer(event.target.value)}
//             >
//               {question?.choices?.map((answer) => (
//                 <FormControlLabel
//                   key={answer.id}
//                   value={answer.id}
//                   control={<Radio color="primary" />}
//                   label={answer.text}
//                   disabled={selectedAnswer !== null}
//                   className={classes.answer}
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>
//           <Typography variant="h5" component="div" className={classes.timer}>
//             {`Time left: ${timeLeft}s`}
//           </Typography>
//           {currentQuestionIndex < questions.length - 1 ? (
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleAnswer(null)}
//               disabled={selectedAnswer === null}
//             >
//               Next
//             </Button>
//           ) : (
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={submitAnswers}
//               disabled={selectedAnswer === null}
//             >
//               Submit
//             </Button>
//           )}
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default QuestionnairePage;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import { Box, Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  question: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    marginTop: theme.spacing(2),
  },
}));

const questions = [
  {
    id: 1,
    text: "What is React JS?",
    options: [
      { id: "a", text: "A programming language" },
      { id: "b", text: "A JavaScript library for building user interfaces" },
      { id: "c", text: "A database management system" },
    ],
    answer: "b",
  },
  {
    id: 2,
    text: "What is JSX?",
    options: [
      { id: "a", text: "A JavaScript file extension" },
      {
        id: "b",
        text: "A markup language that allows embedding of HTML in JavaScript code",
      },
      {
        id: "c",
        text: "A preprocessor that compiles React code into plain JavaScript",
      },
    ],
    answer: "b",
  },
  {
    id: 3,
    text: "What is the virtual DOM?",
    options: [
      { id: "a", text: "A virtual representation of the browser's DOM" },
      { id: "b", text: "A physical representation of the browser's DOM" },
      { id: "c", text: "A way to optimize rendering performance in React" },
    ],
    answer: "a",
  },
  {
    id: 4,
    text: "What is the difference between props and state in React?",
    options: [
      { id: "a", text: "Props are mutable while state is immutable" },
      {
        id: "b",
        text: "Props are used to pass data from parent components to child components, while state is used to manage data within a component",
      },
      { id: "c", text: "Props and state are the same thing" },
    ],
    answer: "b",
  },
];

const Quiz = () => {
  const classes = useStyles();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState([]);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOptionChange = (event, i) => {
    const newSelectedOptionId = [...selectedOptionId];
    newSelectedOptionId[i] = event.target.value;
    console.log("newSelectedOptionId", newSelectedOptionId);
    setSelectedOptionId(newSelectedOptionId);
  };

  const handleNextQuestion = () => {
    // if (selectedOptionId === questions[currentQuestionIndex].answer) {
    //   setScore((prevScore) => prevScore + 1);
    // }
    setSelectedOptionId("");
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = () => {
    const SubmittedAnswerCheck = [];

    questions.forEach((item, index) => {
      if (selectedOptionId[index] === item.answer) {
        SubmittedAnswerCheck.push(true);
      } else {
        SubmittedAnswerCheck.push(false);
      }
    });
    const trueValues = SubmittedAnswerCheck.filter((val) => val);
    const answerPercentage =
      (trueValues.length / SubmittedAnswerCheck.length) * 100;
    console.log("answerPercentage", answerPercentage);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h1" gutterBottom>
        React JS Quiz
      </Typography>
      {questions.map((item, i) => {
        return (
          <>
            <Paper className={classes.question} elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Question {item.id}
              </Typography>
              <Typography variant="body1" component="p">
                {item.text}
              </Typography>
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={selectedOptionId[i]}
                  onChange={(e) => handleOptionChange(e, i)}
                >
                  {item.options.map((option) => (
                    <FormControlLabel
                      key={option.id}
                      value={option.id}
                      control={<Radio />}
                      label={option.text}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Paper>
          </>
        );
      })}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" component="p" gutterBottom>
          Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
          {timer % 60}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Quiz;
