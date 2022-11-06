const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path');

//to get api when user click go button
function buttonClicked(){

    var city = document.getElementById("city-input").value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => { 

    
    //to get value from objects array
    function extractValue(arr, prop) {
    let extractedValue = arr.map(item => item[prop]);
    return extractedValue;
    }

    const result = extractValue(data.weather, 'description');

        console.log(data); // output the API into console 
    
        document.getElementById("display-temp").innerHTML =  (data.main.temp-273.15).toFixed(2) + " in °C";
        document.getElementById("display-humidity").innerHTML = (data.main.humidity).toFixed(2) + " g.m-3";
        document.getElementById("display-pressure").innerHTML = (data.main.pressure).toFixed(2) + " Pa";
        document.getElementById("display-speed").innerHTML = (data.wind.speed).toFixed(2) + " knots";
        document.getElementById("display-type").innerHTML = "Sky in " + city + " is " + result;
       
    })
}

//create 
var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnUpdate = document.getElementById('btnUpdate')
var btnDelete = document.getElementById('btnDelete')
var filename = document.getElementById('filename')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')

//creating text file when user click CREATE button
btnCreate.addEventListener('click', function(){  
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
      if(err){
        return console.log(err)
      }
      var txtfile = document.getElementById("fileName").value
      alert(txtfile + " text file was created")    
      console.log("The file was created")
    
    })
    
  })
  
  //read contents of the created text file
  btnRead.addEventListener('click', function(){  //read contents of the created text file
    let file = path.join(pathName, fileName.value)
   
    fs.readFile(file, function(err, data){ 
      if(err){
        return console.log(err)
      }
      fileContents.value = data
      console.log("The file was read!")
    })
    
  })

//creating text file when user click UPDATE button
btnUpdate.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was updated")    
    console.log("The file was updated")
  
  })
  
})
  
  btnDelete.addEventListener('click', function(){  
    let file = path.join(pathName, fileName.value)
   
    fs.unlink(file, function(err){ 
      if(err){
        return console.log(err)
      }
      fileName.value = ""
      fileContents.value = ""
      alert(txtfile + " text file was deleted")
      console.log("The file was deleted!")
    })
    
  })