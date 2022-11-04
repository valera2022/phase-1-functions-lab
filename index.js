// Code your solution in this file!
/*function distanceFromHqInBlocks(pickUpLocation){
    if (distance < 42) { return location - pickUpLocation}
    let location = 42
     let distance = pickUpLocation - location 
     
        return distance 
        

}*/

function distanceFromHqInBlocks(pickUpLocation){
    let location = 42
        if (pickUpLocation < 42) { return location - pickUpLocation
        }
    
                else if (pickUpLocation > 42) {
                      return pickUpLocation - location
                    } 
     
        
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let blocksInFeet = distanceFromHqInBlocks(someValue) * 264
    return blocksInFeet
    
}

/*function distanceTravelledInFeet(start, destination) {
    while (start !== destination){
                   start++
                return (destination-start)*264
                }
}*/

function distanceTravelledInFeet(start, destination) {
        //for (let i = start;i!== destination;i++ ){ 
            if (start<destination) {
            return (destination-start)*264
        }
       else if (destination<start) {
           return (start-destination)*264
        }
           // return (destination-i)*264  //||start>destination === (i - destination)*264
        //}
}


function calculatesFarePrice(start, destination) {
        distanceTravelledInFeet(start, destination)
        if (distanceTravelledInFeet(start, destination) <= 400){
            return 0
        }
            else if (distanceTravelledInFeet(start, destination)> 400 && distanceTravelledInFeet(start, destination) <= 2000){ 
                return (distanceTravelledInFeet(start, destination)-400) *0.02
        }
        else if (distanceTravelledInFeet(start, destination)> 2000 && distanceTravelledInFeet(start, destination) < 2500){ 
            return 25
    }
        else  { return "cannot travel that far"}
  }
  


