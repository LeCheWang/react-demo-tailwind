import { useState } from 'react';
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi';
import NavItem from './NavItem';

const defaultIconSize = '1.875rem';
const items = [
  {
    label: 'Home',
    icon: <BiHomeAlt size={defaultIconSize} />,
    active: true,
  },
  {
    label: 'Movies',
    icon: <BiMoviePlay size={defaultIconSize} />,
  },
  {
    label: 'About',
    icon: <BiInfoCircle size={defaultIconSize} />,
  },
];

const NavItemContainer = () => (
  <>
    {items.map((item, index) => (
      <NavItem item={item} key={index} />
    ))}
  </>
);

const Index = () => {
  const [isNavMenuMobileOpen, setisNavMenuMobileOpen] = useState(false);
  return (
    <nav className="col-span-1 bg-cyan-300">
      <div className="flex md:block mx-4 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-primary border-b  text-right">
          Phimmoi.net
        </h4>
        <BiMenu
          className="cursor-pointer md:hidden "
          size={defaultIconSize}
          onClick={() => setisNavMenuMobileOpen(!isNavMenuMobileOpen)}
        />
      </div>
      <ul
        className={`${isNavMenuMobileOpen ? '' : 'hidden '} md:block mx-4 my-2`}
      >
        <NavItemContainer />
      </ul>
    </nav>
  );
};

export default Index;
