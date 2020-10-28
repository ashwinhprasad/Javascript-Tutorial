is_admin = false;
is_logedin = false;


if (is_admin && is_logedin) {

  console.log("You are the admin and you are logged in");

} else if ( is_admin || is_logedin) {

  console.log("you are either admin or logged in");

} else {

  console.log("You are not the admin and you are not logged in");

}
