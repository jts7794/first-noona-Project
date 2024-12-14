
let computerNum = 0

function pickRandomNum() {

    computerNum = Math.floor(Math.random()* 10)+1;
    console.log("정답", computerNum);
}

pickRandomNum();

let play_btn = document.getElementById("play_btn");
//console.log("정답", play_btn);

play_btn.addEventListener("click", play);


let userinput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

let resetBtn = document.getElementById("Reset_btn");
let chances = 3;
let gameOver = false;

let chancearea = document.getElementById("chance-area");

let history = [];

resetBtn.addEventListener("click",resetFn);

userinput.addEventListener("focus", function(){
    userinput.value = "";
})


let maxNum = 10
let minNum = 1

function play() {
    //console.log("게임 시작")
    let uservalue = userinput.value

    if(uservalue < minNum || uservalue > maxNum){
        resultArea.textContent = `${minNum}~${maxNum}사이에 숫자를 입력해주세요.`;
        return;
    }

    if (history.includes(uservalue)) {
        resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해 주세요 "
        return;
    }


    if(uservalue < computerNum){
        //console.log("더 큰 숫자를 입력해주세요")
        resultArea.textContent = "더 큰 숫자를 입력해주세요"
        minNum = uservalue;
    }else if(uservalue > computerNum){
        //console.log("더 작은 숫자를 입력해주세요")
        resultArea.textContent = "더 작은 숫자를 입력해주세요"
        maxNum = uservalue;
    }else if(uservalue = computerNum){
        //console.log("정답")
        resultArea.textContent = "정답"
        //gameOver = true
        play_btn.disabled = true;
        return  
    }
    
    if(chances < 1)  {
        //gameOver = true
        resultArea.textContent = "정답 기회를 모두 소진했습니다."
        play_btn.disabled = true;
    }

    //if (gameOver == true){
    //    play_btn.disabled = true;
    //}

    history.push(uservalue);
    //console.log(history)

    chances--;
    chancearea.textContent = `남은 기회:${chances}번`;
    //console.log("남은 기회 :" ,chances)


}


function resetFn() {
    userinput.value = "";
    play_btn.disabled = false;

    pickRandomNum();
    resultArea.textContent = "결과값이 여기 나옵니다.";
    chances = 3
    chancearea.textContent = `남은 기회:${chances}번`;
    //gameOver = false
    maxNum = 10
    minNum = 1
    history = [];
}