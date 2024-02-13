function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1.5"
      className="w-full p-20 bg-[#CDE168] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="grid gap-y-30 md:grid-cols-12 py-15 outline-top mb-40 md:mb-90 mt-32 border-t-[1px] pt-[1vw]  border-[#a1b562]">
        <div className="md:col-span-4 lg:col-span-6 reset-last font-medium">
          <p>What you can expect:</p>
        </div>
        <div className="md:col-span-4 lg:col-span-4 reset-last">
          <div className="wysiwyg reset-last max-w-275">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-2 reset-last md:items-end md:justify-end md:flex laptop:justify-start">
          <div>
            <p className="mb-15">S:</p>
            <ul>
              <li>
                <a className="underline" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Behance
                </a>
              </li>
              <li>
                <a className=" underline" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex  gap-5 border-t-[1px] pt-[1vw] mt-[2vw] border-[#a1b562] ">
        <div className="w-full">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-[1vw] rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full h-[60vh] rounded-3xl bg-[#3a431d] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="modelsImage"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
