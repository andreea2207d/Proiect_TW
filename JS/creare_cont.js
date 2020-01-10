var slider = document.getElementById("myRange");
var output = document.getElementById("rangeValue");
  $(output).val(slider.value);
  slider.oninput = function() {
      $(output).val(slider.value);
  }
function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var unamep = document.registration.usernamep;
var ucity = document.registration.city;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(allLetterp(unamep))
{
if(alphanumeric(ucity))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
} 
}
} 
}
}
}
}
}
return false;

} function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
Swal.fire("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
Swal.fire('First name must have alphabet characters only');
uname.focus();
return false;
}
}
function allLetterp(unamep)
{ 
var letters = /^[A-Za-z]+$/;
if(unamep.value.match(letters))
{
return true;
}
else
{
Swal.fire('Last name must have alphabet characters only');
unamep.focus();
return false;
}
}
function alphanumeric(ucity)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(ucity.value.match(letters))
{
return true;
}
else
{
Swal.fire('User city must have alphanumeric characters only');
ucity.focus();
return false;
}
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
Swal.fire('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
Swal.fire('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
window.location.replace("lista_nevoi.html")
return true;
}
else
{
Swal.fire('You have entered an invalid email address!');
uemail.focus();
return false;
}
}
$(document).ready(function() {
  const Url = 'http://jsonplaceholder.typicode.com/posts';
  $('.btn').click(function() {
    $.ajax({
      url: Url,
      type: 'GET',
      success: function(result) {
        console.log(result);
      },
      error: function(error) {
        console.log('Error ${error}')
      }
    })
  })
});
