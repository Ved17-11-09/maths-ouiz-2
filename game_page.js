player1_score = 0 ;
player2_score = 0 ;

player1_name = localStorage.getItem("player_1_name") ;
player2_name = localStorage.getItem("player_2_name") ;

document.getElementById("player_1_name").innerHTML = player1_name + ":" ;
document.getElementById("player_2_name").innerHTML = player2_name + ":" ;

document.getElementById("player_1_score").innerHTML = player1_score  ;
document.getElementById("player_2_score").innerHTML = player2_score  ;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name ;

function send() {
    get_word = document.getElementById("word").value ;
    word = get_word.toLowerCase() ;
    console.log("Word in lower case = " + word) ;
    
    char1 = word.charAt(1) ;
    console.log(char1) ;

    removeChar1 = word.replace(char1 , "_") ;
    console.log(removeChar1) ;

    Length_by_2 = Math.floor(word.lenght/2) ;
    char2 = word.charAt(Length_by_2) ;
    console.log(char2) ;

    removeChar2 = removeChar1.replace(char2 , "_") ;
    console.log(removeChar2) ;

    lenght_minus1 = word.lenght-1 ;
    char3 = word.charAt(lenght_minus1) ;
    console.log(char3) ;

    
}