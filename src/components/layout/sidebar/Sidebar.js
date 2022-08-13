import classes from "./Sidebar.module.css";
import sidebarData from "./SidebarData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(window.location.pathname);

  return (
    <nav className={`${classes.sidebar} `}>
      <button className={`${classes.toggler}`}>
        <i className={`fa fa-times ${classes.icon}`} aria-hidden="true" />
      </button>
      <ul className={classes["sidebar-list"]}>
        {sidebarData.map(({ title, icon, link }, i) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={link}
              key={i}
              onClick={() => {
                setIsActive(link);
              }}
            >
              <li
                className={`${classes.row} ${
                  isActive === link && classes.active
                }`}
              >
                <div className={classes["sidebar-icon"]}>{icon}</div>
                <div
                  className={` animate__animated animate__fadeInUp ${classes["sidebar-title"]} `}
                >
                  {title}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
