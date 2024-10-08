import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink
        to="/category/Smartphone"
        className={({ isActive }) =>
          isActive ? "text-blue-500 transition-colors" : "text-blue-gray-900 hover:text-blue-500 transition-colors"}
      >
        <Typography as="li" variant="small" className="p-1 font-medium">
          <p className="flex items-center">Smartphone</p>
        </Typography>
      </NavLink>

      <NavLink
        to="/category/Console"
        className={({ isActive }) =>
          isActive ? "text-blue-500 transition-colors" : "text-blue-gray-900 hover:text-blue-500 transition-colors"}
      >
        <Typography as="li" variant="small" className="p-1 font-medium">
          <p className="flex items-center">Console</p>
        </Typography>
      </NavLink>

      <NavLink
        to="/category/SmartTV"
        className={({ isActive }) =>
          isActive ? "text-blue-500 transition-colors" : "text-blue-gray-900 hover:text-blue-500 transition-colors"}
      >
        <Typography as="li" variant="small" className="p-1 font-medium">
          <p className="flex items-center">SmartTV</p>
        </Typography>
      </NavLink>

      <NavLink
        to="/category/Notebook"
        className={({ isActive }) =>
          isActive ? "text-blue-500 transition-colors" : "text-blue-gray-900 hover:text-blue-500 transition-colors"}
      >
        <Typography as="li" variant="small" className="p-1 font-medium">
          <p className="flex items-center">Notebook</p>
        </Typography>
      </NavLink>

      <NavLink to="/cart">
        <CartWidget />
      </NavLink>
    </ul>
  );
}

function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink to='/'>
          <Typography as="li" variant="small" color="blue-gray" className="p-1 font-bold text-xl">
            TecnoStore
          </Typography>
        </NavLink>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavBar