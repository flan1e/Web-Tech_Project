document.addEventListener("DOMContentLoaded", () => {
    const coffeeData = [
        {
            "name": "Cinnamon and Cacoa",
            "image": "images/Cinnamon.png",
            "price": "99rub",
            "description": "Ароматное сочетание свежеобжаренных кофейных зерен, обернутых в теплоту корицы и глубину какао.",
            "coffee_type": "Cappuccino_1"
        },
        {
            "name": "Drizzled with Caramel",
            "image": "images/Drizzled.png",
            "price": "99rub",
            "description": "Настоящая симфония для сладкоежек: насыщенный кофе, окутанный шелковыми лентами карамели.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Bursting Blueberry",
            "image": "images/Bursting.png",
            "price": "99rub",
            "description": "Чарующий вкус черники, словно летний сад, сливается с крепким кофе, создавая взрывной дуэт сладости и бодрости.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Nutmeg Delight",
            "image": "images/Nutmeg_Delight.jpg",
            "price": "150rub",
            "description": "Теплая пряность мускатного ореха окутывает насыщенный капучино, создавая уютную чашку для вашего утра.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Classic Cappuccino",
            "image": "images/Classic_Cappuccino.jpg",
            "price": "99rub",
            "description": "Традиционный капучино с воздушной молочной пенкой и глубоким вкусом эспрессо, украшающий каждую встречу.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Honey Cinnamon",
            "image": "images/Honey_Cinnamon.jpg",
            "price": "125rub",
            "description": "Сладкий аромат меда и пряные нотки корицы делают этот капучино идеальным спутником холодных дней.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Dalgona Matcha",
            "image": "images/Dalgona.webp",
            "price": "150rub",
            "description": "Матча, королева чаев, взбивается до воздушной пенки и венчает нежное молоко, соединяясь с горчинкой сахара в чашке волшебства.",
            "coffee_type": "Latte_1"
        },
        {
            "name": "Coco & Vanilla Cream",
            "image": "images/coco_and_vanilla.jpg",
            "price": "199rub",
            "description": "Кремовое сочетание кокосового молока и легкой ванильной сладости. Каждая капля — как тропический бриз в утреннем кофе.",
            "coffee_type": "Latte"
        },
        {
            "name": "Whipped сhocolate",
            "image": "images/whipped_chocolate.jpg",
            "price": "99rub",
            "description": "Шоколадный вихрь нежности на фоне крепкого кофе. Взбитые сливки и растаявший шоколад делают каждую ложку мечтой гурмана.",
            "coffee_type": "Latte"
        },
        {
            "name": "Thai green",
            "image": "images/Thai_green.webp",
            "price": "99rub",
            "description": "Экзотическое прикосновение тайской кухни: сладкий зеленый чай, лед и крепкий кофе в гармонии, как восточный закат в жаркий день.",
            "coffee_type": "Latte"
        },
        {
            "name": "Vanilla Cloud Latte",
            "image": "images/Vanilla_Cloud_Latte.jpg",
            "price": "115rub",
            "description": "Нежное облако ванили соединяется с молоком и эспрессо, создавая утонченный вкусный баланс.",
            "coffee_type": "Latte"
        },
        {
            "name": "Pumpkin Spice Latte",
            "image": "images/Pumpkin_Spice_Latte.jpg",
            "price": "99rub",
            "description": "Классическое осеннее настроение в чашке: сливочная тыква, теплые специи и мягкий латте.",
            "coffee_type": "Latte"
        },
        {
            "name": "Hazelnut Bliss Latte",
            "image": "images/Hazelnut_Bliss_Latte.jpg",
            "price": "99rub",
            "description": "Гармония молочного латте и мягких ореховых нот лесного ореха для идеального начала дня.",
            "coffee_type": "Latte"
        },
        {
            "name": "Classic Americano",
            "image": "images/Classic_Americano.jpg",
            "price": "99rub",
            "description": "Простота и элегантность: насыщенный эспрессо, разбавленный горячей водой, для любителей чистого вкуса.",
            "coffee_type": "Americano_1"
        },
        {
            "name": "Caramel Americano",
            "image": "images/Caramel_Americano.jpg",
            "price": "125rub",
            "description": "Классический американо, дополненный карамельной сладостью для тонкого вкусового наслаждения.",
            "coffee_type": "Americano"
        },
        {
            "name": "Citrus Burst Americano",
            "image": "images/Citrus_Burst_Americano.jpg",
            "price": "115rub",
            "description": "Свежий цитрусовый акцент в традиционном американо придает бодрящую кислинку каждому глотку.",
            "coffee_type": "Americano"
        },
        {
            "name": "Classic Espresso",
            "image": "images/Classic_Espresso.jpg",
            "price": "99rub",
            "description": "Насыщенный эспрессо с густой крема — настоящий выбор гурманов для мгновенной бодрости.",
            "coffee_type": "Espresso_1"
        },
        {
            "name": "Macchiato Espresso",
            "image": "images/Macchiato_Espresso.jpg",
            "price": "125rub",
            "description": "Классический эспрессо с каплей молочной пенки, создающий легкий контраст вкусов.",
            "coffee_type": "Espresso"
        },
        {
            "name": "Chocolate Espresso",
            "image": "images/Chocolate_Espresso.jpg",
            "price": "99rub",
            "description": "Эспрессо, дополненный растопленным шоколадом, для мгновения сладкого наслаждения.",
            "coffee_type": "Espresso"
        },
        {
            "name": "Flat White Classic",
            "image": "images/Flat_White.jpg",
            "price": "99rub",
            "description": "Идеальный баланс эспрессо и молочной пены. Лаконичный и насыщенный.",
            "coffee_type": "Flat_White_1"
        },
        {
            "name": "Spicy Flat White",
            "image": "images/Spicy_Flat_White.jpg",
            "price": "115rub",
            "description": "Пряный вкус специй и сливочная текстура — идеальный Flat White для холодных вечеров.",
            "coffee_type": "Flat_White"
        }
    ];

    const coffeeListContainer = document.querySelector(".coffee_list");
    const coffeeCard = document.querySelector(".coffee_card");
    const coffeeTitle = coffeeCard.querySelector("#coffee_card_title");
    const coffeeDescription = coffeeCard.querySelector("#coffee_card_description");
    const coffeePrice = coffeeCard.querySelector("#coffee_card_price");
    const backButton = document.querySelector("#back_to_menu");
    const mainWindow = document.querySelector(".main_page");
    const orderStatus = document.querySelector(".order_status");
    const orderListButton = document.querySelector("#order_list");
    const orderStatusList = document.querySelector(".order_status_list");
    const orderStatusTotal = document.querySelector(".order_status_total");
    const hideOrderStatusButton = document.querySelector("#order_status_hide_btn");
    const placeOrderButton = document.querySelector("#place_order_button");
    const coffeeCountInput = document.querySelector("#coffee_card_main_count");
    const searchInput = document.querySelector("#search");
    const buttonSections = document.querySelectorAll("#coffee_card_buttons_section");
    const delete_button = document.querySelector("#delete_button");

    let order = [];

    const generateCoffeeCards = () => {
        coffeeListContainer.innerHTML = ""; 
        coffeeData.forEach(coffee => {
            const coffeeBox = document.createElement("div");
            coffeeBox.className = "coffee_box";
            coffeeBox.id = coffee.coffee_type;

            coffeeBox.innerHTML = `
                <img src="${coffee.image}" alt="${coffee.name}">
                <p class="coffee_name">${coffee.name}</p>
                <div id="price_box">
                    <p>${coffee.price}</p>
                    <button class="add_button">+</button>
                </div>
            `;

            coffeeBox.querySelector(".add_button").addEventListener("click", (event) => {
                event.stopPropagation(); // Останавливаем всплытие события, чтобы не открывать карточку
                addToOrderFromList(coffee);
            });

            coffeeBox.addEventListener("click", () => openCoffeeCard(coffee));
            coffeeListContainer.appendChild(coffeeBox);
        });
    };

    const filterCoffeeList = (searchText) => {
        const filteredData = coffeeData.filter(coffee =>
            coffee.name.toLowerCase().includes(searchText.toLowerCase())
        );

        coffeeListContainer.innerHTML = ""; 
        filteredData.forEach(coffee => {
            const coffeeBox = document.createElement("div");
            coffeeBox.className = "coffee_box";

            coffeeBox.innerHTML = `
                <img src="${coffee.image}" alt="${coffee.name}">
                <p class="coffee_name">${coffee.name}</p>
                <div id="price_box">
                    <p>${coffee.price}</p>
                    <button class="add_button">+</button>
                </div>
            `;

            coffeeBox.querySelector(".add_button").addEventListener("click", (event) => {
                event.stopPropagation();
                addToOrderFromList(coffee);
            });

            coffeeBox.addEventListener("click", () => openCoffeeCard(coffee));
            coffeeListContainer.appendChild(coffeeBox);
        });
    };

    const addToOrderFromList = (coffee) => {
        const count = 1;
        const existingOrder = order.find(item => item.name === coffee.name);
        if (existingOrder) {
            existingOrder.count += count;
        } else {
            order.push({
                ...coffee,
                price: parsePrice(coffee.price), // Удаляем "rub" из цены
                count,
            });
        }
        // alert(`${coffee.name} добавлен в заказ (${count} шт).`);
        updateOrderStatus();
    };

    const openCoffeeCard = (coffee) => {
        coffeeTitle.textContent = coffee.name;
        coffeeDescription.textContent = coffee.description;
        coffeePrice.textContent = coffee.price;
    
        const coffeeImage = coffeeCard.querySelector(".coffee_card_image_case img");
        coffeeImage.src = coffee.image;
        coffeeImage.alt = coffee.name;
    
        coffeeCard.classList.remove("hide");
        mainWindow.classList.add("hide");
    
        // Устанавливаем текущий кофе как активный
        coffeeCard.dataset.currentCoffee = JSON.stringify(coffee);
    };

    const addToOrder = () => {
        const coffee = coffeeCard.dataset.currentCoffee
            ? JSON.parse(coffeeCard.dataset.currentCoffee)
            : null;

        if (!coffee) {
            alert("test");
            return;
        }

        const count = parseInt(coffeeCountInput.value) || 1;

        const existingOrder = order.find(item => item.name === coffee.name);
        if (existingOrder) {
            existingOrder.count += count;
        } else {
            order.push({
                ...coffee,
                price: parsePrice(coffee.price), // Удаляем "rub" из цены
                count,
            });
        }

        // alert(`${coffee.name} добавлен в заказ (${count} шт).`);
        updateOrderStatus();
    };


    const parsePrice = (price) => parseInt(price.replace("rub", ""), 10);

    const updateOrderStatus = () => {
        orderStatusList.innerHTML = ""; // Очищаем список перед обновлением
        let total = 0;
    
        order.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.className = "order_item";
            itemElement.innerHTML = `
                <div>
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div id="order_item_name_field">
                    <p>${item.name}</p>
                </div>
                <div>
                    <p id="order_item_count">x ${item.count}</p>
                </div>
                <div id="order_item_price">
                    <p>${item.count * item.price} руб</p>
                </div>
                <div>
                    <button class="delete_button" data-index="${index}">x</button>
                </div>
            `;
            orderStatusList.appendChild(itemElement);
            total += item.count * item.price;
        });
    
        const deleteButtons = orderStatusList.querySelectorAll(".delete_button");
        deleteButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.dataset.index; // Получаем индекс элемента
                order.splice(index, 1); // Удаляем элемент из массива
                updateOrderStatus(); 
            });
        });
    
        const discount = Math.floor(total * 0.1); // инт
        const finalTotal = total - discount;
    
        orderStatusTotal.innerHTML = `
            <div class="order_status_price_box">
                <p>Сумма:</p> 
                <p id="price_parameter">${total} руб</p>
            </div>
            <div class="order_status_price_box">
                <p>Скидка 10%:</p> 
                <p id="price_parameter">${discount} руб</p>
            </div>
            <div class="order_status_price_box" id="order_status_price_box_total">
                <p>Итого:</p> 
                <p id="price_parameter">${finalTotal} руб</p>
            </div>
        `;
    };
    
    

    orderListButton.addEventListener("click", () => { //на main
        orderStatus.classList.remove("hide");
    });

    hideOrderStatusButton.addEventListener("click", () => { //внутри order_status
        orderStatus.classList.add("hide");
    });

    placeOrderButton.addEventListener("click", addToOrder); // в карточке

    backButton.addEventListener("click", () => { // в карточке
        coffeeCard.classList.add("hide");
        mainWindow.classList.remove("hide");
    });

    searchInput.addEventListener("input", (event) => {
        const searchText = event.target.value;
        filterCoffeeList(searchText);
    });

    buttonSections.forEach(section => {
        section.addEventListener("click", (event) => {
            const target = event.target;

            // Проверяем, является ли нажатый элемент кнопкой
            if (target.tagName === "BUTTON") {
                const buttons = section.querySelectorAll("button");
                buttons.forEach(button => button.classList.remove("selected_button"));
                //только нажатой
                target.classList.add("selected_button");
            }
        });
    });

    generateCoffeeCards();
});
