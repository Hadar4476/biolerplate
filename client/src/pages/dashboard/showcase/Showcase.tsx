import { Divider, Stack } from "@mui/material";

import Buttons from "@/components/showcase/Buttons";
import Typographies from "@/components/showcase/Typographies";
import Modals from "@/components/showcase/Modals";

const Showcase = () => {
  return (
    <Stack gap="32px">
      <Buttons />
      <Divider />
      <Typographies />
      <Divider />
      <Modals />
    </Stack>
  );
};

export default Showcase;
