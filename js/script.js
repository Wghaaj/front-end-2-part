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
console.log("the oldest logged user:", oldestLogged);


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

const totalAge = generalUsers.reduce((acc, user) => acc + user.age, 0)
const middleAge = Math.floor(totalAge / generalUsers.length)

console.log("middle age:", middleAge);

let ageDifference = generalUsers.forEach(user => {
    user.ageDifference = Math.abs(user.age - middleAge)
});

const sorted = generalUsers.sort((a,b) => a.ageDifference - b.ageDifference)

const closest = sorted.slice(0,16)

const wrapper = document.querySelector(".box-wrapper")

closest.forEach(item => {
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card")

    cardContainer.innerHTML = `<img src ="${item.image}" alt = "${item.username}">`

    const cardInfo = document.createElement("div")
    cardInfo.classList.add("info")
    cardInfo.innerHTML = `<p>Name : ${item.firstName} ${item.lastName}</p>
    <p>Age : ${item.age}</p>
    <p>Email : <a href = "mailto: ${item.email}" >${item.email}</a></p>
    <p>City : ${item.address.city} </p>
    <p>Phone :<a href = "tel:${item.phone}">${item.phone}</a> </p>`

    cardContainer.append(cardInfo)
    wrapper.append(cardContainer)

})


