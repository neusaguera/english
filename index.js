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

window.onload = function init() {
    fillList(this.soundD, "listSoundD");
    fillList(this.soundT, "listSoundT");
    fillList(this.soundED, "listSoundED");
    gameWords(4);
    updateScore(this.totalCorrect, this.arrayWordsGame.length);
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
    console.log(arrayWordsGame);
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
    if(mobileCheck() == true){

        select.options[select.options.length] = new Option("choose option", -1);
    } else {
        select.options[select.options.length] = new Option(text, -2);
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
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};