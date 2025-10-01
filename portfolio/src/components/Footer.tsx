const Footer = () => {
  return (
    <footer className="bg-transparent py-4 text-center mt-auto">
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} Nick Pelletier.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
