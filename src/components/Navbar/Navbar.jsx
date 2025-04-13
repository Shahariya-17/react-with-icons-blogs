import React from 'react';

const navigationData = [
    {
      id: 1,
      name: "Home",
      url: "/home"
    },
    {
      id: 2,
      name: "About",
      url: "/about"
    },
    {
      id: 3,
      name: "Services",
      url: "/services"
    },
    {
      id: 4,
      name: "Blog",
      url: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      url: "/contact"
    }
  ];
  

const Navbar = () => {
    return (
        <nav>
           <ul className='flex'>
           {
              navigationData.map(route => <li className=' mr-10'><a href={route.path}></a>{route.name}</li>)  
            }
           </ul>

           {/* <ul>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
           </ul> */}
        </nav>
    );
};

export default Navbar;