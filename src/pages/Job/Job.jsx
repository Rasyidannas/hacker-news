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
    <div className="mt-12 flex-auto flex gap-6">
      <InnerNav links={[{ to: "/jobs/latestjob", text: "latest job" }]} />
      <Outlet />
    </div>
  );
}

export default JobPage;
