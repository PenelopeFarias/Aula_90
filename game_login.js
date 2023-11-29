
function addUser() 
{
  player1_name = document.getElementById("player1_name_input").value; 
  player2_name = document.getElementById("player2_name_input").value; 
  
    localStorage.setItem("player1_name", player1_name); /* Explicação: Armazenamos o valor da variável player1Name como chave no armazenamento local usando a função setItem() */
    localStorage.setItem("player2_name", player2_name); /* Explicação: Armazenamos o valor da variável player2Name como chave no armazenamento local usando a função setItem() */

    window.location = "game_page.html"; /* Explicação: aqui estamos indo para a página game_page.html */
  }


