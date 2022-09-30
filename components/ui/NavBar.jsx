import { Link } from "..";
import { HomeIcon, FavoriteIcon } from "../../icons";

const navLinks = [
  {
    path: "/",
    icon: HomeIcon,
  },
  {
    path: "/favorites",
    icon: FavoriteIcon,
  },
];

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        {navLinks.map(({ path, icon: Icon }, index) => (
          <Link key={index} href={path} passHref>
            <Icon />
          </Link>
        ))}
      </div>
    </nav>
  );
};
