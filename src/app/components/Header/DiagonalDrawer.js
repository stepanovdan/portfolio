import { useRouter, usePathname } from "next/navigation";

function DiagonalDrawer({
  isOpen,
  setIsOpen,
  selectedIndex,
  setSelectedIndex,
}) {
  const route = useRouter();
  const path = usePathname();
  return (
    <>
      <div className="relative">
        <div
          className={`z-50 ${
            path === "/" ? "top-[0px]" : "top-[100px]"
          } cursor-pointer fixed w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl  `} //48AFDE
        >
          <div
            onClick={() => setIsOpen(false)}
            className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                class="w-12 h-12 text-white cursor-pointer  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <header
        className={`fixed w-full transition-all duration-500 z-40 ${
          path === "/" ? "top-0" : "top-[-100px]"
        }`}
      >
        <div className="relative">
          <div className="z-20 absolute transform-gpu ease-in-out duration-500 transition-all scale-100 -translate-x-none -translate-y-none opacity-100 bg-[#223740] bg-opacity-95 w-full h-screen flex flex-col sm:flex-row lg:flex-col items-center justify-center">
            <nav className="text-white font-recoletaBold text-center text-4xl lg:text-4xl 2xl:text-6xl uppercase">
              <ul className="flex flex-col">
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      href="/#home"
                      onClick={() => {
                        setSelectedIndex(0);
                        setIsOpen(false);
                      }}
                    >
                      Home
                    </a>
                    {selectedIndex === 0 ? (
                      <div className="absolute top-2 -left-2 w-full h-full translate-gru transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full translate-gru transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                  </div>
                </li>
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      href="/#portfolio"
                      onClick={() => {
                        setSelectedIndex(1);
                        setIsOpen(false);
                      }}
                    >
                      Portfolio
                    </a>
                    {selectedIndex === 1 ? (
                      <div className="absolute top-2 -left-2 w-full h-full translate-gru transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full translate-gru transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                  </div>
                </li>
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      href="/#about-me-component"
                      onClick={() => {
                        setSelectedIndex(2);
                        setIsOpen(false);
                      }}
                    >
                      About me
                    </a>
                    {selectedIndex === 2 ? (
                      <div className="absolute top-2 -left-2 w-full h-full translate-gru transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full translate-gru transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                  </div>
                </li>
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      href="/#hire-me"
                      onClick={() => {
                        setSelectedIndex(3);
                        setIsOpen(false);
                      }}
                    >
                      Hire me
                    </a>
                    {selectedIndex === 3 ? (
                      <div className="absolute top-2 -left-2 w-full h-full translate-gru transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full translate-gru transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                  </div>
                </li>
              </ul>
            </nav>
            <section className="mt-14 sm:mt-12 lg:mt-14 text-center relative sm:absolute lg:relative sm:right-0 lg:right-0 h-auto sm:h-full lg:h-auto">
              <h3 className="block sm:hidden lg:block font-bold text-[#48AFDE] text-2xl uppercase mb-5">
                Follow Me
              </h3>
              <div className="flex flex-row sm:flex-col lg:flex-row">
                <a
                  href="https://vk.com/yomigaeru"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    class="w-6 h-6 sm:w-8 sm:h-8 mb-0 sm:mb-5 lg:mb-0 mx-3 sm:mx-0 lg:mx-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
                <a
                  href="https://vk.com/yomigaeru"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-6 h-6 sm:w-8 sm:h-8 mb-0 sm:mb-5 lg:mb-0 mx-3 sm:mx-0 lg:mx-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                </a>
                <a
                  href="https://vk.com/yomigaeru"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-6 h-6 sm:w-8 sm:h-8 mb-0 sm:mb-5 lg:mb-0 mx-3 sm:mx-0 lg:mx-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </div>
      </header>
    </>
  );
}

export default DiagonalDrawer;
