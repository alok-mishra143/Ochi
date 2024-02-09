const Navbar = () => {
  const links = ["Service", "Our Works", "About us", "Insights", "Contact us"];

  return (
    <div className="fixed z-[999] px-20 w-full py-8 font-[ 'Neue_Montreal_Regular'] flex justify-between items-center backdrop-blur-sm">
      <div className="logo">
        <img src="./ochi.svg" alt="ochi" />
      </div>

      <div className="links flex gap-10">
        {links.map((item, index) => (
          <a
            href="#"
            key={index}
            className={`capitalize text-lg font-light ${
              index === 4 ? "ml-32" : ""
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
