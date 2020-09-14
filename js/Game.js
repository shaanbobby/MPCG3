class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("game start",120,100);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
      var dp=130;
      for(var p in allPlayers){
        if(p==="player"+player.index){
          fill("red")
        }
        else{
          fill("black")
        }
       dp=dp+20;
       text(allPlayers[p].name+":"+allPlayers[p].distance,120,dp);
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index!==null){
      player.distance=player.distance+50;
      player.update();
    }
  }
}
