import { useState } from "react";

import ButtonShowcase from "@/components/showcase/ButtonShowcase";
import TypographyShowcase from "@/components/showcase/TypographyShowcase";
import ModalShowcase from "@/components/showcase/ModalShowcase";
import DrawerShowcase from "@/components/showcase/DrawerShowcase";

enum SHOWCASE_COMPONENT_TYPE {
  BUTTON = "button",
  TYPOGRAPHY = "typography",
  MODAL = "modal",
  DRAWER = "drawer",
}

const showcaseComponents = [
  {
    type: SHOWCASE_COMPONENT_TYPE.BUTTON,
    component: ButtonShowcase,
  },
  {
    type: SHOWCASE_COMPONENT_TYPE.TYPOGRAPHY,
    component: TypographyShowcase,
  },
  {
    type: SHOWCASE_COMPONENT_TYPE.MODAL,
    component: ModalShowcase,
  },
  {
    type: SHOWCASE_COMPONENT_TYPE.DRAWER,
    component: DrawerShowcase,
  },
];

const useShowcase = () => {
  const [currentType, setCurrentType] = useState<SHOWCASE_COMPONENT_TYPE>(
    SHOWCASE_COMPONENT_TYPE.BUTTON
  );

  const CurrentComponent = showcaseComponents.find(
    (item) => item.type === currentType
  )?.component;

  const onChangeComponent = (type: SHOWCASE_COMPONENT_TYPE) => {
    setCurrentType(type);
  };

  return {
    currentType,
    showcaseComponents,
    CurrentComponent,
    onChangeComponent,
  };
};

export default useShowcase;
