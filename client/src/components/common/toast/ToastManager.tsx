import ReactDOM from "react-dom";

import AppToast from "./AppToast";

import { ToastType } from "@/types";
import { Stack } from "@mui/material";

interface ToastManagerProps {
  toasts: {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
  }[];
  onRemove: (id: string) => void;
}

const ToastManager = ({ toasts, onRemove }: ToastManagerProps) => {
  const toastRoot = document.getElementById("toast-manager-root");

  return ReactDOM.createPortal(
    <Stack
      sx={{
        position: "fixed",
        top: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        zIndex: 1400,
      }}
    >
      {toasts.map((toast) => (
        <AppToast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </Stack>,
    toastRoot!
  );
};

export default ToastManager;
