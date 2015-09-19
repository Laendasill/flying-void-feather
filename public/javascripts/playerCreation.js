window.onload = function(){
  var playerCreation = (function(){
      var name_field = document.getElementById("player_name")
          ,ok_button = document.getElementById("add_player")
          ,created_players = []
          ,pending_players = []
          ,getPlayerInfo
          ,getPendingPlayers
          ,addPlayer
          ,createPlayers
          ,assignId
          ;
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
        addPlayer: addPlayer,
        createPlayers: createPlayers,
        button: ok_button,
        pending_players: getPendingPlayers
      };
  })();

  playerCreation.button.addEventListener("click",function(ev){
    playerCreation.addPlayer()
    
    },false);
  // testing
  //testing
};
