import { useNavigate } from "react-router-dom"

export const Header = () => {

    let navigate = useNavigate()

    const logout=() =>{
        sessionStorage.clear()
        navigate("/");
    }
    
    return (

    <div>

    <div className="header">      
        <div className="header-right"><h1>Bonne Annee 2023</h1></div>  
    </div>

     <div id="app">

        <div className="topnav">
            {sessionStorage.getItem("accessToken") && (
                <>
                <a href="/">Home</a> 
                <a href="/pilote">Pilote</a>
                <a href="/pilote1">Pilote01</a>
                <a onClick={logout} className="">Log Out</a>
                </>
            
            )}

            {!sessionStorage.getItem("accessToken") && (
                <a href="/login">Sign In</a>
            )}
        </div>

    </div>

    </div>
)

}
export default Header