fetch('https://6ad02e7c03feaa52b21f170f.mockapi.io/test').then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
})
console.log('mani')
// axios -> library or  package

// new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     reject('Success')
//     // }, 3000)

//     try {
//        // api call
//        resolve({})
//     } catch(data) {
//         reject(data)
//     }
// }).then(data => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err, 'error')
// })

// async function profileAPI() {}
// async function orderAPI() {}

// async function getUserData() {
//     // await profileAPI();
//     // await orderAPI();
//     // userdata => two server => same data
//     Promise.any([profileAPI(), orderAPI()]).then((data) => {
//         const [profileData, orderAPI] = data;
//     }).catch((err) => {

//     })
// }

// all -> all or none
// allSettled -> all must be succeed
// any -> any one is enough(success or failure both are accepted)