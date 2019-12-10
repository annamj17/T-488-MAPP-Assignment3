let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlMTc2MWQ2MDJkMDc3OTYyOTVhNWMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkFybmFyIEFybmFyc29uIiwiZW1haWwiOiJhcm5hcmExN0BydS5pcyIsInVzZXJuYW1lIjoiYXJuYXJhIiwicGFzc3dvcmQiOiIkMmEkMDgkYk9Kdy9JZTJxdXNYeTYwRUlDLld3dUF0akNjT2JWOFRYTFBLV2dkSGtpc0JyaXN6L2h3d3UiLCJkb21haW4iOiJydS5pcyIsIm1lc3NhZ2UiOiJTY2hvb2wgcHJvamVjdC4gV2lsbCB1c2UgdGhlIGFwaSBmb3IgYSB3ZWVrLiIsImlhdCI6MTU3NTg5MDYwMiwiZXhwIjoxNTc1OTc3MDAyfQ.pNHuVBX69v2mp01PiEpoRVf-ZnUr6P0icP11fTls8Dg';
const ENDPOINT = 'http://api.kvikmyndir.is/theaters';

const cinemaService = () => {
    return {
        getCinemas: () => fetch(ENDPOINT, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token' : token
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            })
    }
};

export default cinemaService();