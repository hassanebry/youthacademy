import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllJoueurs = () =>
    fetch("api/v1/joueurs")
        .then(checkStatus);

export const addNewJoueur = joueur =>
    fetch("api/v1/joueurs", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(joueur)
        }
    );