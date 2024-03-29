import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import yCombinatorLogo from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";

function SideNav({ className }) {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand((prevState) => !prevState);
  };

  return (
    <nav className="relative flex">
      <div className="inline-flex flex-col items-center gap-12 px-6 py-12 border-r border-neutral-80">
        <Button onClick={expandHandler}>
          {!expand ? (
            <img src={menuIcon} alt="Menu Icon" />
          ) : (
            <img src={closeIcon} alt="Close Icon" />
          )}
        </Button>
        <a href="/" className="flex flex-col items-center gap-6">
          <h1 className="text-6xl font-bold text-orientation">HACKER</h1>
          <div className="w-12 h-12">
            <img
              src={yCombinatorLogo}
              className="w-full"
              alt="Y Combinator Logo"
            />
          </div>
          <h1 className="text-6xl font-bold text-orientation">NEWS</h1>
        </a>
      </div>
      {/* Expanded Item */}
      <div
        className={`absolute expanded__nav px-12 py-32 h-full z-50 left-full top-0 bg-neutral-100 border-r border-neutral-80 flex flex-col gap-12 ${
          !expand && "hidden"
        }`}
      >
        <Button onClick={navigate.bind(null, "/news/topnews")}>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            NEWS
          </NavLink>
        </Button>
        <Button onClick={navigate.bind(null, "/asks/latestasked")}>
          <NavLink
            to="/asks"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            ASK
          </NavLink>
        </Button>
        <Button onClick={navigate.bind(null, "/shows/recentshow")}>
          <NavLink
            to="/shows"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            SHOW
          </NavLink>
        </Button>
        <Button onClick={navigate.bind(null, "/jobs/latestjob")}>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            JOBS
          </NavLink>
        </Button>
      </div>
    </nav>
  );
}

export default SideNav;
