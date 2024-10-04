// let userName = document.querySelector(".user-input").value;
// let userPass = document.querySelector(".user-password").value;
// let errorPera = document.querySelector(".error").value;
// let btn = document.querySelector(".btn")

// btn.addEventListener("click", fetchGithubUsers())
// async function fetchGithubUsers() {
//     const response = await fetch('https://dummyjson.com/auth/login', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             username: 'emilys',
//             password: 'emilyspass',
//             expiresInMins: 30
//         }),
//     })
//     const users = await response.json()
//     // console.log(response)
//     console.log(users)
//     return users

// }
// let usersData = fetchGithubUsers()
// usersData.then((data) => {
//     if (data) {
//         if (data) {
//             localStorage.setItem("token", data.accessToken)
//             let token = localStorage.getItem('token')
//             if (data.username === data.userName || data.password === data.userPass) {
//                 if (token) {
//                     location.href = './index.html'
//                 }
//             }
//         }
//     }
// })
    // console.log('data', data)
    // if (data) {
    //     localStorage.setItem('token', data.accessToken)
    //     let token = localStorage.getItem('token')
    //     if (token) {
    //         location.href = './index.html'
    //     }
    //     console.log(token)
    // }
    // alert(data[0].name)
// .catch((error) => {
//     console.log(error)
// })

let userName = document.querySelector(".user-input");
let userPass = document.querySelector(".user-password");
let errorPera = document.querySelector(".error");
let btn = document.querySelector(".btn");

btn.addEventListener("click", fetchGithubUsers);

async function fetchGithubUsers() {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: userName.value,
            password: userPass.value,
            expiresInMins: 30
        }),
    });

    const users = await response.json();
    console.log(users);
    return users;
}

let usersData;
btn.addEventListener("click", async () => {
    usersData = await fetchGithubUsers();

    if (usersData) {
        localStorage.setItem("token", usersData.accessToken);
        let token = localStorage.getItem("token");

        // Check if the credentials match
        if (usersData.username === userName.value || usersData.password === userPass.value) {
            if (token) {
                location.href = './product.html';
            }
        } else {
            errorPera.textContent = "Invalid username or password";
        }
    }
});