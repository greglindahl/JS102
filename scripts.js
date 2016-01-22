//Use this file to implement Part One of your project

var animal = {
  username: 'yourmom',
  tagline: ['I love money!'],
  noises: []
};

animal.noises.push(['woof', 'bark', 'yep']);

var counter = 0;

for (var key in animal) {
  counter ++;
  console.log(key, counter);
  if (key === 'username') {
    console.log('Hi my name is ' + animal.username);
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal.tagline);
  }
}

console.log(animal);

var noiseArray = [];

noiseArray.unshift('Meow');
noiseArray.push('Bark');
noiseArray.push('Moo');
noiseArray[4] = 'Oink';

animal.noises = noiseArray;

console.log(noiseArray);
console.log(noiseArray.length);
console.log(noiseArray[length - 1]);

var animals = [];

animals.push(animal);

var quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};

var quickers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};

var queckers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};

animals.push(quackers, quickers, queckers);

console.log(animals);
console.log(animals.length);
