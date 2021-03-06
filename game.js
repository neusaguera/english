var soundT = [
    ["asked", "/ɑːskt/"],
    ["baked", "/ˈbeɪkt/"],
    ["brushed", "/ˈbrʌʃt/"],
    ["cooked", "/kʊkt/"],
    ["cracked", "/ˈkrækt/"],
    ["crashed", "/ˈkræʃt/"],
    ["danced", "/ˈdɑːnst/"],
    ["dressed", "/ˈdrɛst/"],
    ["dropped", "/ˈdrɒpt/"],
    ["escaped", "/ɪˈskeɪpt/"],
    ["finished", "/ˈfɪnɪʃt/"],
    ["fixed" , "/ˈfɪkst/"],
    ["guessed", "/ˈgɛst/"],
    ["helped", "/ˈhɛlpt/"],
    ["hiked", "/ˈhaɪkt/"],
    ["hoped", "/ˈhəʊpt/"],
    ["joked", "/ˈdʒəʊkt/"],
    ["jumped", "/ˈdʒʌmpt/"],
    ["kissed", "/ˈkɪst/"],
    ["knocked", "/ˈnɒkt/"],
    ["laughed", "/ˈlɑːft/"],
    ["locked", "/ˈlɒkt/"],
    ["looked", "/ˈlʊkt/"],
    ["missed", "/ˈmɪst/"],
    ["mixed", "/ˈmɪkst/"],
    ["packed", "/ˈpækt/"],
    ["passed", "/ˈpɑːst/"],
    ["picked", "/pɪkt/"],
    ["pressed", "/ˈprɛst/"],
    ["pronounced", "/prəˈnaʊnst/"],
    ["pushed", "/ˈpʊʃt/"],
    ["relaxed", "/rɪˈlækst/"],
    ["shopped", "/ˈʃɒpt/"],
    ["slipped", "/ˈslɪpt/"],
    ["smoked", "/ˈsməʊkt/"],
    ["stopped", "/stɒpt/"],
    ["talked", "/ˈtɔːkt/"],
    ["typed", "/ˈtaɪpt/"],
    ["walked", "/ˈwɔːkt/"],
    ["washed", "/ˈwɒʃt/"],
    ["watched", "/ˈwɒtʃt/"],
    ["worked","/wɜːkt/"],
];
var soundD = [
    ["advised", "/ədˈvaɪzd/"],
    ["agreed","/ədˈvaɪzd/"],
    ["allowed", "/əˈlaʊd/"],
    ["answered", "/ˈɑːnsərd/"],
    ["appeared", "/əˈpɪərd/"],
    ["arrived","/əˈraɪvd/"],
    ["believed", "/bɪˈliːvd/"],
    ["belonged", "/bɪˈlɒŋd/"],
    ["burned", "/ˈbɜːrnd/"],
    ["called", "/ˈkɔːld/"],
    ["carried", "/ˈkærid/"],
    ["changed", "/ˈtʃeɪndʒd/"],
    ["cleaned", "/ˈkliːnd/"],
    ["closed", "/ˈkləʊzd/"],
    ["covered", "/ˈkʌvərd/"],
    ["cried", "/kraɪd/"],
    ["damaged", "/ˈdæmɪdʒd/"],
    ["described", "/dɪˈskraɪbd/"],
    ["died", "/ˈdaɪd/"],
    ["dried", "/ˈdraɪd/"],
    ["earned", "/ˈɜːrnd/"],
    ["encouraged", "/ɪnˈkʌrɪdʒd/"],
    ["enjoyed", "/ɪnˈdʒɔɪd/"],
    ["entered", "/ˈɛntərd/"],
    ["explained", "/ɪkˈspleɪnd/"],
    ["explored", "/ɪkˈsplɔːrd/"],
    ["filled", "/ˈfɪld/"],
    ["followed", "/ˈfɒləʊd/"],
    ["happened", "/ˈhæpənd/"],
    ["imagined", "/ɪˈmædʒɪnd/"],
    ["interviewed", "/ˈɪntərvjuːd/"],
    ["jailed", "/ˈdʒeɪld/"],
    ["killed", "/ˈkɪld/"],
    ["listened", "/ˈlɪsənd/"],
    ["lived", "/ˈlɪvd/"],
    ["loved", "/ˈlʌvd/"],
    ["measured", "/ˈmɛʒərd/"],
    ["moved", "/ˈmuːvd/"],
    ["opened", "/ˈəʊpənd/"],
    ["planned", "/plænd/"],
    ["played", "/ˈpleɪd/"],
    ["performed", "/pərˈfɔːrmd/"],
    ["pulled", "/ˈpʊld/"],
    ["rained", "/ˈreɪnd/"],
    ["realized", "/ˈrɪəlaɪzd/"],
    ["remembered", "/rɪˈmɛmbərd/"],
    ["repaired", "/rɪˈpɛərd/"],
    ["saved", "/ˈseɪvd/"],
    ["shared", "/ʃɛəd/"],
    ["shaved", "/ˈʃeɪvd/"],
    ["showed", "/ˈʃəʊd/"],
    ["signed", "/ˈsaɪnd/"],
    ["slammed", "/ˈslæmd/"],
    ["stayed", "/ˈsteɪd/"],
    ["snowed", "/ˈsnəʊd/"],
    ["studied", "/ˈstʌdid/"],
    ["traveled", "/ˈtrævəld/"],
    ["tried", "/ˈtraɪd/"],
    ["turned", "/ˈtɜːrnd/"],
    ["used", "/ˈjuːzd/"],
    ["welcomed", "/ˈwɛlkəmd/"],
    ["whispered", "/ˈhwɪspərd/"],
    ["worried", "/ˈwʌrid/"],
    ["yawned", "/ˈjɔːnd/"],
];
var soundED = [
    ["accepted", "/ækˈsɛptɪd/"],
    ["afforded", "/əˈfɔːrdɪd/"],
    ["arrested", "/əˈrɛstɪd/"],
    ["attended", "/əˈtɛndɪd/"],
    ["collected", "/kəˈlɛktɪd/"],
    ["contacted", "/ˈkɒntæktɪd/"],
    ["counted", "/ˈkaʊntɪd/"],
    ["decided", "/dɪˈsaɪdɪd/"],
    ["defended", "/dɪˈfɛndɪd/"],
    ["demanded", "/dɪˈmɑːndɪd/"],
    ["divided", "/dɪˈvaɪdɪd/"],
    ["ended", "/ˈɛndɪd/"],
    ["expanded", "/ɪkˈspændɪd/"],
    ["expected", "/ɪkˈspɛktɪd/"],
    ["exported", "/ɪkˈspɔːrtɪd/"],
    ["flooded", "/flʌdɪd/"],
    ["graduated", "/ˈgrædʒueɪtɪd/"],
    ["hated", "/ˈheɪtɪd/"],
    ["hunted", "/ˈhʌntɪd/"],
    ["included", "/ɪnˈkluːdɪd/"],
    ["invented", "/ɪnˈvɛntɪd/"],
    ["invited", "/ɪnˈvaɪtɪd/"],
    ["landed", "/ˈlændɪd/"],
    ["needed", "/ˈniːdɪd/"],
    ["painted", "/ˈpeɪntɪd/"],
    ["planted", "/ˈplɑːntɪd/"],
    ["presented", "/prɪˈzɛntɪd/"],
    ["pretended", "/prɪˈtendɪd/"],
    ["printed", "/ˈprɪntɪd/"],
    ["protected", "/prəˈtɛktɪd/"],
    ["provided", "/prəˈvaɪdɪd/"],
    ["rented", "/ˈrɛntɪd/"],
    ["repeated", "/rɪˈpiːtɪd/"],
    ["reported", "/rɪˈpɔːrtɪd/"],
    ["respected", "/rɪˈspɛktɪd/"],
    ["rested", "/ˈrɛstɪd/"],
    ["scolded", "/ˈskəʊldɪd/"],
    ["shouted", "/ˈʃaʊtɪd/"],
    ["skated", "/ˈskeɪtɪd/"],
    ["started", "/ˈstɑːtɪd/"],
    ["treated", "/ˈtriːtɪd/"],
    ["visited", "/ˈvɪzɪtɪd/"],
    ["waited", "/ˈweɪtɪd/"],
    ["wanted", "/ˈwɒntɪd/"],
    ["wasted", "/ˈweɪstɪd/"],
];

