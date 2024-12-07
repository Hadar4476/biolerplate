import { useEffect, useState } from "react";
import { Snackbar, Alert, LinearProgress, Box } from "@mui/material";

import { ToastType } from "@/types";

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number; // in milliseconds
  onClose: () => void;
}

const Toast = ({ message, type, duration = 5000, onClose }: ToastProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = duration / 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onClose();

          return 100;
        }

        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onClose]);

  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={duration}
      onClose={onClose}
    >
      <Box>
        <Alert severity={type} onClose={onClose}>
          {message}
        </Alert>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Snackbar>
  );
};

export default Toast;
