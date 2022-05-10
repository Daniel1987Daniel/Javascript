const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join('')); // HELLOWORLD

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(num => num/100);
console.log(smallNumbers) // 1, 2, 3, 4, 5
