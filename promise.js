const checkLogin = new Promise(
    (resolve, reject) => {})
let loggedIn = false;
if (loggedIn) {
resolve ("welcome you are logged in")
}
else{
reject ("sorry you are not logged in")
}

checkLogin.then((result) => { console.log(result) })
checkLogin.catch((error) => { console.log(error) })
