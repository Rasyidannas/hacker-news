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
      <footer className="button-text py-6 px-24 bg-secondary-90 flex justify-between">
        <a href="https://github.com/Rasyidannas">
          <p className="text-neutral-70">
            Design by <span className="text-white">Rasyid Annas</span>
          </p>
        </a>
        <ul className="flex gap-6">
          <li>
            <a
              href="https://news.ycombinator.com/newsguidelines.html"
              className="button-small"
            >
              Guidelines
            </a>
          </li>
          <li>
            <a
              href="https://news.ycombinator.com/newsfaq.html"
              className="button-small"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="https://news.ycombinator.com/newsfaq.html"
              className="button-small"
            >
              API
            </a>
          </li>
          <li>
            <a
              href="https://news.ycombinator.com/security.html"
              className="button-small"
            >
              Security
            </a>
          </li>
          <li>
            <a
              href="https://news.ycombinator.com/security.html"
              className="button-small"
            >
              Legal
            </a>
          </li>
          <li>
            <a href="https://news.ycombinator.com/" className="button-small">
              Visit Original Link
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default RootLayout;
