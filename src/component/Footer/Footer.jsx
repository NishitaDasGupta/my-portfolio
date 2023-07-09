import nishita from "../../assets/mou.png"
import Social from "../Home/Social";

const Footer = () => {
    return (
    <div>
            <footer className="footer p-10  bg-black text-white">
    <div className="h-14 w-full bg-transparent"></div>
  <div>
  <img className="w-16 h-16 shadow-md shadow-white  border-white border-[2px] rounded-full" src={nishita} alt="" />
  <p className="text-xl font-bold">
                    Nishita Das Gupta
                </p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
    <Social></Social>
    </div>
  </div>
 
        </footer>
      <div className="footer-center bg-black">
      <p className="text-xs pb-10">
         Copyright © 2023 - All right reserved by Nishita Das Gupta.
     </p>
      </div>
    </div>

    );
};

export default Footer;