var token;

function authentifizieren() {
    var myjson = {"email": "webg@ffhs.ch", "password": "WebG_HS2017@FFHS"};
    var aut = new XMLHttpRequest();
    var method = 'POST';
    var url = 'https://tonyspizzafactory.herokuapp.com/api/auth';

    aut.onload = function () {
        if (this.status == 200 && this.responseText != null) {
            var jsonResponse = JSON.parse(this.responseText);
            token = jsonResponse.token;

            loadpizza();
        }
        else {
            alert("Fehler beim  vorgefallen")
        }
    }
    aut.open(method, url);
    aut.setRequestHeader("Content-Type", "application/json");
    aut.send(JSON.stringify(myjson));
}
    function loadpizza()
    {
        var piz = new XMLHttpRequest();
        var method = 'GET';
        var url = 'https://tonyspizzafactory.herokuapp.com/api/pizzas';

        piz.open(method, url);
        piz.setRequestHeader("Authorization", token);

        piz.send();
        piz.onload = function() {

        if (this.status == 200 && this.responseText != null) {
            var jsonResponse = JSON.parse(this.responseText);
            for (zaehler = 0; zaehler < jsonResponse.length; zaehler++) {
                document.getElementById('pizzapic'+zaehler).src = jsonResponse[zaehler].imageUrl;
                document.getElementById('pizzaname'+zaehler).innerHTML = jsonResponse[zaehler].name;
                document.getElementById('zutaten'+zaehler).innerHTML = jsonResponse[zaehler].ingredients;
                document.getElementById('preis'+zaehler).innerHTML = jsonResponse[zaehler].prize;
            }
            }
        else {
            alert("Fehler beim Datenempfang der Pizzas");
        }
    }
    }
function authentifizieren1() {
    var myjson = {"email": "webg@ffhs.ch", "password": "WebG_HS2017@FFHS"};
    var aut = new XMLHttpRequest();
    var method = 'POST';
    var url = 'https://tonyspizzafactory.herokuapp.com/api/auth';

    aut.onload = function () {
        if (this.status == 200 && this.responseText != null) {
            var jsonResponse = JSON.parse(this.responseText);
            token = jsonResponse.token;
            loadsalads();
        }
        else {
            alert("Fehler beim  vorgefallen")
        }
    }
    aut.open(method, url);
    aut.setRequestHeader("Content-Type", "application/json");
    aut.send(JSON.stringify(myjson));
    }
    function loadsalads()
    {
        var salad = new XMLHttpRequest();
        var method = 'get';
        var url = 'https://tonyspizzafactory.herokuapp.com/api/salads';



        salad.open(method, url);
        salad.setRequestHeader("Authorization", token);
        salad.send();

        salad.onload = function() {

            if (this.status == 200 && this.responseText != null) {
                var jsonResponse = JSON.parse(this.responseText);
                for (zaehler = 0; zaehler < jsonResponse.length; zaehler++) {
                    document.getElementById('saladpic'+zaehler).src = jsonResponse[zaehler].imageUrl;
                    document.getElementById('saladname'+zaehler).innerHTML = jsonResponse[zaehler].name;
                    document.getElementById('zutaten'+zaehler).innerHTML = jsonResponse[zaehler].ingredients;
                    document.getElementById('preis'+zaehler).innerHTML = jsonResponse[zaehler].prize;
                }
            }
            else {
                alert("Fehler beim Datenempfang der Salate");
            }
        }

    }
function authentifizieren2() {
    var myjson = {"email": "webg@ffhs.ch", "password": "WebG_HS2017@FFHS"};
    var aut = new XMLHttpRequest();
    var method = 'POST';
    var url = 'https://tonyspizzafactory.herokuapp.com/api/auth';

    aut.onload = function () {
        if (this.status == 200 && this.responseText != null) {
            var jsonResponse = JSON.parse(this.responseText);
            token = jsonResponse.token;

            loaddrinks();
        }
        else {
            alert("Fehler beim  vorgefallen")
        }
    }
    aut.open(method, url);
    aut.setRequestHeader("Content-Type", "application/json");
    aut.send(JSON.stringify(myjson));
}
function loaddrinks()
{
    var drink = new XMLHttpRequest();
    var method = 'get';
    var url = 'https://tonyspizzafactory.herokuapp.com/api/softdrinks';

    drink.open(method, url);
    drink.setRequestHeader("Authorization", token);
    drink.send();

    drink.onload = function() {

        if (this.status == 200 && this.responseText != null) {
            var jsonResponse = JSON.parse(this.responseText);
            for (zaehler = 0; zaehler < jsonResponse.length; zaehler++) {
                document.getElementById('drinkpic'+zaehler).src = jsonResponse[zaehler].imageUrl;
                document.getElementById('drinkname'+zaehler).innerHTML = jsonResponse[zaehler].name;
                document.getElementById('volume'+zaehler).innerHTML = jsonResponse[zaehler].volume;
                document.getElementById('preis'+zaehler).innerHTML = jsonResponse[zaehler].prize;
            }
        }
        else {
            alert("Fehler beim Datenempfang der Salate")
        }
    }
}
function order(type, name)
{
    var neworder = {"type": type,"name": name};
    var order = new XMLHttpRequest();
    var method = 'POST';
    var url = 'https://tonyspizzafactory.herokuapp.com/api/orders';

    order.onload = function(){
    if (this.status == 201 && this.responseText != null) {
        alert('Sie haben gerade eine ' + type + ' ' + name + ' bestellt, Vielen Dank!');
    }
    else {
        alert('Bei dieser Bestellung ist leider was schief gelaufen bitte wenden sie sich an unseren Kundendienst');
    }
    }
    order.open(method, url);
    order.setRequestHeader("Authorization", token);
    order.setRequestHeader("Content-Type", "application/json");
    order.send(JSON.stringify(neworder));
}
var pizzaRating;
var prizeRating;


