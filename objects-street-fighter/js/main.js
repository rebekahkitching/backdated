//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(fighterPose,fighterStrike,fighterJump,fighterFinish){
    this.pose = fighterPose
    this.strike = fighterStrike
    this.jump = fighterJump
    this.finish = fighterFinish
    this.yell = function (){
        alert ('AHHH')
    }
    this.taunt = function(){
        console.log('You suck!')
    }
    this.dash = functiong (){
        console.log('Whoopp, missed me')
    }
}


let ryu = new StreetFighter ('pose','chop','jump','finish')