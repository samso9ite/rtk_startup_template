import { Avatar, Badge, Dropdown, MenuProps } from "antd"
import Bell from "../../../assets/images/bell.svg"
import { UserOutlined, CaretDownFilled } from '@ant-design/icons';
import React from "react";
import { Link } from "react-router-dom";
import { NotificationStyles } from "../../../Interface";
import { useSelector } from "react-redux";
// import { RootState } from "../../../Store";

const Notification = () => {
    const style:NotificationStyles = {
        account: {
            color: "black"
        },
        icon: {
            color: "#1C70EB",
            paddingTop:"30px !important",
            marginTop:"30px"
        }
    }
    const logOutHandler = () => {
      localStorage.clear();
      window.location.href = "/auth";
    }
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <Link to={"/settings"}>
              Settings
            </Link>
          ),
        },
        {
            key: '2',
            label: 'Logout',
            onClick: logOutHandler,
          },
    ]
    const cwr_u = JSON.parse(localStorage.getItem("cwr_u") || "{}");
    
    return(
        <>
            <Badge count={5} style={{width:"50"}}>
            </Badge>  
            <Avatar size={45} icon={ cwr_u?.userDetails?.profile_img ? 
            <img src={cwr_u?.userDetails?.profile_img} /> : <UserOutlined />} className="ml-4"/> 
            <span> {cwr_u?.userDetails?.first_name + " " + cwr_u?.userDetails?.last_name} </span>  
            <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}> 
                <CaretDownFilled style={style.icon}/>
            </Dropdown>
        </>
    )
}

export default Notification