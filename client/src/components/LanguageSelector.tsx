import useTrans from "@/hooks/useTrans";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const t = useTrans();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
