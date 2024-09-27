async function productApi() {
    const productUrl = await fetch('https://dummyjson.com/products');
    const productData = await productUrl.json();
    console.log(productData);
    return productData;
}

productApi().
    then((productData) => {
        let container = document.querySelector(".product-wrapper");
        container.innerHTML = "";
        productData.products.forEach((items) => {
            let productsCards = `
         <div class="card container" style="width: 16rem;">
        <img src="${items.images[0]}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-text">${items.title}</h5>
        <div class="d-flex justify-content-between">
        <span class="card-text text-center"><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="text-warning bi bi-star-fill"></i> <i class="text-warning bi bi-star-fill"></i> <i class="bi bi-star-fill text-warning"></i> ${items.rating}</span>
        <span>(${items.stock})</span>
        </div>
        <div>
        <p class="card-title mt-1"><i class="bi bi-truck text-success"></i> ${items.shippingInformation}</p>
        <p><i class="bi bi-recycle text-success"></i> ${items.returnPolicy}</p>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-3">
        <span class="fw-bold">$ ${items.price}</span>
        <span><a href="#" class="btn btn-primary">Add to <i class="bi bi-cart"></i></a></span>
        </div>
        </div>
        </div>
    `;
            container.innerHTML += productsCards;
        });
    });

async function resipeApi() {
    const recipeUrl = await fetch('https://dummyjson.com/recipes');
    const recipeData = await recipeUrl.json();
    console.log(recipeData);
    return recipeData;
}

resipeApi()
    .then((recipeData) => {
        let recipeContainer = document.querySelector(".recipe-wrapper");
        recipeContainer.innerHTML = "";
        recipeData.recipes.forEach((item1) => {

            let recipeCards = `
         <div class="hide card container reci-cont" style="width: 20rem;">
        <img src="${item1.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-text">${item1.name}</h5>
        <div class="d-flex justify-content-between">
        <span class="card-text text-center"><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="text-warning bi bi-star-fill"></i> <i class="text-warning bi bi-star-fill"></i> <i class="bi bi-star-fill text-warning"></i> ${item1.rating}</span>
        <span>(${item1.reviewCount})</span>
        </div>
        <div class="d-flex justify-content-between">
        <span class="card-title mt-1">${item1.cuisine}</span>
        <span>${item1.prepTimeMinutes} Minutes</span>
        </div>
        <div class="d-flex justify-content-between">
        <p>Type: ${item1.mealType}</p>
        <p>${item1.difficulty}</p>
        </div>
        <div>
        <span><a href="#" class="btn btn-primary"><i class="bi bi-cart"></i> Add to cart</a></span>
        </div>
        </div>
        </div>
    `;
            recipeContainer.innerHTML += recipeCards;
        });
    });


async function userApi() {
    const userUrl = await fetch('https://dummyjson.com/users')
    const userData = await userUrl.json();
    console.log(userData);
    return userData;
}

userApi()
    .then((userData) => {
        let userCont = document.querySelector(".user-wrapper")

        userData.users.forEach(userPosts => {
            let userCard = `
            <div class = "user-card">
            <h4 class="respo"> User ID: ${userPosts.id}</h4>
            <h4 class="respo"> User Name: ${userPosts.firstName}</h4>
            <h4 class="respo"> Birth Date: ${userPosts.birthDate}</h4>
            <h4 class="respo"> Age: ${userPosts.age}</h4>
            <h4 class="respo"> Email: ${userPosts.email}</h4>
            <h4 class="respo"> Address: ${userPosts.address.city}</h4>
            </div>
            `
            userCont.innerHTML += userCard

        });
    });


async function userCommentApi() {
    const commentUrl = await fetch('https://dummyjson.com/comments')
    const commentData = await commentUrl.json();
    console.log(commentData);
    return commentData;
}

userCommentApi()
    .then((commentData) => {
        let commentCont = document.querySelector(".comment-wrapper")

        commentData.comments.forEach(com => {
            let commentCard = `
            <div class = "user-card">
            <h4> User ID: ${com.id}</h4>
            <h4> User Name: ${com.user.fullName}</h4>
            <h4> Commets: ${com.body}</h4>
            <h4> Likes: ${com.likes} <i class="bi bi-balloon-heart-fill text-danger"></i></h4>
           
            </div>
            `
            commentCont.innerHTML += commentCard;

        });
    });


// async function login() {
//     let loginURL = await fetch('https://dummyjson.com/auth/me')
//     let loginData = await loginURL.json()
//     console.log(loginData);
    
// }
// login()

/* providing accessToken in bearer */
// fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
      
//       username: 'emilys',
//       password: 'emilyspass',
//       expiresInMins: 30, // optional, defaults to 60
//     }),
//     credentials: 'include' // Include cookies (e.g., accessToken) in the request
//   })
//   .then(res => res.json())
//   .then(console.log);