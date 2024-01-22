const APIController = (function() {// IIFE function so that it is envoked immediately

    
    const clientId = 'ADD YOUR CLIENT ID';
    const clientSecret = 'ADD YOUR CLIENT SECRET';

    // private methods
    const _getToken = async () => {// using fetch api to call the spotify token endpoints 
// it is a post request , we will specify the content type and authorisation
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
})();