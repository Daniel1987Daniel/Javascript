const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const startsWithS = animals.findIndex(i => {
  return i[0] === 's';
});
console.log(startsWithS); // index (i) 3
