player_1= localStorage.getItem("user1");
player_2= localStorage.getItem("user2");

player_1_score= 0;
player_2_score= 0;

document.getElementById("player1_name").innerHTML= player_1 + ":";
document.getElementById("player2_name").innerHTML= player_2 + ":";

document.getElementById("player1_score").innerHTML= player_1_score;
document.getElementById("player2_score").innerHTML= player_2_score;

document.getElementById("question_turn").innerHTML= "question turn:"+ player_1;
document.getElementById("answer_turn").innerHTML= "answer turn:"+ player_2;

function ask(){
    get_word= document.getElementById("word").value;
    word= get_word.toLowerCase();
    console.log(word);

    letter1= word.charAt(1);
    console.log(letter1);

    length_2= Math.floor(word.lenth/2);
    letter2= word.charAt(length_2);
    console.log(letter2);

    length_1= word.lenth-1;
    letter3= word.charAt(length_1);
    console.log(letter3);

    remover_letter1= word.replace(letter1,"_");
    remover_letter2= remover_letter1.replace(letter2,"_");
    remover_letter3= remover_letter2.replace(letter3,"_");
    console.log(remover_letter3);

    question_word= "<h4 id='word_display'> Q."+remover_letter3+ "</h4>";
    input_box="<br> Answer:<input id='text_input' type='text'>";
    check_button="<br> <br> <button onclick='check()' class='btn.info'>CHECK</button>";

    row= question_word+ input_box+ check_button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";
}

question_turn="Player1";
answer_turn="Player2";

function check(){
    get_answer= document.getElementById("text_input").value;
    answer= get_answer.toLowerCase;
    console.log(answer);

    if(answer==word){
        if(answer_turn=="Player1"){
            player_1_score=player_1_score+1;
            document.getElementById("player1_score").innerHTML=player_1_score;
        }
    else{
        player_2_score=player_2_score+1;
        document.getElementById("player2_score").innerHTML=player_2_score;
    }
    }

    if(question_turn=="Player1"){
        question_turn="Player2"
        document.getElementById("question_turn").innerHTML="Question turn:"+player_2;
    }
    else{
        question_turn="Player1"
        document.getElementById("question_turn").innerHTML="Question turn:"+player_1;
    }
    if(answer_turn=="Player1"){
        answer_turn="Player2"
        document.getElementById("answer_turn").innerHTML="Answer turn:"+player_2;
    }
    else{
        answer_turn="Player1"
        document.getElementById("answer_turn").innerHTML="Answer turn:"+player1;
    }
    document.getElementById("output").innerHTML="";
}