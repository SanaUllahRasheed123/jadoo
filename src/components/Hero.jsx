import pbutton from "../assets/images/play-button.svg";
import heroimg from "../assets/images/my-hreo.png";
const Hero = () => {
  return (
    <div className="max-w-[1300px] mx-auto sm:px-2">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="grid-col-1  xs:px-6 xs:items-center">
          <p className="text-[#DF6951] font-bold md:text-[18px] text-[24px] pt-[40px]">
            Best Destinations around the world
          </p>
          <h1 className="md:text-[84px] text-[40px] font-Volkhov text-[#181E4B] font-bold">
            Travel, enjoy <br /> and live a new <br /> and full life
          </h1>
          <p className="text-[#5E6282] text-[16px] font-Poppins font-semibold py-2">
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
          </p>
          <div className="md:flex xs:justify-center md:justify-normal ">
            <button className="bg-[#F1A501] w-[170px] h-[68px] text-[18px] text-[white] rounded-md hover:shadow-lg hover:text-blue-400">
              Find out more
            </button>
            <div className="flex items-center">
              <img src={pbutton} alt="" className="animate-ping" />
              <p className="text-[17px] font-Poppins text-[#686D77]">
                Play Demo
              </p>
            </div>
          </div>
        </div>
        <div className="grid-col-1 pt-7 xs:order-2">
          <img src={heroimg} alt="" className="animate-" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
