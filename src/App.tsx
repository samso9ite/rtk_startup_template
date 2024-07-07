import './App.css';
import { Outlet } from 'react-router-dom';
import Routes from './Routes';
import { ConfigProvider } from 'antd';

const App = () => {
  return(
    <>
     <ConfigProvider
     
          theme={{
              token: {
                  fontFamily: 'R-Regular',
                  fontSize: 18,
                  colorText:"#4D4D4D",
                  colorBgLayout: "#fff"
                },
              components: {
                Menu: {
                  colorItemBgHover: "#1C70EB",
                  colorItemBgSelected: "#1C70EB",
                  colorItemTextSelected: "#fff",
                  colorItemTextHover: "#fff",
                },
                Progress: {
                  circleTextColor: "white",
                }
              }
          }}
      >
    {/* Your application content with Ant Design components */}
    <Routes />
    <Outlet />
  </ConfigProvider>
     
      </>
  )
}


export default App;