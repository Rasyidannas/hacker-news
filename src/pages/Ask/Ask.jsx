import { Outlet, useNavigate } from "react-router-dom";
import InnerNav from "../../components/Layouts/InnerNav";
import { useEffect } from "react";

function AskPage() {
  const navigate = useNavigate();

  //this is for redirect
  useEffect(() => {
    navigate("/asks/latestasked", { replace: true });
  }, [navigate]);

  return (
    <div className="mt-12 flex-auto flex gap-6">
      <InnerNav links={[{ to: "/asks/latestasked", text: "latest asked" }]} />
      <Outlet />
    </div>
  );
}

export default AskPage;
