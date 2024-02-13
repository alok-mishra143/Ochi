import { useState, useEffect } from "react";
import "animate.css/animate.css";

const Navbar = () => {
  const links = ["Service", "Our Works", "About us", "Insights", "Contact us"];
  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isHidden = scrollDirection === "down";

  return (
    <div
      className={`fixed z-[999] px-20 w-full py-8 font-[ 'Neue_Montreal_Regular'] flex justify-between items-center backdrop-blur-sm ${
        isHidden
          ? "hidden animate__animated animate__slideOutUp"
          : "animate__animated animate__slideInDown"
      }`}
    >
      <div className="logo">
        <img src="./ochi.svg" alt="ochi" />
      </div>

      <div className="links flex gap-10">
        {links.map((item, index) => (
          <a
            href="#"
            key={index}
            className={`capitalize text-lg font-light transition duration-300 hover:bg-slate-600/30 rounded-3xl p-2 ${
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
