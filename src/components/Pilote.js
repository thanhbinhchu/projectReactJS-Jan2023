import Data from './videos.json'


export const Pilote = () =>{
    

return ( 
    <div className='grid-container'>
         {!sessionStorage.getItem("accessToken") && (
             <div className='inner-banner'>
                 <h1>Merci de vous connecter pour consulter cette page</h1>
             </div>
         )}

        {sessionStorage.getItem("accessToken") && (
        <div>
            { Data.map( record => {

        // let a = require("" + record.src)

            return (
                <div className="box" key="record.id">
                    <div className='account'>
                        <a>{ record.title }</a>
                    </div>
                
                    <video className="v2" width="300" height="200" controls autoPlay={true} loop={true} id={record.id}>    
                        <source src = {require(""+record.src)} type="video/mp4" />
                    </video>
                </div>
            )
        })
    }

    {/* <button>Envoyer</button> */}

        </div>
    )}

</div>

)}

export default Pilote