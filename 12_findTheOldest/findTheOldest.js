const findTheOldest = function (persons) {
  let personsCopy = [...persons];
  personsCopy.sort((personA, personB) => {
    if (personA.yearOfDeath === undefined) {
      personA.yearOfDeath = new Date().getFullYear();
    } else if (personB.yearOfDeath === undefined) {
      personB.yearOfDeath = new Date().getFullYear();
    }

    let ageOfPersonA = personA.yearOfDeath - personA.yearOfBirth;
    let ageOfPersonB = personB.yearOfDeath - personB.yearOfBirth;
    return ageOfPersonA < ageOfPersonB ? 1 : -1;
  });
  return personsCopy[0];
};

// Do not edit below this line
module.exports = findTheOldest;
