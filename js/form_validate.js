/* Frontend Validierung der Feedbackeingaben*/

/*Variabeln&Speicher & Funktionen der Multipli-Choice auswahlen*/
var checkTaste;
var checkPrice;

function checkTaste(){
    this.checkTaste = true;
}

function checkPrice(){
    this.checkPrice = true;
}
function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        email.focus;
        return false;}
    else{
        return true;
        }
    }
function showDiv(){
    if(checkEmail() == true){
        document.getElementById('hidden_div').style.display = "block";
        document.getElementById('hidden_div2').style.display = "none";
    }
    else {
        document.getElementById('hidden_div2').style.display = "block";
        document.getElementById('hidden_div').style.display = "none";
    }
}
function checkUsername() {
    var username = document.getElementById('txtUsername');
    var filter2 = /^[a-zA-Z]{3,}$/;

    if (!filter2.test(username.value)) {
        username.focus;
        return false;}
    else{
        return true;
    }
}
function showDiv2(){
    if(checkUsername() == true){
        document.getElementById('hidden_div3').style.display = "block";
        document.getElementById('hidden_div4').style.display = "none";
    }
    else {
        document.getElementById('hidden_div4').style.display = "block";
        document.getElementById('hidden_div3').style.display = "none";
    }
}
function checkFeedback () {

    var feedback = document.getElementById('txtFeedback');
    var filter3 = /^[a-zA-Z0-9., ]{50,}$/;

    if (!filter3.test(feedback.value)) {
        feedback.focus;
        return false;}
    else{
        return true;
    }
}
function showDiv3(){
    if(checkFeedback() == true){
        document.getElementById('hidden_div5').style.display = "block";
        document.getElementById('hidden_div6').style.display = "none";
    }
    else {
        document.getElementById('hidden_div6').style.display = "block";
        document.getElementById('hidden_div5').style.display = "none";
    }
}
function validateForm() {
    if(checkTaste & checkPrice & checkFeedback()& checkUsername() & checkEmail() == true){
        document.getElementById('submit').disabled = false;
    }else {
        document.getElementById('submit').disabled = true;
    }
}
