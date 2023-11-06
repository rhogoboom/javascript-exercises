const findTheOldest = function(people) {
    let sortedPeople = people.sort((a,b) => {
        const thisYear = new Date().getFullYear();
        let yearOfDeath1 = 'yearOfDeath' in a ? a.yearOfDeath : thisYear;
        let yearOfDeath2 = 'yearOfDeath' in b ? b.yearOfDeath : thisYear;
        if (yearOfDeath1 - a.yearOfBirth > yearOfDeath2 - b.yearOfBirth) {
            return -1;
        } else {
            return 1;
        }
    });
    return sortedPeople[0];

};

// Do not edit below this line
module.exports = findTheOldest;