var arrayLists = [soundT, soundD, soundED];
var arrayWordsGame = [];
var totalCorrect = 0;
var isMobile;


var rowsBingo = 3;
var cellBingo = 3;
var arrayWordsBingo = [];
var shuffleArrayBingo = [];
var nextWord = 0;
var totalCells = 0;
var arrayResult = [];


window.onload = function init() {
    fillList(this.soundD, "listSoundD");
    fillList(this.soundT, "listSoundT");
    fillList(this.soundED, "listSoundED");
    isMobile = mobileCheck();
    gameWords(4);
    updateScore(this.totalCorrect, this.arrayWordsGame.length);
   
    newBingo();
}

function fillList(list,nameTag){
    var listID = document.getElementById(nameTag);
    var li = document.createElement('li'); 
    var clone;
    
    list.forEach(function(word){
        clone = li.cloneNode();
        clone.textContent = word[0];
        listID.appendChild(clone);
    });
}

function gameWords(numOfWords){
    
    arrayLists.forEach(function(list,index){
        var shuffleList = shuffle(list);
        for(var i = 0; i < numOfWords ; i++){
            var valueToPush = { }; 
            valueToPush["listID"] = index;
            valueToPush["word"] = shuffleList[i][0];
            valueToPush["transcription"] = shuffleList[i][1];
            arrayWordsGame.push(valueToPush);
        }
    });

    arrayWordsGame = shuffle(arrayWordsGame); 
    fillCards(arrayWordsGame);
}

