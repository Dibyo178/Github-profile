import React from "react";
import { AiFillProject } from "react-icons/ai";
import { BiBookOpen, BiCube } from "react-icons/bi";
import { RiGitRepositoryLine } from "react-icons/ri";
import "./Tab.scss";


const Tab = ({ publicRepo, html_url }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href={html_url} style={{ textDecoration: "none" }}>
          {" "}
          <p className="nav-link mb-0 active">
            <RiGitRepositoryLine />
            Repositories{publicRepo}
          </p>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link mb-0 ">
          <BiBookOpen />
          Overview
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link mb-0 " href="#">
          <BiCube />
          Packages
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link mb-0 " href="#">
          <AiFillProject />
          Projects
        </a>
      </li>
    </ul>
  );
};

export default Tab;
