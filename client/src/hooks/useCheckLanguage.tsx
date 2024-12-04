import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import { systemActions } from "@/store/reducers/system";
import commonUtils from "@/utils/common";

const useCheckLanguage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const checkLanguage = () => {
    const language = localStorage.getItem("language");

    if (language) {
      const isRTL = commonUtils.isRTL(language);

      document.body.setAttribute("dir", isRTL ? "rtl" : "ltr");

      i18n.changeLanguage(language);
      dispatch(systemActions.setLanguage(language));
    }
  };

  return checkLanguage;
};

export default useCheckLanguage;
