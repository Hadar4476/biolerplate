import { Button } from "@mui/material";

import useTrans from "@/hooks/useTrans";
import { useToast } from "@/context/ToastContext";
import { IToast } from "@/types";

const ToastShowcase = () => {
  const t = useTrans();

  const { showToast } = useToast();

  const onShowToast = () => {
    const toast: Omit<IToast, "id"> = {
      message: "Operation successful!",
      type: "success",
      duration: 30000,
    };

    showToast(toast);
  };

  return (
    <Button size="medium" onClick={onShowToast}>
      {t("common.show")}
    </Button>
  );
};

export default ToastShowcase;
