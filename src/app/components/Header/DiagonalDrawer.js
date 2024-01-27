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
          <div className="z-20 absolute transform-gpu ease-in-out duration-500 transition-all scale-100 -translate-x-none -translate-y-none opacity-100 bg-[#223740] bg-opacity-95 w-full flex-col sm:flex-row lg:flex-col items-center justify-center">
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
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default DiagonalDrawer;
