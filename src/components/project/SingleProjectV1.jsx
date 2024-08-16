import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProjectV1 = ({ project }) => {
  const { id, projectClass, animation, thumb, title, subTitle, icon } = project;

  return (
    <>
      <div className={`project-single-box ${projectClass} ${animation}`}>
        <div className="project-thumb">
          <Image
            src={`/assets/images/project/${thumb}`}
            width={530}
            height={640}
            alt="image"
          />
          <div className="project-content">
            <div className="project-text">
              <h4>
                <Link href={`/project-details/${id}`}>{title}</Link>
              </h4>
              <span>{subTitle}</span>
            </div>
            <div className="project-icon">
              <Link href={`/project-details/${id}`}>
                <i className={icon}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectV1;
