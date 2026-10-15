// 1-> A table data
// 2-> B table -> depends A table records

// profile -> user id
// order
// wishlist

// profile api 
// wait until profile api ends
// order api call

async function profileAPI() {
    // logic for profile api call
    // after response
    orderAPI();
}

async function orderAPI() {
    // login for order api call
    // after response wishlist
}

async function wishlist() {
    // logic for wishlist
}




getUserData() {
    function profileAPI() {
        // response
        orderAPI(); 
        function orderAPI() {
            function wishlist() {

            }
            //after api response
            wishlist();
        }
    }
}

// Array.map(() => {

// })

new Promise(profileAPI).then(new Promise(orderAPI).then(new Promise(wishlist).then())).catch()

// async await

async function getUserData() {
  const profiledata = await profileAPI();
  const orderData = await orderAPI();
  const wishlistData = await wishlist();
   console.log('mani')
   return wishlistData;
}

 getUserData().then((data) => {
    console.log('some data', data)
 }).catch((err) => {
    console.log(err)
 })