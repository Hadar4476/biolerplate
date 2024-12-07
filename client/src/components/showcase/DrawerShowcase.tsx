import { useState } from "react";

import { Button, Stack, Typography } from "@mui/material";

import useTrans from "@/hooks/useTrans";
import AppDrawer from "../common/AppDrawer";

const DrawerShowcase = () => {
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
      <Typography variant="b_38">{t("showcase.drawer.title")}</Typography>
      <Stack>
        <Button size="medium" onClick={onOpen}>
          {t("common.open")}
        </Button>
        <AppDrawer sx={{ minWidth: "33%" }} isOpen={isOpen} emitClose={onClose}>
          Drawer Children
        </AppDrawer>
      </Stack>
    </Stack>
  );
};

export default DrawerShowcase;
