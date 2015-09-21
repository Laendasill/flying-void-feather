
  var playerCreation = (function(){
      var name_field
          ,ok_button
          ,created_players = []
          ,pending_players = []
          ,init
          ,getPlayerInfo
          ,getPendingPlayers
          ,addPlayer
          ,createPlayers
          ,assignId
          ;
      init = function(namef,ok){
        name_field = name_f;
        ok_button = ok;
      };
      getPlayerInfo = function(){
        return name_field.value;

      };
      getPendingPlayers = function(){
        return pending_players;
      };
      assignId = function(){
        return pending_players.length;
      };
      addPlayer = function(){
        pending_players.push({
          name: getPlayerInfo(),
          id: assignId()
        });

      };
      createPlayers = function(){
        created_players = [];
        var player;
        for(var i =0; i< pending_players.length; i+=1){
          player = pending_players[i];
          created_players.push(new cuteCrow.player(player.name,player.id));
        }
      };
      return {
        init: init,
        addPlayer: addPlayer,
        createPlayers: createPlayers,
        button: ok_button,
        pending_players: getPendingPlayers
      };
  })();

window.onload = function(){
  var
    name_field = document.getElementById("player_name")
    ,ok_button = document.getElementById("add_player");
    playerCreation.init(name_field,ok_button);
  playerCreation.button.addEventListener("click",function(){
    playerCreation.addPlayer();
      document.querySelector(".current-players").InnerHTML = playerCreation.pending_players();
  },false);
  // testing


  //testing
};
