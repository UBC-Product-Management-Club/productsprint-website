import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-white mt-[7.81rem]">
      <div className="mx-auto py-4 text-center py-[3rem]">
        <div className="flex justify-center items-center">
          <img className="w-[3rem]" src={FooterLogo} alt="pmc-logo" />
          <p className="ml-[0.88rem]"> UBC PRODUCT MANAGEMENT CLUB</p>
        </div>
        <ul className="mt-[2rem] flex gap-[3rem] justify-center items-center">
          <li>
            <a target="_blank" href="https://www.facebook.com/ubcpmc">
              <BsFacebook className="w-[2rem] h-[2rem]" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/ubcpmc/">
              <BsInstagram className="w-[2rem] h-[2rem]" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/ubc-product-management-club/"
            >
              <BsLinkedin className="w-[2rem] h-[2rem]" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCkcrUv-e7GndWtFdihI9FGQ/videos"
            >
              <BsYoutube className="w-[2rem] h-[2rem]" />
            </a>
          </li>
        </ul>
        <div className="mt-[2rem] flex justify-center items-center">
          <a className="" href="team@ubcpm.club">
            <MdEmail className="hidden w-[3rem] h-[3rem]" />
            team@ubcpm.club
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
