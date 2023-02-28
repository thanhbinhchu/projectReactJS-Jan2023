import Data from './videos.json'
import React from 'react'
import {Carousel} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import "bootstrap/dist/css/bootstrap.css";


export const Pilote1 = () => {


return (
    <div className="grid-container">
      {!sessionStorage.getItem("accessToken") && (
             <div className='inner-banner'>
                 <h1>Merci de vous connecter pour consulter cette page</h1>
             </div>
      )}

      {sessionStorage.getItem("accessToken") && (
      <Carousel>
        {Data.map((videoObj) => {
          return (

            <Carousel.Item key={videoObj.id}>
              {/* <ReactPlayer
                url= {videoObj.src}
                pip={true}
                controls={true}
                playing={true}
            /> */}

                    <video className="" width="600" height="400" controls autoPlay={true} loop={true} id={videoObj.id}>    
                        <source src = {require(""+videoObj.src)} type="video/mp4" />
                    </video>
              <Carousel.Caption>
                <h3 className="forget">{videoObj.title}</h3>  
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      )}
    </div>
    
  );
};

export default Pilote1