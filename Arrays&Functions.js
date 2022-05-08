const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr = newArr.pop();  // ['arrays', 'can', 'be'];
};

removeElement(concept);
console.log(concept);
