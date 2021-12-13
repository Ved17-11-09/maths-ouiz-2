function adduser() {
    var player_1 =  document.getElementById("P1").value ;
    console.log(player_1) ;
    var player_2 =  document.getElementById("P2").value ;
    console.log(player_2) ;
   
    localStorage.setItem("player_1_name" , player_1) ;
    localStorage.setItem("player_2_name" , player_2) ;
   
    window.location = "game_page.html" ;
   }