import { Link } from "@tanstack/react-router";

export const SideBar = () => {
  return (
    <aside className="menu">
      <h2>Challenge list</h2>
      <ol>
        <li>
          <Link
            to="/counter"
            activeProps={{
              className: "font-bold",
            }}
          >
            Counter
          </Link>
        </li>
        <li>
          <Link
            to="/country-match-game"
            activeProps={{
              className: "font-bold",
            }}
          >
            Country Match Game
          </Link>
        </li>
      </ol>
    </aside>
  );
};
