import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Notification from "./notificationAvatar"
import { TopBarStyles } from "../../../Interface"

const Topbar = (props:any) => {
    const style:TopBarStyles = {
        breadcrumb: { 
            textTransform: "capitalize",
            fontSize: "30px",
            color: "black",
            fontWeight: "600"
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }
    const [activePage, setActivePage] = useState<any>("Dashboard")

    
    let location = useLocation()
    
    useEffect(() => {
        setActivePage(JSON.stringify(location.pathname).slice(2, -1))
    }, []) 
    

    return(
        <div style={style.container}>
           <span style={style.breadcrumb}>{activePage}</span> 
           <span style={{ marginLeft: 'auto' }}><Notification  /> </span>
          
        </div>
    )
}
export default Topbar