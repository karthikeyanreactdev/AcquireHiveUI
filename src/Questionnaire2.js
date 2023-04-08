import { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  LinearProgress,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";

import questionsData from "./questions.json";

function Questionnaire2() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleAnswerChange = (event) => {
    setCurrentAnswer(event.target.value);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questionsData.length - 1) {
      // Submit the form when on the last question
      setIsSubmitting(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setCurrentAnswer("");
  };

  useEffect(() => {
    // Set the timer countdown to 30 seconds per question
    setTimeRemaining(30);
  }, []);

  useEffect(() => {
    // Reset the timer countdown when the question changes
    setTimeRemaining(30);
  }, [currentQuestion]);

  useEffect(() => {
    // Countdown the timer every second
    if (timeRemaining > 0 && !isSubmitting) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining, isSubmitting]);

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Paper sx={{ p: 2 }}>
        {/* Render the current question */}
        {currentQuestion ? (
          <div>
            <Typography variant="h6" gutterBottom>
              {currentQuestion.question}
            </Typography>

            {currentQuestion.type === "text" ? (
              <TextField
                fullWidth
                label="Your answer"
                value={currentAnswer}
                onChange={handleAnswerChange}
              />
            ) : (
              <FormControl component="fieldset">
                <RadioGroup value={currentAnswer} onChange={handleAnswerChange}>
                  {currentQuestion.options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}

            {/* Render the navigation buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              {currentQuestionIndex > 0 && (
                <Button variant="contained" onClick={handlePreviousQuestion}>
                  Previous
                </Button>
              )}

              <div>
                <Typography variant="body1">
                  {timeRemaining <= 0
                    ? "Time is up!"
                    : `Time remaining: ${timeRemaining}s`}
                </Typography>

                <Button
                  variant="contained"
                  disabled={currentAnswer === "" || isSubmitting}
                  onClick={handleNextQuestion}
                  sx={{ marginLeft: "1rem" }}
                >
                  {currentQuestionIndex === questionsData.length - 1
                    ? "Submit"
                    : "Next"}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Render a message when the questionnaire is completed
          <Typography variant="h6">Questionnaire completed!</Typography>
        )}{" "}
        {/* Render a progress bar */}
        <LinearProgress
          variant="determinate"
          value={((currentQuestionIndex + 1) / questionsData.length) * 100}
          sx={{ mt: "1rem" }}
        />
      </Paper>
    </Container>
  );
}

export default Questionnaire2;
