import React, { useState, useMemo } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  TextField,
  InputAdornment,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import SubjectIcon from "@mui/icons-material/Subject";

export default function CreatePostStepper({
  title,
  setTitle,
  body,
  setBody,
  onFinish,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});

  const steps = ["Title", "Body", "Preview"];

  const canGoNext = useMemo(() => {
    if (activeStep === 0) return title.trim().length > 0;
    if (activeStep === 1) return body.trim().length > 0;
    return true;
  }, [activeStep, title, body]);

  const validate = () => {
    const nextErrors = {};
    if (activeStep === 0 && !title.trim()) nextErrors.title = "Enter the title";
    if (activeStep === 1 && !body.trim()) nextErrors.body = "Enter the text";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    if (activeStep === steps.length - 1) {
      onFinish();
    } else {
      setActiveStep((s) => s + 1);
    }
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <Box>
          <TextField
            fullWidth
            label="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
          {errors.title && (
            <Typography color="error">{errors.title}</Typography>
          )}
        </Box>
      )}

      {activeStep === 1 && (
        <Box>
          <TextField
            fullWidth
            label="Тіло"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            multiline
            minRows={6}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SubjectIcon />
                </InputAdornment>
              ),
            }}
          />
          {errors.body && <Typography color="error">{errors.body}</Typography>}
        </Box>
      )}

      {activeStep === 2 && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">{title || "(Без заголовка)"}</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography whiteSpace="pre-wrap">
              {body || "(Порожній текст)"}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button variant="contained" disabled={!canGoNext} onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Create" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}
