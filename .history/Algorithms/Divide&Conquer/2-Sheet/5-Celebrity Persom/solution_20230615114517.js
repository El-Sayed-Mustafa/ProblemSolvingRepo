/*  
    !note that the code assumes the existence of a knows function
    to check if one person knows another.
    You'll need to define the knows function
    according to the specific requirements of your problem. 
    
*/

function findAdel(persons) {
    const firstPerson = persons[0]; // Select the first person as X
    const remainingPersons = persons.slice(1); // Remove the first person from the persons list
    return getAdel(remainingPersons, 0, firstPerson);
}

function getAdel(persons, currentIndex, currentPerson) {
    if (currentIndex >= persons.length) {
        // No more persons to check against, currentPerson is Adel
        return currentPerson;
    }

    const nextPerson = persons[currentIndex];

    if (currentPerson.knows(nextPerson)) {
        // currentPerson is not Adel, continue with nextPerson as currentPerson
        return getAdel(persons, currentIndex + 1, nextPerson);
    } else {
        // nextPerson is not Adel, skip it and continue with currentPerson
        return getAdel(persons, currentIndex + 1, currentPerson);
    }
}
