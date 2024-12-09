document.addEventListener("DOMContentLoaded", () => {
    const coffeeData = [
        {
            "name": "Cinnamon and Cacoa",
            "image": "images/Cinnamon.png",
            "price": "99 rub",
            "description": "Ароматное сочетание свежеобжаренных кофейных зерен, обернутых в теплоту корицы и глубину какао.",
            "coffee_type": "Cappuccino_1"
        },
        {
            "name": "Drizzled with Caramel",
            "image": "images/Drizzled.png",
            "price": "99 rub",
            "description": "Настоящая симфония для сладкоежек: насыщенный кофе, окутанный шелковыми лентами карамели.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Bursting Blueberry",
            "image": "images/Bursting.png",
            "price": "99 rub",
            "description": "Чарующий вкус черники, словно летний сад, сливается с крепким кофе, создавая взрывной дуэт сладости и бодрости.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Nutmeg Delight",
            "image": "images/Nutmeg_Delight.jpg",
            "price": "150 rub",
            "description": "Теплая пряность мускатного ореха окутывает насыщенный капучино, создавая уютную чашку для вашего утра.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Classic Cappuccino",
            "image": "images/Classic_Cappuccino.jpg",
            "price": "99 rub",
            "description": "Традиционный капучино с воздушной молочной пенкой и глубоким вкусом эспрессо, украшающий каждую встречу.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Honey Cinnamon",
            "image": "images/Honey_Cinnamon.jpg",
            "price": "125 rub",
            "description": "Сладкий аромат меда и пряные нотки корицы делают этот капучино идеальным спутником холодных дней.",
            "coffee_type": "Cappuccino"
        },
        {
            "name": "Dalgona Matcha",
            "image": "images/Dalgona.webp",
            "price": "150 rub",
            "description": "Матча, королева чаев, взбивается до воздушной пенки и венчает нежное молоко, соединяясь с горчинкой сахара в чашке волшебства.",
            "coffee_type": "Latte_1"
        },
        {
            "name": "Coco & Vanilla Cream",
            "image": "images/coco_and_vanilla.jpg",
            "price": "199 rub",
            "description": "Кремовое сочетание кокосового молока и легкой ванильной сладости. Каждая капля — как тропический бриз в утреннем кофе.",
            "coffee_type": "Latte"
        },
        {
            "name": "Whipped сhocolate",
            "image": "images/whipped_chocolate.jpg",
            "price": "99 rub",
            "description": "Шоколадный вихрь нежности на фоне крепкого кофе. Взбитые сливки и растаявший шоколад делают каждую ложку мечтой гурмана.",
            "coffee_type": "Latte"
        },
        {
            "name": "Thai green",
            "image": "images/Thai_green.webp",
            "price": "99 rub",
            "description": "Экзотическое прикосновение тайской кухни: сладкий зеленый чай, лед и крепкий кофе в гармонии, как восточный закат в жаркий день.",
            "coffee_type": "Latte"
        },
        {
            "name": "Vanilla Cloud Latte",
            "image": "images/Vanilla_Cloud_Latte.jpg",
            "price": "115 rub",
            "description": "Нежное облако ванили соединяется с молоком и эспрессо, создавая утонченный вкусный баланс.",
            "coffee_type": "Latte"
        },
        {
            "name": "Pumpkin Spice Latte",
            "image": "images/Pumpkin_Spice_Latte.jpg",
            "price": "99 rub",
            "description": "Классическое осеннее настроение в чашке: сливочная тыква, теплые специи и мягкий латте.",
            "coffee_type": "Latte"
        },
        {
            "name": "Hazelnut Bliss Latte",
            "image": "images/Hazelnut_Bliss_Latte.jpg",
            "price": "99 rub",
            "description": "Гармония молочного латте и мягких ореховых нот лесного ореха для идеального начала дня.",
            "coffee_type": "Latte"
        },
        {
            "name": "Classic Americano",
            "image": "images/Classic_Americano.jpg",
            "price": "99 rub",
            "description": "Простота и элегантность: насыщенный эспрессо, разбавленный горячей водой, для любителей чистого вкуса.",
            "coffee_type": "Americano_1"
        },
        {
            "name": "Caramel Americano",
            "image": "images/Caramel_Americano.jpg",
            "price": "125 rub",
            "description": "Классический американо, дополненный карамельной сладостью для тонкого вкусового наслаждения.",
            "coffee_type": "Americano"
        },
        {
            "name": "Citrus Burst Americano",
            "image": "images/Citrus_Burst_Americano.jpg",
            "price": "115 rub",
            "description": "Свежий цитрусовый акцент в традиционном американо придает бодрящую кислинку каждому глотку.",
            "coffee_type": "Americano"
        },
        {
            "name": "Classic Espresso",
            "image": "images/Classic_Espresso.jpg",
            "price": "99 rub",
            "description": "Насыщенный эспрессо с густой крема — настоящий выбор гурманов для мгновенной бодрости.",
            "coffee_type": "Espresso_1"
        },
        {
            "name": "Macchiato Espresso",
            "image": "images/Macchiato_Espresso.jpg",
            "price": "125 rub",
            "description": "Классический эспрессо с каплей молочной пенки, создающий легкий контраст вкусов.",
            "coffee_type": "Espresso"
        },
        {
            "name": "Chocolate Espresso",
            "image": "images/Chocolate_Espresso.jpg",
            "price": "99 rub",
            "description": "Эспрессо, дополненный растопленным шоколадом, для мгновения сладкого наслаждения.",
            "coffee_type": "Espresso"
        },
        {
            "name": "Flat White Classic",
            "image": "images/Flat_White.jpg",
            "price": "99 rub",
            "description": "Идеальный баланс эспрессо и молочной пены. Лаконичный и насыщенный.",
            "coffee_type": "Flat_White_1"
        },
        {
            "name": "Spicy Flat White",
            "image": "images/Spicy_Flat_White.jpg",
            "price": "115 rub",
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
    // const delete_button = document.querySelector("#delete_button");
    // const headerMain = document.querySelector(".header_main")

    let order = [];

    const saveCoffeePreferences = (coffeeName, preferences) => {
        const storedData = JSON.parse(localStorage.getItem("coffeePreferences")) || {};
        storedData[coffeeName] = preferences;
        localStorage.setItem("coffeePreferences", JSON.stringify(storedData));
    };

    const saveOrdersToLocalStorage = () => {
        localStorage.setItem("orders", JSON.stringify(order));
    };

    const loadOrdersFromLocalStorage = () => {
        const storedOrders = localStorage.getItem("orders");
        if (storedOrders) {
            order = JSON.parse(storedOrders);
        } else {
            order = [];
        }
    };
    loadOrdersFromLocalStorage();

    const loadCoffeePreferences = (coffeeName) => {
        const storedData = JSON.parse(localStorage.getItem("coffeePreferences")) || {};
        return storedData[coffeeName] || { cup: null, extras: [], milk: null };
    };

    const setButtonStates = (buttons, activeValue) => {
        buttons.forEach(button => {
            if (button.value === String(activeValue)) {
                button.classList.add("selected_button");
            } else {
                button.classList.remove("selected_button");
            }
        });
    };

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

            coffeeBox.querySelector("#price_box").addEventListener("click", (event) => {
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
            price: parsePrice(coffee.price),
            count,
        });
    }
    updateOrderStatus();
    updateOrderCount(); 
    };

    const openCoffeeCard = (coffee) => {
        coffeeTitle.textContent = coffee.name;
        coffeeDescription.textContent = coffee.description;
        coffeePrice.textContent = coffee.price;

        const coffeeImage = coffeeCard.querySelector(".coffee_card_image_case img");
        coffeeImage.src = coffee.image;
        coffeeImage.alt = coffee.name;

        const preferences = loadCoffeePreferences(coffee.name);

        // Установка состояния кнопок на основании сохраненных данных
        setButtonStates(coffeeCard.querySelectorAll("#cup_type"), preferences.cup);
        setButtonStates(coffeeCard.querySelectorAll("#extra_type"), preferences.extras);
        setButtonStates(coffeeCard.querySelectorAll("#milk_type"), preferences.milk);

        coffeeCard.classList.remove("hide");
        mainWindow.classList.add("hide");

        // Устанавливаем текущий кофе как активный
        coffeeCard.dataset.currentCoffee = JSON.stringify(coffee);
    };


    const addToOrder = () => {
        const coffee = coffeeCard.dataset.currentCoffee
            ? JSON.parse(coffeeCard.dataset.currentCoffee)
            : null;

        if (!coffee || !coffee.name || !coffee.price) {
            alert("Ошибка: некорректные данные кофе.");
            return;
        }

        const count = parseInt(coffeeCountInput.value, 10) || 1;
        if (count <= 0) {
            alert("Количество должно быть больше нуля.");
            return;
        }

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

        saveOrdersToLocalStorage(); 
        updateOrderStatus(); 
    };

    const parsePrice = (price) => parseInt(price.replace("rub", ""), 10);

    const updateOrderCount = () => {
        const orderCountElement = document.getElementById("order_count");
        const totalItems = order.reduce((sum, item) => sum + item.count, 0);
        orderCountElement.textContent = totalItems;
    };

    const updateOrderStatus = () => {
        orderStatusList.innerHTML = ""; 
        let total = 0;

        order.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.className = "order_item";
            itemElement.innerHTML = `
            <div>
                <img src="${item.image || ''}" alt="${item.name}">
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
                const index = parseInt(event.target.dataset.index, 10);
                if (!isNaN(index) && order[index]) {
                    order.splice(index, 1); // Удаляем элемент из массива
                    saveOrdersToLocalStorage();
                    updateOrderStatus();
                    updateOrderCount(); // Обновляем счетчик
                }
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

        updateOrderCount(); 
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

    buttonSections.forEach(section => {
        section.addEventListener("click", (event) => {
            const target = event.target;
            if (target.tagName !== "BUTTON") return;

            const buttonType = target.getAttribute("data-type"); // Используем data-type для определения типа кнопки
            const coffee = coffeeCard.dataset.currentCoffee
                ? JSON.parse(coffeeCard.dataset.currentCoffee)
                : null;

            if (!coffee || !coffee.name) return;

            if (!coffee.settings) coffee.settings = {};
            coffee.settings[buttonType] = target.value; // Сохраняем выбранное значение

            // Обновляем текущий кофе в dataset
            coffeeCard.dataset.currentCoffee = JSON.stringify(coffee);

            saveCoffeePreferences(coffee.name, coffee.settings);

            // Обновляем стиль выделения кнопок
            [...section.children].forEach(btn => btn.classList.remove("selected_button"));
            target.classList.add("selected_button");
        });
    });

    generateCoffeeCards();
    updateOrderStatus();
    loadOrdersFromLocalStorage();
});
