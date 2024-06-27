import stars from "../assets/images/Group 4.png";
import grp48 from "../assets/images/grp48.svg";
import grp49 from "../assets/images/grp49.svg";
// import grp50 from "../assets/images/grp50.png";
// import grp51 from "../assets/images/grp51.svg";
const Card1 = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="relative">
        <img
          src={stars}
          alt=""
          className="absolute right-0  animate-spin  duration:100"
        />
      </div>
      <div className="text-center py-5 m-5">
        <p className="text-[#5E6282]  xs:text-[30px] font-semibold font-Poppins md:text-[18px]">
          CATEGORY
        </p>
        <h1 className="md:text-[50px] sm:[45px] font-Volkhov text-[#14183E] font-bold">
          We Offer Best Services
        </h1>
      </div>
      {/* card section */}
      <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5 p-7">
        <div className="grid-col-1  xs:px-3 py-10 space-y-5 hover:shadow-lg hover:rounded-3xl ">
          <img src={grp48} alt="" className="animate-bounce w-full h-14" />

          <h3 className="text-center text-[#1E1D4C] text-[20px] font-Sans font-semibold">
            Calculated Weather
          </h3>
          <p className="text-center text-[16px] font-Poppins text-[#5E6282] font-medium">
            Built Wicket longer <br /> admire do barton <br />
            vanity itself do in it.
          </p>
        </div>

        <div className="grid-col-1  xs:px-3 py-10 space-y-5 hover:shadow-lg hover:rounded-3xl ">
          <img src={grp49} alt="" className="animate-bounce w-full h-14" />

          <h3 className="text-center text-[#1E1D4C] text-[20px] font-Sans font-semibold">
            Best Flights
          </h3>
          <p className="text-center text-[16px] font-Poppins text-[#5E6282] font-medium">
            Engrossed listening. <br /> Park gate sell they <br /> west hard for
            the.
          </p>
        </div>

        <div className="grid-col-1  xs:px-3 py-10 space-y-5 hover:shadow-lg hover:rounded-3xl ">
          <img src={grp48} alt="" className="animate-bounce w-full h-14" />

          <h3 className="text-center text-[#1E1D4C] text-[20px] font-Sans font-semibold">
            Local Events
          </h3>
          <p className="text-center text-[16px] font-Poppins text-[#5E6282] font-medium">
            Barton vanity itself do <br /> in it. Preferd to men it <br />{" "}
            engrossed listening.
          </p>
        </div>
        <div className="grid-col-1  xs:px-3 py-10 space-y-5 hover:shadow-lg hover:rounded-3xl  sm:hover:rounded-2xl">
          <img src={grp49} alt="" className="animate-bounce w-full h-14" />

          <h3 className="text-center text-[#1E1D4C] text-[20px] font-Sans font-semibold">
            Customization
          </h3>
          <p className="text-center text-[16px] font-Poppins text-[#5E6282] font-medium">
            We deliver outsourced <br /> aviation services for <br /> military
            customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
