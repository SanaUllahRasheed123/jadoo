import peoplesay from "../assets/images/peopalsay.png";
import dots from "../assets/images/dots.png";
const Testimonials = () => {
  return (
    <div className="max-w-[1300px] mx-auto  m-12  ">
      {/* card section */}
      <div className="grid sm:grid-cols-1  md:grid-cols-2 mt-[300px]  ">
        <div className="text-left grid-col-1 top-5 xs:px-12 md:px-5">
          <p className="text-[#5E6282]  xs:text-[30px] font-semibold font-Poppins md:text-[18px]">
            Testimonials
          </p>
          <h1 className="md:text-[50px] sm:[45px] font-Volkhov text-[#14183E] font-bold">
            What people say <br />
            about Us.
          </h1>
          <br />
          <br />
          <br />
          <img src={dots} alt="" />
        </div>
        <div>
          <img src={peoplesay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
