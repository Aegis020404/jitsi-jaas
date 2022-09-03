import React, {useEffect} from 'react';
import './jitsi'
const App = () => {
    useEffect(()=>{
        const api = new JitsiMeetExternalAPI("8x8.vc", {
            roomName: "vpaas-magic-cookie-06fc1606174e48f4827cf9e51e896543/SampleAppReliableMarginsDeemNorth",
            parentNode: document.querySelector('#jaas-container')
        });
    },[])
    return (
        <div>
            <div id="jaas-container" />
        </div>
    );
};

export default App;
