// loged_users

const latestLogged = logedUsers.reduce((acc, curr) => {
    if (!acc || new Date(curr.last_login) > new Date(acc.last_login)) {
        return curr;
    } else {
        return acc;
    }
});

const oldestLogged = logedUsers.reduce((acc, curr) => {
    if (!acc || new Date(curr.last_login) < new Date(acc.last_login)) {
        return curr;
    } else {
        return acc;
    }
});

console.log("the latest logged user:",latestLogged);
console.log("the oldest logged user", oldestLogged);

//general_users

const youngest = generalUsers.reduce((acc, curr) => {
    if (!acc || curr.age < acc.age) {
        return curr;
    } else {
        return acc
    }
});

const oldest = generalUsers.reduce((acc, curr) => {
    if (!acc || curr.age > acc.age) {
        return curr;
    } else {
        return acc
    }
});

// console.log("the youngest user: ", youngest.age);
// console.log("the oldest user: ", oldest.age);

const middleAge  = Math.floor((youngest.age + oldest.age) / 2 )

// console.log(middleAge);

let ageDifference = generalUsers.forEach(user => {
    user.ageDifference = Math.abs(user.age - middleAge)
});

console.log("difference:", ageDifference);

const sorted = generalUsers.sort((a,b) => a.ageDifference - b.ageDifference)

console.log("sorted:", sorted);

const closest = sorted.slice(0,16)

console.log("closest:", closest);




