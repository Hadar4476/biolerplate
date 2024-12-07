import { useEffect, useState } from "react";
import { Snackbar, Alert, LinearProgress, Box } from "@mui/material";

import { ToastType } from "@/types";

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number; // in milliseconds
  positionOffset: number;
  onClose: () => void;
}

const AppToast = ({
  message,
  type,
  duration = 5000,
  positionOffset,
  onClose,
}: ToastProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = duration / 100;

    let timeout: NodeJS.Timeout | null = null;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          timeout = setTimeout(onClose, 1000);
          return 100;
        }

        return prev + 1;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      if (timeout) clearTimeout(timeout);
    };
  }, [duration]);

  return (
    <Snackbar
      open
      sx={{
        zIndex: 10001,
        transform: `translate(-50%, -${positionOffset}px) !important`,
        height: "fit-content",
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={duration}
    >
      <Box>
        <Alert severity={type}>{message}</Alert>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Snackbar>
  );
};

export default AppToast;
