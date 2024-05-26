function findAge(person){
    if ("yearOfDeath" in person){
        return (person.yearOfDeath - person.yearOfBirth);
    }
    else{
        const date = new Date();
        return (date.getFullYear() - person.yearOfBirth);
    }
}

function ageSortFunction(a,b){
    return (findAge(b) - findAge(a));
}

const findTheOldest = function(people) {
    return people.sort(ageSortFunction)[0]
};

// Do not edit below this line
module.exports = findTheOldest;
