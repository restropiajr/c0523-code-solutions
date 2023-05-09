// The Student Object
const student = {
  firstName: 'Roland',
  lastName: 'Estropia Jr.',
  age: 27,
};

const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Mechanical Engineer';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

// The Vehicle Object
const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2012,
};

vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

// The Pet Object
const pet = {
  name: 'Yuna',
  type: 'dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
