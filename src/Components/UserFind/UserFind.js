import React from 'react';
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImTwitter } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { useParams } from 'react-router';
import FakeData from '../FakeData/FakeData';
import Tab from '../Tab/Tab';
import './UserFind.scss';


const UserFind = () => {

    const { id } = useParams()
    
    const { login, avatar_url ,html_url,followers_url,following_url} = FakeData[id - 1];
    return (
        // <div>
        //     <h1>{FakeData[id-1].login}</h1>
        // </div>
        <div className="user_detail d-flex ">
        <div className="col-md-4 person">
          {/* <img src="https://avatars.githubusercontent.com/u/39717099?v=4" */}
          <img
            src={avatar_url}
            className="p-2"
            width="300px"
            height="300px"
            alt="profile"
          />
          <div className="userInfo text-center">
            <h5>{login}</h5>
            <div className="user_infos d-flex">
              <div className="userInfo_detail">
                <span>
                  
                  <FaMapMarkerAlt />
                  {html_url}
                </span>
              </div>
              <div className="userInfo_detail">
                <span>
                
                  <GoGlobe />
                  {}
                </span>
              </div>
              <div className="userInfo_detail">
                <span>
                
                  <MdEmail />
                  {}
                </span>
              </div>
              <div className="userInfo_detail">
                <span>
                  <ImTwitter />
                  {}
                </span>
              </div>
              <div className="userInfo_detail">
                <span>
                  <HiOutlineUserGroup />
                  {followers_url}
                </span>
              </div>
              <div className="userInfo_detail">
                <span>
                  <FaHeart />
                  {following_url}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
                <Tab />
               
        </div>
      </div>
    );
};

export default UserFind;