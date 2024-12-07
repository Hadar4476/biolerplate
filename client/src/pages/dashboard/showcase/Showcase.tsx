import useShowcase from "./useShowcase";
import useTrans from "@/hooks/useTrans";

import { Button, Stack } from "@mui/material";

import { TranslationKeys } from "@/locales/i18n";

const Showcase = () => {
  const t = useTrans();

  const {
    currentType,
    showcaseComponents,
    CurrentComponent,
    onChangeComponent,
  } = useShowcase();

  const options = showcaseComponents.map((component) => {
    const type = component.type;
    const isSelected = type === currentType;
    const label = t(`showcase.${type}.title` as TranslationKeys);

    return (
      <Button
        key={type}
        variant={isSelected ? "contained" : "outlined"}
        onClick={() => onChangeComponent(type)}
      >
        {label}
      </Button>
    );
  });

  return (
    <Stack gap="32px">
      <Stack direction="row" alignItems="center" gap="12px">
        {options}
      </Stack>
      {CurrentComponent ? <CurrentComponent /> : null}
    </Stack>
  );
};

export default Showcase;
