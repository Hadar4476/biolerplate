import LanguageSelector from "@/components/LanguageSelector";
import useLogout from "@/hooks/useLogout";

const Dashboard = () => {
  const logout = useLogout();

  return (
    <div>
      <h1>Dashboard</h1>
      <LanguageSelector />
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Dashboard;
