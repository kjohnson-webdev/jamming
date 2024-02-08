import React, { useState, useEffect } from "react";

const client_id = "81c34909a2fe417e990ab7a7980ac9dc";
const redirect_uri = 'http://localhost:3000';

function Spotify({ accessToken, setAccessToken }) {

    // const [accessToken, setAccessToken] = useState(null);
    const [tokenExpiry, setTokenExpiry] = useState(null);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const token = params.get('access_token');
        const expiry = params.get('expires_in');
    
        if (token && expiry) {
            setAccessToken(token);
            setTokenExpiry(parseInt(expiry, 10) * 1000); // Convert to milliseconds
            setError(''); // Clear any existing error message
            setIsLoggedIn(true);
            window.history.pushState({}, document.title, window.location.pathname);
        } else if (!hash) {
            // Only set an error if there's actually something missing in the hash.
            // This prevents setting an error message on initial load.
            setError('');
        } else {
            setError('Failed to retrieve access token. Please try again.');
        }
    }, []);
    

    useEffect(() => {
        if (accessToken && tokenExpiry) {
            alert(accessToken);
            const currentTime = Date.now();
            const delay = tokenExpiry - currentTime;

            const timer = setTimeout(() => {
                setAccessToken(null);
                setIsLoggedIn(false);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [accessToken]);

    return (
        <>
            {error && <p>{error}</p>}
            {!isLoggedIn && (
                <button onClick={getAccessToken}>
                    {accessToken ? "Refresh Spotify Login" : "Log In To Spotify"}
                </button>
            )}
            
            <br />
        </>
    );
}

export default Spotify;