document.addEventListener("DOMContentLoaded", () => {
    const coffee_list = [
        {
            "Name": "Cinnamon and Cacoa",
            "Compound": "Ароматное сочетание свежеобжаренных кофейных зерен, обернутых в теплоту корицы и глубину какао."
        },
        {
            "Name": "Drizzled with Caramel",
            "Compound": "Настоящая симфония для сладкоежек: насыщенный кофе, окутанный шелковыми лентами карамели, будто солнечные лучи согревают ваш день."
        },
        {
            "Name": "Bursting Blueberry",
            "Compound": "Чарующий вкус черники, словно летний сад, сливается с крепким кофе, создавая взрывной дуэт сладости и бодрости."
        },
        {
            "Name": "Dalgona Matcha",
            "Compound": "Матча, королева чаев, взбивается до воздушной пенки и венчает нежное молоко, соединяясь с горчинкой сахара в чашке волшебства."
        },
        {
            "Name": "Coco & Vanilla Cream",
            "Compound": "Кремовое сочетание кокосового молока и легкой ванильной сладости. Каждая капля — как тропический бриз в утреннем кофе."
        },
        {
            "Name": "Whipped сhocolate",
            "Compound": "Шоколадный вихрь нежности на фоне крепкого кофе. Взбитые сливки и растаявший шоколад делают каждую ложку мечтой гурмана."
        },
        {
            "Name": "Thai green",
            "Compound": "Экзотическое прикосновение тайской кухни: сладкий зеленый чай, лед и крепкий кофе в гармонии, как восточный закат в жаркий день."
        }
    ];

    const coffeeCard = document.querySelector(".coffee_card"); 
    const coffeeTitle = coffeeCard.querySelector("#coffee_card_title"); 
    const coffeeDescription = coffeeCard.querySelector("#coffee_card_description"); 
    const coffeePrice = coffeeCard.querySelector("#coffee_card_price"); 
    const backButton = document.querySelector("#back_to_menu"); 
    const coffeeBoxes = document.querySelectorAll(".coffee_box");
    const mainWindow = document.querySelector(".main_page");

    const getCompound = (name) => {
        const coffee = coffee_list.find(coffee => coffee.Name === name);
        return coffee ? coffee.Compound : "ОЙ, что то пошло не так.";
    };

    const openCoffeeCard = (name, price) => {
        coffeeTitle.textContent = name; 
        coffeeDescription.textContent = getCompound(name); 
        coffeePrice.textContent = price; 
        coffeeCard.classList.remove("hide");
        mainWindow.classList.add("hide");
    };

    coffeeBoxes.forEach(box => {
        const name = box.querySelector(".coffee_name").textContent; 
        const price = box.querySelector("#price_box p").textContent;

        box.addEventListener("click", () => openCoffeeCard(name, price)); 
    });

    backButton.addEventListener("click", () => {
        coffeeCard.classList.add("hide"); 
        mainWindow.classList.remove("hide");
    });
});
