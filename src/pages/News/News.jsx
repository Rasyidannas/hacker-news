import { Outlet, useNavigate } from "react-router-dom";
import InnerNav from "../../components/Layouts/InnerNav";
import { useEffect } from "react";

function NewsPage() {
  const navigate = useNavigate();

  //this is for redirect
  useEffect(() => {
    navigate("/news/topnews", { replace: true });
  }, [navigate]);

  return (
    <div className="flex flex-col flex-auto gap-6 mt-12 md:flex-row">
      <InnerNav
        links={[
          { to: "/news/topnews", text: "top news" },
          { to: "/news/latestnews", text: "latest news" },
        ]}
      />
      <Outlet />
    </div>
  );
}

export default NewsPage;
