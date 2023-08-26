import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="border-t border-gray-200  py-5 text-center">
        <p className="font-medium text-white">© Roseller Enriquez Jr</p>
        <div className="mt-2 flex justify-center">
          <Link to="https:facebook.com/enriquez.roseller">
            <FacebookIcon className="mx-1 text-white hover:text-blue-400" />
          </Link>
          <Link to="https:instagram.com/rosellerenriquez">
            <InstagramIcon className="mx-1 text-white hover:text-orange-400" />
          </Link>
          <Link to="https://github.com/rosellerenrqz">
            <GitHubIcon className="mx-1 text-white hover:text-blue-400" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
