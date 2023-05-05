function validate() {
  let x = document.forms["myform"]["fullname"].value;
  if (x == "") {
    alert("Name must be filled out");
    document.myform.fullname.focus();
    return false;
  } 
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let y = document.forms["myform"]["email"].value;
  if (y.match(mailformat)) {return true;}
  else{
   alert("You have entered an invalid email address!");
   document.myform.email.focus();
   return false;
  }
}