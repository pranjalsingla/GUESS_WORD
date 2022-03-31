function add_user(){
    player_1= document.getElementById("text_input_1").value;
    player_2= document.getElementById("text_input_2").value;

    localStorage.setItem("user1",player_1);
    localStorage.setItem("user2",player_2);

    window.location="game.html";
}