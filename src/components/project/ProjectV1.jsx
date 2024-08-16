import Image from "next/image";
import React from "react";
import ProjectV1Data from "../../../public/assets/jsonData/project/ProjectV1Data.json";
import SingleProjectV1 from "./SingleProjectV1";
import sectionShape from "@/public/assets/images/about/section-shape.png";

const ProjectV1 = ({ projectClass }) => {
  return (
    <>
      <div
        className={`project-area animate__animated animate__slideInUp ${projectClass}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-shape">
                  <Image src={sectionShape} alt="image" />
                </div>
                <div className="section-sub-title">
                  <h4>{ProjectV1Data.subTitle}</h4>
                </div>
                <div className="section-main-title">
                  <h2>{ProjectV1Data.title}</h2>
                  <h2>{ProjectV1Data.title2}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {ProjectV1Data.projectData.map((project) => (
              <div className="col-lg-6 col-md-6" key={project.id}>
                <SingleProjectV1 project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectV1;
