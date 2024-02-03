import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import InnerNav from "../../components/Layouts/InnerNav";

function JobPage() {
  const navigate = useNavigate();

  //this is for redirect
  useEffect(() => {
    navigate("/jobs/latestjob", { replace: true });
  }, [navigate]);

  return (
    <div className="flex flex-col flex-auto gap-6 mt-12 md:flex-row">
      <InnerNav links={[{ to: "/jobs/latestjob", text: "latest job" }]} />
      <Outlet />
    </div>
  );
}

export default JobPage;
