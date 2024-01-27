import { Outlet } from "react-router-dom";
import SideNav from "../components/Layouts/SideNav";
import Header from "../components/Layouts/Header";

function RootLayout() {
  return (
    <>
      <main className="flex">
        <SideNav className="w-1/12" />
        <section className="py-12 px-6 w-11/12">
          <Header />
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default RootLayout;
