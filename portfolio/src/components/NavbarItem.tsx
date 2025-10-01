import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type NavbarItemProps = {
  text: string;
  link: string;
};

const NavbarItem: React.FC<NavbarItemProps> = ({
  text,
  link,
}) => {
  const location = useLocation();
  const isActive =
    link === "/"
      ? location.pathname === "/"
      : location.pathname
          .toLowerCase()
          .startsWith(link.toLowerCase());
  return (
    <Link
      to={link}
      className={`hover:text-gray-400 py-3 px-4 rounded-3xl ${
        isActive ? "text-white  bg-gray-700" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default NavbarItem;
