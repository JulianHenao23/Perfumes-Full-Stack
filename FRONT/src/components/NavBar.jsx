import { NavLink } from "react-router-dom";
import { PlusIcon } from "lucide-react";

function NavBar() {
  return (
    <header className="navbar bg-base-300 py-8">
      <div className="w-full max-w-250 mx-auto flex items-center justify-between">
        <NavLink className="text-3xl font-bold" to="/">
          PerfumesApp
        </NavLink>
        <NavLink
          className="btn btn-soft btn-primary font-bold text-[1.1em]"
          to="/createPerfume"
        >
          <PlusIcon />
          New Perfume
        </NavLink>
      </div>
    </header>
  );
}

export default NavBar;
