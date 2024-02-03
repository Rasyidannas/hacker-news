import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import InnerNav from "../../components/Layouts/InnerNav";

function ShowPage() {
  const navigate = useNavigate();

  //this is for redirect
  useEffect(() => {
    navigate("/shows/recentshow", { replace: true });
  }, [navigate]);

  return (
    <div className="flex flex-col flex-auto gap-6 mt-12 md:flex-row">
      <InnerNav links={[{ to: "/shows/recentshow", text: "recent show" }]} />
      <Outlet />
    </div>
  );
}

export default ShowPage;
