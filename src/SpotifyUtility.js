import React, { useState, useEffect } from "react";

const client_id = "81c34909a2fe417e990ab7a7980ac9dc";
const redirect_uri = 'http://localhost:3000';

function Spotify() {

    const [accessToken, setAccessToken] = useState(null);

    const getAccessToken = () => {
        let scope = 'playlist-modify-private';

        // spotify url with authorization endpoint
        let accessUrl = 'https://accounts.spotify.com/authorize';
        // specify request type to recieve access token
        accessUrl += '?response_type=token';
        // encode application client id in URL to id app with Spotify
        accessUrl += '&client_id=' + encodeURIComponent(client_id);
        // set user access scope (how much access user will grant the app)
        accessUrl += '&scope=' + encodeURIComponent(scope);
        // set where spotify will redirect client after auth
        accessUrl += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        window.location = accessUrl;
        
    }
    return (
        <>
            <button onClick={getAccessToken}>Log In To Spotify</button>
            <br></br>
        </>
    );
    
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        
    })

}

export default Spotify;