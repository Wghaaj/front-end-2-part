function smoking () {
    let name = prompt ("Будь ласка, введіть ваше ім'я: ")
    while (!name) {
        let name = prompt ("Будь ласка, введіть ваше ім'я: ")
    }

    let age = prompt("Скільки вам років?") 
    while (isNaN(age) || age === "" || age <= 0) {
        let age = prompt("Будь ласка, введіть коректний вік: ") 
    }

    let smoking = confirm("Ви курите?")

    if (age < 18 && !smoking) {
        alert("Молодець " + name + "! Гарний приклад для своїх однолітків")
    } else if (age < 18 && smoking) {
        alert(name + ", а твої батьки знають про це?")
    } else if(age >= 18 && smoking) {
        alert("Що ж, " + name + "це ваш вибір. Але я не радила би курити")
    } else {
        alert("Супер, " + name + "Мабуть ще й спортом займаєтесь!")
    }
}

function no() {
    alert("Добре, це ваш вибір, дякую за приділений час")
}