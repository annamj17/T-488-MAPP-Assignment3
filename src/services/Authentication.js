export const getAuthenticatoin = () => {
    // Request                       
    $.ajax({
        url: 'http://api.biomynd.is/authenticate',
        type: 'POST',
        data: {
            username: "My Username",
            password: "My Password"
        },
        dataType: 'json',
        success: function (response) {
            console.log(response);
        }
    });
}