import React from 'react'
import AudioPlayer,{ RHAP_UI } from 'react-h5-audio-player';
import{Row,Col} from "react-bootstrap"
import 'react-h5-audio-player/lib/styles.css';
import "./Footer.css"
import { BsFillSkipStartFill,BsFillSkipEndFill,BsPlayFill } from 'react-icons/bs'

function Footer() {
    return (
        <>
            <AudioPlayer
          src="https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3"
          customProgressBarSection={
            [
                <img src="https://cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg"/>,
                <p style={{marginRight:"20px", marginLeft:"5px"}}>Eminem Without Me</p>,
              RHAP_UI.CURRENT_TIME,
              <div>/</div>,
              RHAP_UI.DURATION,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.VOLUME,
            ]}
            customControlsSection={[RHAP_UI.ADDITIONAL_CONTROLS, RHAP_UI.MAIN_CONTROLS,RHAP_UI.LOOP, RHAP_UI.VOLUME_CONTROLS]}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            layout="stacked-reverse"
            showSkipControls={true} showJumpControls={false}
            customIcons={{
                play:<BsPlayFill/>,
                previous:<BsFillSkipStartFill/>,
                next:<BsFillSkipEndFill/>,
            }
            }
          />
        </>
    )
}

export default Footer
