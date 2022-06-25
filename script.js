/**
 source:
 https://restfulapi.net/json-with-ajax/
**/
//Sending JSON request payload and receiving the JSON response object are very common tasks while dealing with AJAX and remote REST APIs

//AJAX with XMLHttpRequest 

//Create an instance of the XMLHttpRequest object. The XMLHttpRequest lets us make asynchronous AJAX calls to the live server. 
let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() 
{
if (this.readyState == 4 && this.status == 200)
    {
        let responseJsonObj = JSON.parse(this.responseText);

        console.log( responseJsonObj);
    }
}

//The first step to make an AJAX request is calling the open() method with HTTP URL/endpoint. XMLHttpRequest, by default, opens up an asynchronous request. In open(), we specify the HTTP method in which the request has to be sent.
xmlhttp.open("GET", `https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=${config.SECRET_API_KEY}`, true);
xmlhttp.send();