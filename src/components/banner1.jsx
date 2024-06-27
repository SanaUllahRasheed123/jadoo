import axon from "../assets/images/axon.png";
import jetstart from "../assets/images/jetstart.png";
import expedia from "../assets/images/expedia.png";
import qunatas from "../assets/images/quantas.png";
import italy from "../assets/images/italy.png";
const banner1 = () => {
  return (
    <div className="max-w-[1300px]  mx-auto p-3">
      <div className=" flex md:flex-row gap-3  justify items-center justify-between  ">
        <div>
          <img src={axon} alt="" className="hover:shadow-lg px-6 py-0" />
        </div>
        <div>
          <img src={jetstart} alt="" className="hover:shadow-lg px-6 py-0" />
        </div>

        <div>
          <img src={expedia} alt="" className="hover:shadow-lg px-6 py-0" />
        </div>

        <div>
          <img src={qunatas} alt="" className="hover:shadow-lg px-6 py-0" />
        </div>

        <div>
          <img src={italy} alt="" className="hover:shadow-lg px-4 py-3" />
        </div>
      </div>
    </div>
  );
};

export default banner1;