function fillCards(list){
    var listID = document.getElementById("listGame");
    var li = document.createElement("li");
    var select = document.createElement("select");
    var span = document.createElement("span");
    var label = document.createElement("label");
    var cloneLi, cloneSelect, cloneSpan, cloneLabel;
    
    list.forEach(function(item, index){
        cloneLi = li.cloneNode();
        cloneLi.classList.add("word-game");
        cloneLi.textContent = item.word;
        nameId = "gameItem" + index;
        cloneLi.id =  nameId;
        cloneSelect = select.cloneNode();
        cloneSelect.id = "select" + nameId;
        cloneSelect.classList.add("select-word");
        addOptionSelect(item.word, cloneSelect);
        cloneLabel = label.cloneNode();
        cloneLabel.textContent = item.word;
        cloneLabel.htmlFor = "select" + nameId;
        cloneLabel.classList.add("label-select-game");
        cloneSpan = span.cloneNode();
        cloneSpan.classList.add("hide");
        cloneSpan.textContent = item.transcription;
        handleOnChange(nameId, cloneSelect, item);
        cloneLi.appendChild(cloneSpan);
        cloneLi.appendChild(cloneSelect);
        cloneLi.appendChild(cloneLabel);
        listID.appendChild(cloneLi);
    });

}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


function addOptionSelect(word, select){
    var text = "choose option for " + word;
    if(isMobile == true){

        select.options[select.options.length] = new Option(text, -2);
    } else {
        select.options[select.options.length] = new Option("choose option", -1);
    }
    select.options[select.options.length] = new Option("-T", 0);
    select.options[select.options.length] = new Option("-D", 1);
    select.options[select.options.length] = new Option("-ID", 2);
    
    select.options[0].disabled = true;

    return select;
}

function handleOnChange(nameId, select, item){
    select.onchange = function(){
      var parent  = document.getElementById(nameId);
      var value = select.selectedIndex - 1;
      var answer = isCorrect(value,item);

      parent.className = answer;
      select.disabled = true;
    }
}

function isCorrect(value, item){
    var answer;

    if(item.listID == value){
        answer = "word-game correct";
        totalCorrect += 1;
        updateScore();
    } else {
        answer = "word-game wrong";
    }

    return answer
}

function updateScore(){
    var correctSpan = document.getElementById("totalCorrect");
    correctSpan.textContent = totalCorrect;
    var totalSpan = document.getElementById("totalWords");
    totalSpan.textContent = arrayWordsGame.length;
}

function newGame(){
    totalCorrect = 0;
    removeCards();
    gameWords();
    
    updateScore(this.totalCorrect, this.arrayWordsGame.length);
}

function removeCards(){
    var list = document.getElementById("listGame");

    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}

function mobileCheck() {
    let check = false;

    if( navigator.userAgent.match(/Android/i)){
        check = true;
    }
  
    return check;
};



function fillArrayBingo(){

    arrayLists.forEach(function(list,index){
        var shuffleList = shuffle(list);
        for(var i = 0; i < cellBingo ; i++){
            var valueToPush = { }; 
            valueToPush["listID"] = index;
            valueToPush["word"] = shuffleList[i][0];
            valueToPush["transcription"] = shuffleList[i][1];
            if(index == 0){
                valueToPush["finished"] = "-T";
            } else if(index == 1){
                valueToPush["finished"] = "-D";
            } else {
                valueToPush["finished"] = "-ID"
            }

            arrayWordsBingo.push(valueToPush);
        }
    });
}


function fillBingo(){
    var list = shuffle(arrayWordsBingo);
    
    var tableID = document.getElementById("bingoBoard");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var button = document.createElement("button");

    var cloneTr, cloneTd, cloneButton;
    


    for(var row = 0; row < rowsBingo; row++){
        cloneTr = tr.cloneNode();
        for(var cell = 0; cell < cellBingo; cell++){
            cloneTd = td.cloneNode();
            cloneButton = button.cloneNode();
            cloneButton.value = list[totalCells].listID;
            cloneButton.textContent = list[totalCells].finished;
            handleOnClick(cloneButton);
            cloneTr.appendChild(cloneTd);
            cloneTd.appendChild(cloneButton);
            totalCells = totalCells + 1;
        }

        tableID.appendChild(cloneTr);

    }
}

function showBingoWord(list){


    var word = document.getElementById("bingoWord");
    word.textContent = list[nextWord].word;

}

function handleOnClick(button){

    button.onclick = function(){
        if(button.value == shuffleArrayBingo[nextWord].listID){

            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }
        button.disabled = true;

        if(nextWord < (totalCells - 1)){
            nextWord += 1;
            showBingoWord(shuffleArrayBingo);
        } else {
            showResultBingo();
        }
    }
}

function showResultBingo(){
    var word = document.getElementById("bingoWord");
    word.textContent = "COMPLET!!";
    var correctSpan = document.getElementById("totalBingoCorrectLines");
    //correctSpan.textContent = totalCorrect;
    var totalSpan = document.getElementById("totalBingoLines");
   // totalSpan.textContent = rowsBingo;
}

function newBingo(){
    removeBingoCells();
    fillArrayBingo();
   fillBingo();
    
   shuffleArrayBingo = shuffle(arrayWordsBingo);
   showBingoWord(shuffleArrayBingo);
}

function removeBingoCells(){
    var table = document.getElementById("bingoBoard");

    while (table.lastElementChild) {
        table.removeChild(table.lastElementChild);
    }
}