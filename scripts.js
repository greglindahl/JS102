//Use this file to implement Part One of your project

var animal = {
  username: 'yourmom',
  tagline: ['I love money!'],
  noises: []
};

animal.noises.push('woof', 'bark', 'yep');

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
