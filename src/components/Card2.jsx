import navigation from "../assets/images/navigation 1.svg";
import nature from "../assets/images/nature.jpg";
import flatstone from "../assets/images/flat-stone-podium-magical-forest-3d-illustration-empty-round-stand-background-natural-stage-cosmetic-product-display-minimal-design_204216-720.png";
// import reactangle2 from "../assets/images/Rectangle 14 (1).svg";
// import reactangle3 from "../assets/images/Rectangle 14 (2).svg";
// import grp51 from "../assets/images/grp51.svg";
const Card2 = () => {
  return (
    <div className="max-w-[1300px] mx-auto  m-12   ">
      <div className="text-center">
        <p className="text-[#5E6282]  xs:text-[30px] font-semibold font-Poppins md:text-[18px]">
          Top Selling
        </p>
        <h1 className="md:text-[50px] sm:[45px] font-Volkhov text-[#14183E] font-bold">
          Top Destinations
        </h1>
      </div>
      {/* card section */}
      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xs:mx-13 md:mx-4 xs:gap-4 md:gap-0 sm:  ">
        <div className="grid-col-1 rounded-lg shadow-lg my-3 space-y-3 h-[457px] max-w-[314px]  group-hover:text-[white] xs:mx-6 hover:animate-pulse">
          <img
            src={nature}
            alt=""
            className="rounded-3xl  items-center hover:scale-90   hover:duration-300  "
          />
          <div className="text-[18px] text-[#5E6282] font-medium font-Poppins flex justify-between py-4 mx-5 group-hover:text-[white]">
            <h4>Rome, Italty</h4>
            <h4>$5,42k</h4>
          </div>
          <div className="mx-4">
            <img src={navigation} alt="" className="inline" />
            <span className="text-[18px] text-[#5E6282] font-medium font-Poppins pl-2">
              10 Days Trip
            </span>
          </div>
        </div>

        <div className="grid-col-1 rounded-lg shadow-lg my-3 space-y-3 h-[457px] w-[314px] hover:animate-pulse xs:mx-6 ">
          <img src={flatstone} alt="" className="rounded-3xl  items-center" />
          <div className="text-[18px] text-[#5E6282] font-medium font-Poppins flex justify-between py-4 mx-5 group-hover:text-[white]">
            <h4>Rome, Italty</h4>
            <h4>$5,42k</h4>
          </div>
          <div className="mx-4">
            <img src={navigation} alt="" className="inline" />
            <span className="text-[18px] text-[#5E6282] font-medium font-Poppins pl-2">
              10 Days Trip
            </span>
          </div>
        </div>

        <div className="grid-col-1 rounded-lg shadow-lg my-3 space-y-3 h-[457px] w-[314px]  xs:mx-6 ">
          <img
            src={nature}
            alt=""
            className="rounded-3xl  items-center hover:animate-pulse"
          />
          <div className="text-[18px] text-[#5E6282] font-medium font-Poppins flex justify-between py-4 mx-5 group-hover:text-[white]">
            <h4>Rome, Italty</h4>
            <h4>$5,42k</h4>
          </div>
          <div className="mx-4">
            <img src={navigation} alt="" className="inline animate-spin" />
            <span className="text-[18px] text-[#5E6282] font-medium font-Poppins pl-2">
              10 Days Trip
            </span>
          </div>
        </div>

        {/* <div className="grid-col-1  xs:px-3 py-10 space-y-10 hover:shadow-lg hover:rounded-3xl ">
          <img src={} alt="" className="ml-[69px] " />

          <h3 className="text-center text-[#1E1D4C] text-[20px] font-Sans font-semibold">
            Best Flights
          </h3>
          <p className="text-center text-[16px] font-Poppins text-[#5E6282] font-medium">
            Engrossed listening. <br /> Park gate sell they <br /> west hard for
            the.
          </p>
        </div>

        <div className="grid-col-1  xs:px-3 py-10 space-y-10 hover:shadow-lg hover:rounded-3xl ">
          <img src={} alt="" className="ml-[69px]" />

          <h3 className="text-center text-[#1E1D4C] text-[20px] font-Sans font-semibold">
            Local Events
          </h3>
          <p className="text-center text-[16px] font-Poppins text-[#5E6282] font-medium">
            Barton vanity itself do <br /> in it. Preferd to men it <br />{" "}
            engrossed listening.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Card2;
