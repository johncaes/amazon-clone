import Image from "next/image";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="search"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white text-xs space-x-6 mx-6 whitespace-nowrap flex items-center">
          <div className=" link">
            <p>Hello John Konan</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center ">
            <span className="absolute w-4 h-4 top-0 right-0 md:right-10 bg-yellow-400 rounded-full text-center text-black">
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden mt-2  font-extrabold md:text-sm md:inline ">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden lg:inline-flex link">Electronics</p>
        <p className="hidden lg:inline-flex link">Food & Grocery</p>
        <p className="hidden lg:inline-flex link">Prime</p>
        <p className="hidden lg:inline-flex link">Buy Again</p>
        <p className="hidden lg:inline-flex link">Shoper Toolkit</p>
        <p className="hidden lg:inline-flex link">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