function sendfeedback()
{
    var checkbox1 = document.querySelectorAll('input[name="taste"]');
    var num = checkbox1.length;
    for (var i=0; i<num; i++) {
        if (checkbox1[i].checked === true) {
            pizzaRating = checkbox1[i].value;
        }
    }
    var checkbox2 = document.querySelectorAll('input[name="price"]');
    var num1 = checkbox2.length;
    for (var i1=0; i1<num1; i1++){
        if (checkbox2[i1].checked === true){
            prizeRating = checkbox2[i1].value;
        }
    }
    var nameRating = document.querySelector('input[name="name"]').value;
    var emailRating = document.querySelector('input[name="email"]').value;
    var feedbackRating = document.getElementById('txtFeedback').value;

    var newFeedback = {
        "pizzaRating": pizzaRating,
        "prizeRating": prizeRating,
        "name": nameRating,
        "email": emailRating,
        "feedback": feedbackRating
    }
    var feedback = new XMLHttpRequest();
    var method = 'POST';
    var url = 'https://tonyspizzafactory.herokuapp.com/api/feedback';

    feedback.onload = function() {
        if (this.status == 201 && this.responseText != null) {
            alert('Danke für ihr Feedback');
            loadfeedback();
        }
        else {
            alert('Ein Fehler bei Übertragung des Feedbacks ist aufgetreten, bitte wenden sie sich an den Kundendienst');
        }
    }
        feedback.open(method, url);
        feedback.setRequestHeader("Authorization", token);
        feedback.setRequestHeader("Content-Type", "application/json");
        feedback.send(JSON.stringify(newFeedback));

}
function authentifizieren3() {
    var myjson = {"email": "webg@ffhs.ch", "password": "WebG_HS2017@FFHS"};
    var aut = new XMLHttpRequest();
    var method = 'POST';
    var url = 'https://tonyspizzafactory.herokuapp.com/api/auth';

    aut.onload = function () {
        if (this.status == 200 && this.responseText != null) {
            var jsonResponse = JSON.parse(this.responseText);
            token = jsonResponse.token;

            loadfeedback();
        }
        else {
            alert("Fehler beim  vorgefallen")
        }
    }
    aut.open(method, url);
    aut.setRequestHeader("Content-Type", "application/json");
    aut.send(JSON.stringify(myjson));
}
var awesome = 0;
var good = 0;
var okay = 0;
var poor = 0;
var fair = 0;
var okey2 = 0;
var expensive = 0;

function loadfeedback()
{
    var feedback = new XMLHttpRequest();
    var method = 'get';
    var url = 'https://tonyspizzafactory.herokuapp.com/api/feedback';

    feedback.open(method, url);
    feedback.setRequestHeader("Authorization", token);
    feedback.send();

    feedback.onload = function() {

        if (this.status == 200 && this.responseText != null) {
            var jsonResponse = JSON.parse(this.responseText);

            var counter2 = 0;

            for (counter = 1; counter <= jsonResponse.length; counter++){
                if (jsonResponse[counter2].pizzaRating == "awesome"){
                    awesome++;
                }
                if (jsonResponse[counter2].pizzaRating == "good"){
                    good++;
                }
                if (jsonResponse[counter2].pizzaRating == "okay"){
                    okay++;
                }
                if (jsonResponse[counter2].pizzaRating == "poor"){
                    poor++;
                }
                counter2++;
            }

            var counter3 = 0;

            for (counter = 1; counter <= jsonResponse.length; counter++){
                if (jsonResponse[counter3].prizeRating == "fair"){
                    fair++;
                }
                if (jsonResponse[counter3].prizeRating == "okay"){
                    okey2++;
                }
                if (jsonResponse[counter3].prizeRating == "expensive"){
                    expensive++;
                }
                counter3++;
            }

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawTasteChart);
            google.charts.setOnLoadCallback(drawPrizeChart);

            function drawTasteChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Taste', 'Votes'],
                    ['Awesome', awesome],
                    ['Good', good],
                    ['Okay', okay],
                    ['Poor', poor]
                ]);

                var options = {
                    title: 'Taste of Pizzas'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
            }
            function drawPrizeChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Prize', 'Votes'],
                    ['Fair', fair],
                    ['Okay', okey2],
                    ['Expensive', expensive],
                ]);

                var options = {
                    title: 'Prize of Pizzas'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

                chart.draw(data, options);
            }

            var num = jsonResponse.length - 1;
            for (zaehler = 1; zaehler <= 4; zaehler++) {
                document.getElementById('feedback'+zaehler).innerHTML = jsonResponse[num].feedback;
                document.getElementById('name'+zaehler).innerHTML = jsonResponse[num].name;
                document.getElementById('email'+zaehler).innerHTML = jsonResponse[num].email;
                num--;
            }
        }
        else {
            alert("Fehler beim Datenempfang der Feedbacks")
        }
    }
}



