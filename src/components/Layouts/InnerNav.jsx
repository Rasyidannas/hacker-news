import { NavLink } from "react-router-dom";

function InnerNav({ links }) {
  return (
    <div className="inline-flex flex-row md:flex-col gap-4 pr-6 md:border-r border-neutral-80 min-w-[35%] flex-none">
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.to}
          className={({ isActive }) =>
            isActive
              ? "button-medium nav-link-active"
              : "button-medium nav-link"
          }
        >
          <h2 className="uppercase">{link.text}</h2>
        </NavLink>
      ))}
    </div>
  );
}

export default InnerNav;
