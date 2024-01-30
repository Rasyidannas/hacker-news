import { Outlet } from "react-router-dom";
import SideNav from "../components/Layouts/SideNav";
import Header from "../components/Layouts/Header";

function RootLayout() {
  return (
    <>
      <main className="flex">
        <SideNav className="w-1/12" />
        <section className="pt-12 px-6 min-w-[70%] w-full flex flex-col">
          <Header />
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default RootLayout;
