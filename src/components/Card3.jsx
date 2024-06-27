import destination from "../assets/images/destination.png";
import payment from "../assets/images/payment.png";
import airport from "../assets/images/airport.png";
import trip from "../assets/images/trip.png";
const Card3 = () => {
  return (
    <div className="max-w-[1300px] mx-auto  m-12  ">
      {/* card section */}
      <div className="grid sm:grid-cols-1  md:grid-cols-2 mt-[300px]  ">
        <div className="text-left grid-col-1 top-5 xs:px-12 md:px-5">
          <p className="text-[#5E6282]  xs:text-[30px] font-semibold font-Poppins md:text-[18px]">
            Easy and Fast
          </p>
          <h1 className="md:text-[50px] sm:[45px] font-Volkhov text-[#14183E] font-bold">
            Book your next trip <br /> in 3 easy steps
          </h1>

          <div className="flex mt-4">
            <div>
              <img
                src={destination}
                alt=""
                className=" py-5 my-5 animate-bounce"
              />
            </div>
            <div className=" px-5 my-5 pt-3">
              <h5 className="text-[#5E6282]  font-bold font-Poppins text-[18px] ">
                Choose Destination
              </h5>

              <p className="text-[#5E6282]   font-[400px] font-Poppins text-[16px]">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="">
              <img src={payment} alt="" className=" py-5 my-5 animate-spin" />
            </div>
            <div className=" px-5 my-5 pt-3">
              <h5 className="text-[#5E6282]  font-bold font-Poppins text-[18px] ">
                Make Payment
              </h5>

              <p className="text-[#5E6282]   font-[400px] font-Poppins text-[16px]">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="">
              <img
                src={airport}
                alt=""
                className=" py-5 my-5 animate-bounce "
              />
            </div>
            <div className=" px-5 my-5">
              <h5 className="text-[#5E6282]  font-bold font-Poppins text-[18px] pt-3 ">
                Reach Airport on Selected Date
              </h5>

              <p className="text-[#5E6282]   font-[400px] font-Poppins text-[16px]">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>

        <div className=" grid grid-col-1 relative sm:size-70">
          <img src={trip} alt="" className="absolute -top-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Card3;
