import React from "react";
import footerLogo from "@/public/assets/images/footer/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "../utilities/SocialShare";
import FooterProject from "../../../public/assets/jsonData/footer/FooterProject.json";
import FooterServices from "../../../public/assets/jsonData/footer/FooterServices.json";
import FooterLinks from "../../../public/assets/jsonData/footer/FooterLinks.json";
import handleSmoothScroll from "../utilities/handleSmoothScroll";

const FooterV1 = () => {
  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget animate__animated animate__zoomIn">
                <div className="footer-wiget-log">
                  <Link href="/" onClick={handleSmoothScroll}>
                    <Image src={footerLogo} alt="image" />
                  </Link>
                </div>
                <div className="footer-wiget-text">
                  <p>
                    A farm is a plot of land that is used to grow crops and
                    raise livestock, as in our farm, we raise sheep and sell
                    their wool the word farm is also.
                  </p>
                </div>
                <div className="footer-wiget-social">
                  <ul>
                    <SocialShare />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget animate__animated animate__slideInDown">
                <div className="footer-wiget-title">
                  <h4>{FooterServices.title}</h4>
                </div>
                <div className="footer-wiget-menu">
                  <ul>
                    {FooterServices.serviceData.map((service) => (
                      <li key={service.id}>
                        <Link href={service.link} onClick={handleSmoothScroll}>
                          <i className={service.icon}></i>
                          {service.serviceText}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget animate__animated animate__slideInDown">
                <div className="footer-wiget-title">
                  <h4>{FooterLinks.title}</h4>
                </div>
                <div className="footer-wiget-menu">
                  <ul>
                    {FooterLinks.linkData.map((data) => (
                      <li key={data.id}>
                        <Link href={data.link} onClick={handleSmoothScroll}>
                          <i className={data.icon}></i>
                          {data.linkText}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 pr-0">
              <div className="foter-box">
                <div className="footer-wiget-title">
                  <h4>{FooterProject.title}</h4>
                </div>
                <div className="row">
                  {FooterProject.projectData.map((project) => (
                    <div className="col-lg-4 col-sm-4" key={project.id}>
                      <div className="footer-recent-thumb">
                        <Image
                          src={`/assets/images/footer/${project.thumb}`}
                          width={90}
                          height={90}
                          alt="image"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-110">
            <div className="col-lg-6 col-md-12">
              <div className="copyright-text">
                <p>
                  Copyright &copy;{" "}
                  <Link
                    href="https://themeforest.net/user/website_stock"
                    target="_blank"
                  >
                    Website_Stock
                  </Link>{" "}
                  All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="footer-condition">
                <ul>
                  <li>
                    <Link href="#" onClick={handleSmoothScroll}>
                      Setting & privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={handleSmoothScroll}>
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterV1;
