import { useState } from "react";
import logo from "../assets/images/jadoo-logo.svg";
// import img from "../assets/images/hero-image.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* <div className="w-20 h-10 rounded-lg shadow-[0_0_10px_purple]"> */}
      {/* <div className="w-20 h-10 rounded-lg shadow-[0_0_10px_theme('colors.purple.7')]"></div> */}
      {/* <div className="p-4">
        <div className="max-w-[1050px] py-0  mx-auto grid grid-cols-2 ">
          <div className="grid-col-1 ">
            <div className="relative">
              <img src={logo} alt="" className="" />

              <ul className="flex justify-center gap-8 space-x-9 top-3 absolute ml-[280px] cursor-pointer">
                <li className="list-none hover:text-yellow-300">
                  Destinations
                </li>
                <li className="list-none hover:text-yellow-300">Hotels</li>
              </ul>
            </div>
            <div className="py-[150px]">
              <h4 className="font-semibold text-[#DF6951]">
                Best Destinations around the world
              </h4>
              <h1 className="text-[#181E4B] text-4xl font-bold font-Volkhov">
                Travel, enjoy <br />
                and live a new <br />
                and full life
              </h1>
              <p className="font-Poppins">
                Built Wicket longer admire do barton vanity itself do in it.
                <br />
                Preferred to sportsmen it engrossed listening. Park gate <br />{" "}
                sell they west hard for the.
              </p>
              <div className="py-4">
                <button className="text-white bg-[#F1A501] shadow-lg p-3 rounded-[10px] hover:bg-[#f1a50197] ">
                  Find More Out{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="grid-col-1">
            <img src={img} alt="" className="mr-0" />
          </div>
        </div>
      </div> */}

      <div
        className="max-w-[1300px] md:mx-auto py-5
       m-7 sm:px-4"
      >
        <div className="flex justify-between items-center font-bold ">
          <div>
            <img src={logo} alt="" />
          </div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white md:hidden block"
            />
          )}
          <ul className=" hidden md:flex space-x-[55px]  py-2 text-[17px] text-[#212832]  cursor-pointer font-Sans">
            <li>Desitnations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
            <li>Login</li>
            <li className="border px-2 ">Signup</li>
            <select name="" id="" className="bg-[#FFF1DA]">
              <option value="">English</option>
              <option value="">Urdu</option>
            </select>
          </ul>
          {/* Responsive menu */}
          <ul
            className={`duration-300 md:hidden w-full h-screen  fixed bg-[#FFF1DA] text-white left-[-100%]  cursor-pointer top-[116px] ${
              toggle ? "left-[0]" : "left-[-100%]"
            }`}
          >
            <li className="p-4">Desitnations</li>
            <li className="p-4">Hotels</li>
            <li className="p-4">Flights</li>
            <li className="p-4">Bookings</li>
            <li className="p-4">Login</li>
            <li className="lg:border md:px-2 p-2  ">Signup</li>
            <select name="" id="" className="bg-[#FFF1DA] p-2">
              <option value="">English</option>
              <option value="">Urdu</option>
            </select>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
