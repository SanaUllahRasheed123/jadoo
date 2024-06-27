import socialfb from "../assets/images/Social.svg";
import socialtwi from "../assets/images/Social (1).svg";
import socialista from "../assets/images/Instagram Circle.png";
import googleplay from "../assets/images/Google Play.svg";
import googleplayStore from "../assets/images/Play Store.svg";
import starts from "../assets/images/Group 4.png";
const Footer = () => {
  return (
    <>
      <div className="max-w-[1300px]  py-2 mx-auto mt-[187px]">
        <div className="relative">
          <img
            src={starts}
            alt=""
            className="absolute -right-9 bottom-4 animate-spin"
          />
        </div>
        <div className="grid grid-cols-5 gap-3 ">
          <div className="">
            <h1 className="mb-[19px] text-[#181E4B] text-[44px] font-Poppins">
              Jadoo.
            </h1>
            <p className="text-[#5E6282] text-[15px] font-Poppins">
              Book your trip in minute, get full <br /> Control for much longer.
            </p>
          </div>

          <ul className="mt-[19px]">
            <li className="  text-[#080809] text-[21px] font-Poppins font-semibold mb-[26px]">
              Company
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              About
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              Careers
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              Mobile
            </li>
          </ul>

          <ul className="mt-[19px]">
            <li className="  text-[#080809] text-[21px] font-Poppins font-semibold mb-[26px]">
              Contact
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              Help/FAQ
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              Press
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              Affilates
            </li>
          </ul>

          <ul className="mt-[19px]">
            <li className="  text-[#080809] text-[21px] font-Poppins font-semibold mb-[26px]">
              More
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              Airlinefees
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              Airline
            </li>
            <li href="" className="text-[#5E6282] text-[18px]  font-Poppins">
              Low fare tips
            </li>
          </ul>

          <div className="mt-[19px]">
            <div className="flex space-x-2 ">
              <img src={socialfb} alt="" className="animate-bounce" />
              <img src={socialtwi} alt="" className="animate-bounce" />
              <img src={socialista} alt="" className="animate-bounce" />
            </div>
            <span className="text-[#5E6282] text-[20px] font-Poppins">
              Discover our app
            </span>
            <div className="flex space-x-2 space-y-3">
              <img src={googleplay} alt="" />
              <img src={googleplayStore} alt="" className="mt-9" />
            </div>
          </div>
        </div>
        <h2 className="text-[#5E6282] text-center font-Poppins text-[14px] mt-[86px]">
          All rights reserved@jadoo.co
        </h2>
      </div>
    </>
  );
};

export default Footer;
