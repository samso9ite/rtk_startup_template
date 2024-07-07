import loader from "../../assets/images/loader.gif"

const Loader  = () => {
    return(
        <>
            <div style={{ position: "fixed",
                top: "36%",
                left: "50%"}}
            >
                <img src={loader} width={"150px"} style={{margin:"0 auto"}}/>
           </div>
        </>
    )
}

export default Loader