//Iteration 1
// Rover object goes here:
 const rover = {
  direction:'N',
  direction:'S',
  direction:'E', 
  direction:'W',    
};
// ======================
//Iteration 2
function turnLeft(rover) {
   switch (rover) {
     case 'North':
     console.log('West');
     break;
     case 'West':
     console.log('South');
     case 'South':
     break;
     console.log('East');
     case 'East':
     console.log('North');
     break;
     default:
     console.log('Hello!');
  }   
}
 
function turnRight(rover) {
  switch (rover) {
  case 'North':
  console.log('East');
  break;
  case 'East':
  console.log('South');
  break;
  case 'South':
  console.log('West');
  break;
  case 'West':
  console.log('North');
  break;
  default:
  console.log('Hello!')
  }
}
 


function moveForward(rover) {
  switch (rover) {
  case 'North':   
  console.log('North');
  break;
  case 'West':
  console.log('West');
  break;
  case 'South':
  console.log('South');
  break;
  case 'East':
  console.log('East');
  break;
  default:
  console.log('Hello!')    
  }  
}

 
console.log('moveForward was called');


turnLeft('East');
moveForward('')

//Iteration 3

function moveForward(rover) {
  x: '0',
  y: '0',
  switch (rover) {
  case 'North':   
  console.log('y-1');
  break;
  case 'West':
  console.log('x-1');
  break;
  case 'South':
  console.log('y+1');
  break;
  case 'East':
  console.log('x+1');
  break;
  default:
  console.log('Hello!')    
  }  
}

// Iteration 4

function commands(rover) {
 forward: 'f',
 right: 'r',
 left: 'l',
 {
   while(commands) {
switch (rover) {
  case 'f':   
  console.log('moveForward(rover)');
  break;
  case 'r':
  console.log('turnRight(rover)');
  break;
  case 'l':
  console.log('turnleft(rover)');
    }
     }
      }
        }

//Iteration 5

 const rover = {
 travelLog:[
  coordinates: 0.0,
  coordinates: 0.1,
  coordinates: 0.2,
  coordinates: 0.3,
  coordinates: 0.4,
  coordinates: 0.5,
  coordinates: 0.6,
  coordinates: 0.7,
  coordinates: 0.8,
  coordinates: 0.9,
  coordinates: 1.0,
  coordinates: 2.0,
  coordinates: 3.0,
  coordinates: 4.0,
  coordinates: 5.0,
  coordinates: 6.0,
  coordinates: 7.0,
  coordinates: 8.0,
  coordinates: 9.0,
 ] 
};

travelLogArray.push(coordinates);
console.log(${travelLogArray});