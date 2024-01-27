import { useState } from "react";
import Button from "../UI/Button";

import yCombinatorLogo from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";

function SideNav({ className }) {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand((prevState) => !prevState);
  };

  return (
    <nav
      className={`py-12 px-6 inline-flex flex-col items-center gap-12 border-r border-neutral-80 relative ${className}`}
    >
      <Button onClick={expandHandler}>
        {!expand ? (
          <img src={menuIcon} alt="Menu Icon" />
        ) : (
          <img src={closeIcon} alt="Close Icon" />
        )}
      </Button>
      <h1 className="text-orientation font-bold text-6xl">HACKER</h1>
      <a href="/" className="w-12 h-12">
        <img src={yCombinatorLogo} className="w-full" alt="Y Combinator Logo" />
      </a>
      <h1 className="text-orientation font-bold text-6xl">NEWS</h1>
      {/* Expanded Item */}
      <div
        className={`px-12 py-32 h-full absolute left-full top-0 bg-neutral-100 flex flex-col gap-12 ${
          !expand && "hidden"
        }`}
      >
        <a
          href="/news"
          className="text-neutral-70 font-serif font-bold text-4xl"
        >
          NEWS
        </a>
        <a
          href="/ask"
          className="text-neutral-70 font-serif font-bold text-4xl"
        >
          ASK
        </a>
        <a
          href="/show"
          className="text-neutral-70 font-serif font-bold text-4xl"
        >
          SHOW
        </a>
        <a
          href="/jobs"
          className="text-neutral-70 font-serif font-bold text-4xl"
        >
          JOBS
        </a>
      </div>
    </nav>
  );
}

export default SideNav;
