import React from 'react'
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import data from "../utils/data";
import "./Difficulty.css";

const Difficulty = ({name, fetchQuestions}) => {
    const [error, setError] = useState(false);
    const [difficulty, setDifficulty] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!difficulty) {
          setError(true);
          return;
        } else {
          setError(false);
          fetchQuestions(difficulty);
          navigate("/quiz");
        }
      };

    return (
        <div className="content">
            <div className="settings">
            <span style={{ fontSize: 30 }}>Quiz Settings</span>
            <div className="settings__select">
            {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
            <TextField
                select
                label="Select Difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                variant="outlined"
                style={{ marginBottom: 30 }}
            >
            <MenuItem key="A" value="easy">
              A1/A2
            </MenuItem>
            <MenuItem key="B" value="medium">
              B1/B2
            </MenuItem>
            <MenuItem key="C" value="hard">
              C1/C2
            </MenuItem>
            </TextField>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit}
            >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Difficulty
