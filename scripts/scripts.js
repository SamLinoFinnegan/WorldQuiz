const cities = document.getElementsByClassName("city");
const listCities = Array.from(cities).map(city => city.id)
var snd = new Audio('./sound/ping-82822.mp3')

function x(){
    
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

listCities.forEach(city => {
    var c = document.getElementById("ignore").innerText
    if(c != ""){
        document.getElementById("ignore").innerText =  c+"|"+city
    }else{
        document.getElementById("ignore").innerText = city
    }
    
})
function movePlayer(index){
    if(index> listCities.length-1){
        index = listCities.length
    }
    var city = document.getElementById(listCities[index])
    var disX = city.getBoundingClientRect().x 
    var disY = city.getBoundingClientRect().y 
  
    const player = document.getElementById("player");

    player.style.left = `${Math.floor(disX -150)}px`
    player.style.top = `${Math.floor(disY -40)}px`
 }

async function spin(){
    var ignoreCities = document.getElementById("ignore").innerText
    var ignoreList = ignoreCities.split("|")
    let x = 0
    
    while (x < ignoreList.length){
        var snd = new Audio('./sound/blip-131856.mp3')
        snd.play()
        await sleep(90)
        var num = Math.floor(Math.random()* (ignoreList.length -1))
        var city = document.getElementById(listCities[num])
        city.style.backgroundColor = "yellow"
       
        await sleep(100)
        
        city.style.backgroundColor = "blue"
        
        x++
    }
    var city = document.getElementById(listCities[num])
    city.style.backgroundColor = "blue"
    
    ignoreList.splice(ignoreList.indexOf(ignoreList[num]),1)
    var cityStr = ignoreList.join("|")
    document.getElementById("ignore").innerText = cityStr

    movePlayer(num)
    await sleep(100)
    
    showPopup(listCities[num])
}



function showPopup(id) {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    let question = questions[id].question;
    document.getElementById("text").innerText = question;
    document.getElementById("id").innerText = id;
  
    const inputDiv = document.getElementById("inputDiv");

    // Remove previous inputs
    while (inputDiv.firstChild) {
      inputDiv.removeChild(inputDiv.firstChild);
    }
  
    
    switch (questions[id].type) {
      case "multiple":
        let mDiv = document.createElement("div");
        mDiv.classList.add("mDiv");
        questions[id].answer.forEach((answer, index) => {
          let label = document.createElement("label");
          label.innerText = answer;
          let radio = document.createElement("input");
          radio.type = "radio";
          radio.id = `answer${index}`;
          radio.name = "multipleChoice"; 
          label.appendChild(radio);
          mDiv.appendChild(label);
        });
        
        inputDiv.appendChild(mDiv);
        break;
  
      case "text":
        let textInput = document.createElement("input");
        textInput.type = "text";
        textInput.id = "answer";
        inputDiv.appendChild(textInput);
        break;
  
      case "yes/no":
        let yesLabel = document.createElement("label");
        yesLabel.innerText = "Yes";
        let yesRadio = document.createElement("input");
        yesRadio.type = "radio";
        yesRadio.id = "answerYes";
        yesRadio.name = "yesNo"; // Add name for radio button group
        yesLabel.appendChild(yesRadio);
  
        let noLabel = document.createElement("label");
        noLabel.innerText = "No";
        let noRadio = document.createElement("input");
        noRadio.type = "radio";
        noRadio.id = "answerNo";
        noRadio.name = "yesNo"; // Add name for radio button group
        noLabel.appendChild(noRadio);
  
        inputDiv.appendChild(yesLabel);
        inputDiv.appendChild(noLabel);
        break;
    }
  
    var roulet = document.getElementById("rouletDiv");
    roulet.style.display = "none";
  }
  

function checkAnswer(user,answer){
    if(user.toLowerCase().trim() === answer.toLowerCase().trim()){
        return true
    }else{
        return false
    }
}

var btn = document.getElementById("answerButton")


btn.addEventListener("click", ()=>{
    var id = document.getElementById("id").innerText
    
    submit(id)
})

function submit(id){
    
    let userAnswer = document.getElementById("answer").value
    let answer = questions[id].answer
    if(checkAnswer(userAnswer, answer)){
        document.getElementById("answer").value = ""
        const count = parseInt(document.getElementById("count").innerText) + 1;
    
        document.getElementById("count").innerText = count
        let popup = document.getElementById("popup")
        popup.style.display ="none"
        var roulet = document.getElementById("rouletDiv")
        roulet.style.display ="flex"
    }else{
        var hint = document.getElementById("hint");
        var tries = document.getElementById("tries").innerText;
        var numT = parseInt(tries) - 1
        
        document.getElementById("tries").innerText = numT
        hint.innerText = questions[id].hint
        hint.style.display = "flex"
        tries.style.display = "block"
        if (numT === 0) {
            // Handle when no tries left
        }

    }
}



// document.onmousemove = function(e){
//     var x = e.pageX;
//     var y = e.pageY;
    
//     console.log("X is "+x+" and Y is "+y)
//     };