import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700 ">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10 mb-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <li className="text-4xl font-semibold mb-2">FYDE</li>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-8xl ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }} // Increase the scale on hover
              transition={{ ease: "easeInOut", duration: 0.2 }} // Transition duration
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh]  "
          >
            <li className="text-4xl font-semibold mb-2">VISE</li>
            <h1 className="absolute text-[#CDEA68] hover:flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-8xl ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="cards w-full flex gap-10 mt-10 mb-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10 "
          >
            <li className="text-4xl font-semibold mb-10">TRAWA</li>

            <h1 className="absolute text-[#CDEA68] hover:flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-8xl">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }} // Increase the scale on hover
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                className="w-full h-full bg-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg
                "
                alt="basicImage"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] mt-10"
          >
            <li className="text-4xl font-semibold mb-2">PREMIUM BLEND</li>

            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-8xl">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-xl overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }} // Transition duration
            >
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt="basicImage"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
