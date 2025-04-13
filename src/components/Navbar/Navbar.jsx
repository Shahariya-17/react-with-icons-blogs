import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    url: "/home",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <li className="px-4 lg:mr-10 hover:bg-amber-200">
      <a href={route.path}></a>
      {route.name}
    </li>
  ));

  return (
    <nav className="flex justify-between mx-8 mt-5">
      <span className="flex gap-4" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul className={`md:hidden absolute duration-1000 text-black
             ${open ? 'top-8' : '-top-40'}
              bg-yellow-300`}>
            {
            links
            }
        </ul>

        <h3 className="ml-4">My Navbar</h3>
      </span>
      <ul className="md:flex hidden">{links}</ul>
      <button>Sign In</button>

      {/* <ul>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
           </ul> */}
    </nav>
  );
};

export default Navbar;
