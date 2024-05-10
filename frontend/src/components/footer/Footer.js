import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";

export default class Footer extends React.Component {
  render() {
    return (
      
       
          <div className="row">
          <div className="txt-white d-flex flex-wrap justify-content-center bg-black">
            <div className=" ft-m">
            <FooterMenu />
            </div>
            <div className="m-10 ft-m">
            <FooterLegal />
            </div>
            <div className="ft-m">
            <FooterContact />
            </div>
            </div>
          </div>
    
    
      // <footer className=" flex-container flex-column txt-center txt-white pop-font">
      //   <div className="d-flex justify-content-center">
      //      <div>
      //         <FooterMenu />
      //       </div>

      //     <div>
      //       <FooterLegal />
      //     </div>

      //     <div>
      //       <FooterContact />
      //     </div>
          
      //   </div>
       
      // </footer>
    );
  }
}
