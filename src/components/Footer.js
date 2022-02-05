import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  return (
    <MDBFooter
      color="warning-color"
      className="font-small pt-4 mt-4 stylish-color white-font"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12" className="py-4">
            <div className="mb-4 flex-center">
              <a href="#" className="tw-ic">
                <FontAwesomeIcon
                  className="mx-5"
                  icon={faTwitter}
                  color="white"
                  size="2x"
                />
              </a>
              <a href="#" className="fa-ic">
                <FontAwesomeIcon
                  className="mx-5"
                  icon={faFacebook}
                  color="white"
                  size="2x"
                />
              </a>
              <a href="#" className="in-ic">
                <FontAwesomeIcon
                  className="mx-5"
                  icon={faInstagram}
                  color="white"
                  size="2x"
                />
              </a>
              <a href="#" className="go-ic">
                <FontAwesomeIcon
                  className="mx-5"
                  icon={faGoogle}
                  color="white"
                  size="2x"
                />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 stylish-color-dark">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="footer-link" href="#">
            {" "}
            Land of League
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
