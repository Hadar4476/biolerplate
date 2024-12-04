import useTrans from "@/hooks/useTrans";
import { Button, Stack, Typography } from "@mui/material";

const Buttons = () => {
  const t = useTrans();

  return (
    <Stack>
      <Typography variant="h4">{t("showcase.buttons")}</Typography>
      <Stack mt="2rem" gap="1rem">
        <Button variant="contained" size="large">
          Contained
        </Button>
        <Button variant="outlined" size="large">
          Outlined
        </Button>
        <Button variant="text" size="large">
          Text
        </Button>
      </Stack>
    </Stack>
  );
};

export default Buttons;
