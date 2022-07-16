import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HomeMain from "../../View/Home/Main";

const HomeIndex: React.FC = () => {
  const [devices, setDevices] = useState<Array<Object>>();

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const url = "http://35.201.2.209:8000";

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const notify = () => {
    const accessToken = localStorage.getItem('accessToken');
    axios({
      method: "post",
      url: `${url}/notify`,
      data: {
        name: "abdullah al fahim",
        email: "codeefahim@gmail.com",
        repoUrl: "https://github.com/codefahim/meld",
        message: "Thanks.",
      },
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  };

  useEffect(() => {
    const deviceCalling = () => {
      axios({
        method: "get",
        url: `${url}/devices`,
      }).then((response) => {
        setDevices(response.data.devices);
      });
    };
    deviceCalling();
    setInterval(() => {
      deviceCalling();
    }, 5000);
  }, []);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);

  return <HomeMain devices={devices} logout={logout} notify={notify} />;
};

export default HomeIndex;
