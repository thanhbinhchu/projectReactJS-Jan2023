import myVideo from './videos/DXM_INT_BA.mp4';

export const Diffusion = () => {

    const mem=()=>{
        alert('Merci de vous connecter pour voir les videos')
    }
    return (
        
    <div className="video-container">

        <div className="banner1 ele">DXM Profuse</div>
  
            <video className="v1" width="750" height="500" controls autoPlay={true} loop={true} >
                {sessionStorage.getItem("accessToken") && ( 
                    <source src={myVideo} type="video/mp4" />
                )}
            </video>
                    
            {!sessionStorage.getItem("accessToken") && ( 
                <div className="account">
                    <a>Aucune vidéo en cours</a>
                </div>
            )}

        <div>
            {!sessionStorage.getItem("accessToken") && (
                <button onClick={mem}>Cliquez ici...</button>
            )}
        </div>

    </div>

    )

}

export default Diffusion