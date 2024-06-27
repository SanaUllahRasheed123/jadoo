// import mail from "../assets/images/mail.png";
import fbicon from "../assets/images/fabicon.png";
import circle22 from "../assets/images/Mask Group.png";
const NewsLetter = () => {
  return (
    <div className="max-w-[1300px] mx-auto  mt-20  font-Poppins font-semibold bg-[#DFF7F9] rounded-tl-full border-solid border-1 ">
      <div className="relative">
        <img src={fbicon} alt="" className="absolute -right-5 animate-bounce" />
        <img src={circle22} alt="" className="absolute left-0 " />
      </div>
      <div className="text-center py-20">
        <h1 className="text-[#5E6282] text-[33px] py-4">
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h1>
      </div>

      <div className="pt-[60px]  py-9">
        <div className="max-w-[50%] mx-auto">
          <input
            type="text"
            placeholder="Your Email"
            className="h-[68px] w-[421px] mr-8 rounded-md "
          />
          <button className="text-[17px] h-[68px] w-[180px] bg-[#FF7D68] rounded-md text-[white]">
            Subscribe
          </button>
        </div>
      </div>

      {/* <div className=" peer group grid place-items-center h-20 w-20 bg-[blue] hover:bg-[pink]">
        <div className="h-5 w-5 bg-[black] group-hover:bg-[green]">fd</div>
        <div className="h-5 w-5 bg-[black] group-hover:bg-[yellow]">fds</div>
      </div>
      <div className="h-20 w-20 bg-[orange] peer-hover:bg-[purple] "></div> */}
    </div>
  );
};

export default NewsLetter;
