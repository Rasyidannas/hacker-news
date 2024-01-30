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
    <div className="mt-12 flex-auto flex gap-6">
      <InnerNav links={[{ to: "/shows/recentshow", text: "recent show" }]} />
      <Outlet />
    </div>
  );
}

export default ShowPage;
