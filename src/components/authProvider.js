export default {
    // called when the user attempts to log in
    login: ({ username }) => {
        // const request = new Request('https://mydomain.com/authenticate', {
        //     method: 'POST',
        //     body: JSON.stringify({ username, password }),
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        // });
        // return fetch(request)
        //     .then(response => {
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(auth => {
        //         localStorage.setItem('auth', JSON.stringify(auth));
        //     });
        localStorage.setItem('username', JSON.stringify(username));        
        return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        var per='student'
        localStorage.setItem('permissions',JSON.stringify(per));
        //set details in for student if permissions is student for edit info
        if(per==='student'){
            localStorage.setItem('details',JSON.stringify({first:'Ishan',last:'Jaiswal',phone:7059078173,alt_email:'devhjaiswal@gmail.com',class_10_per:84.4,class_10_year:2015,class_12_per:92,class_12_year:2017,backlogs:0,pass_year:2021,cgpa:9.15}))
        }
        return Promise.resolve();
    },
    // getIdentity:()=>{        
    // },
};