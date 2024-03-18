function smoking () {
    let name = prompt ("Будь ласка, введіть ваше ім'я: ")
    while (!name || name ==="") {
        name = prompt ("Будь ласка, введіть ваше ім'я: ")
    }

    let age = prompt("Скільки вам років?") 
    if (isNaN(age) || age === "" || age <= 0) {
        let age = prompt("Будь ласка, введіть коректний вік: ") 
    }

    let smoking = confirm("Ви курите?")

    if (age < 18) {
        alert( age <18 && smoking ? name + ", а твої батьки знають про це?" : "Молодець " + name + "! Гарний приклад для своїх однолітків" )
    } else {
        alert( age >=18 && smoking ? "Що ж, " + name + " це ваш вибір. Але я не радила би курити" : "Супер, " + name + "! Мабуть ще й спортом займаєтесь!" )
    }
}

function no() {
    alert("Добре, це ваш вибір, дякую за приділений час")
}

