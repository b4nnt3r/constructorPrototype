//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}
// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog('normal', 'black', false);
let moonshine = new Dog('normal', 'brown', true);
let atticus = new Dog('normal', 'brindle');

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;
}

// Instances of Human
// Needed: mason, julia

mason = new Human(false);
julia = new Human(true);

Human.prototype.pet = function(dog){
  return dog.status = 'happy';
}

Human.prototype.feed = function(dog){
  return dog.hungry = false;
}
