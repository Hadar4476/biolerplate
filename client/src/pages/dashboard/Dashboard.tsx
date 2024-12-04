import useTrans from "@/hooks/useTrans";

import LanguageSelector from "@/components/LanguageSelector";
import useLogout from "@/hooks/useLogout";
import ThemeToggler from "@/components/ThemeToggler";

const Dashboard = () => {
  const logout = useLogout();
  const t = useTrans();

  return (
    <div>
      <h1>Dashboard</h1>
      <LanguageSelector />
      <ThemeToggler />
      <button onClick={logout}>{t("logout")}</button>
    </div>
  );
};

export default Dashboard;
