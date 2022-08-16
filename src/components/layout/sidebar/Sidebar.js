import classes from "./Sidebar.module.css";
import sidebarData from "./SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <nav
      className={`${classes.sidebar} ${
        props.showNav && classes.showNav
      } animate__animated animate__fadeInLeft`}
    >
      <button className={`${classes.toggler}`} onClick={props.onHideNav}>
        <i className={`fa fa-times ${classes.icon}`} aria-hidden="true" />
      </button>
      <ul className={classes["sidebar-list"]}>
        {sidebarData.map(({ title, icon, link }, i) => {
          return (
            <NavLink
              activeClassName={classes.active}
              style={{ textDecoration: "none" }}
              to={link}
              key={i}
              onClick={() => {
                props.onHideNav();
              }}
            >
              <li className={classes.row}>
                <div className={classes["sidebar-icon"]}>{icon}</div>
                <div
                  className={` animate__animated animate__fadeInUp ${classes["sidebar-title"]} `}
                >
                  {title}
                </div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
