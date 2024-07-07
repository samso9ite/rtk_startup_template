import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { SIDENAVS } from '../../../Constants/sidenav'
import { Link } from "react-router-dom"

const Sidebar = (props:any) => {

  const sideBarStyle = {
    navBar: {
        backgroundColor: "#F5FAFE",
        marginTop: "30px"
    },
    sideBar: {
      backgroundColor: "#F5FAFE",
      overflow: 'auto', 
      height: '100vh', 
      left: 0, 
      top: 0, 
      bottom: 0,
      marginLeft: '1rem'
    },
    logo: {
      margin: "20px"
    },
   
  } 

 
    return(
      <Sider trigger={null} collapsible collapsed={props.collapsed} style={sideBarStyle.sideBar} width={250} >
        <div style={sideBarStyle.logo} className="demo-logo-vertical"> 
          <img src={process.env.REACT_APP_BASE_URL+'/images/dashboardLogo.svg'} />
        </div>
        <Menu
          style={sideBarStyle.navBar}
          mode="inline"
          defaultSelectedKeys={['/dashboard']}
          >
            {SIDENAVS.map((menu) => (
              <Menu.Item key={menu.key} icon={<menu.icon />} >
                <Link to={menu.key}>{menu.label}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Sider>
    )
}

export default Sidebar