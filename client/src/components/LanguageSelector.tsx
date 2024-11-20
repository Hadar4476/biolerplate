import useTrans from "@/hooks/useTrans";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";

import { useAppSelector } from "@/store";
import { systemActions, systemSelector } from "@/store/reducers/system";

const LanguageSelector = () => {
  const t = useTrans();
  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  const {} = useAppSelector(systemSelector);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(systemActions.setLanguage(lng));
    localStorage.setItem("language", lng);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("he")}>עברית</button>
    </div>
  );
};

export default LanguageSelector;
