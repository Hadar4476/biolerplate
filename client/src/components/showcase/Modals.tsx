import React, { useState } from "react";

import { Button, Stack, Typography } from "@mui/material";

import useTrans from "@/hooks/useTrans";
import AppModal from "../common/AppModal";

const Modals = () => {
  const t = useTrans();

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Stack gap="24px">
      <Typography variant="b_38">{t("showcase.modal.title")}</Typography>
      <Stack>
        <Button size="small" onClick={onOpen}>
          {t("showcase.modal.open")}
        </Button>
        <AppModal sx={{ width: "35%" }} isOpen={isOpen} emitClose={onClose}>
          Children
        </AppModal>
      </Stack>
    </Stack>
  );
};

export default Modals;
