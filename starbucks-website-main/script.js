function imgSlider(image) {
    document.querySelector('.starbucks').src = image;
}

function changeColorCircle(color) {
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;
}
function changeColor(color) {
    const circle = document.querySelector('.circulo');
    circle.style.backgroundColor = color;
    circle.classList.add('visible'); // Adiciona a classe para tornar o círculo visível

    // Remover a classe após 5 segundos
    setTimeout(function() {
        circle.classList.remove('visible');
    }, 5000); // Remove a classe após 5 segundos (5000 milissegundos)
}


function changeColorStarbucks(color) {
    const span = document.querySelector('span');
    span.style.color = color;
}

function changeColorButton(color) {
    const button = document.querySelector('.content .textBox a');
    button.style.backgroundColor = color;
}

function handleButtonClick(color) {
    // Mudar a cor do círculo
    changeColorCircle(color);

    // Tornar o círculo visível
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;
    circle.classList.add('visible');

    // Remover a visibilidade do círculo após 5 segundos
    setTimeout(() => {
        circle.classList.remove('visible');
    }, 5000);
}

function teste(){

    window.alert("testeeeeeeee");
}
let total = 0; // Inicializa o total fora da função para que seja acessível globalmente
let cartItems = []; // Inicializa o array de itens do carrinho

function showAddedToCartMessage(productName) {
    // Seleciona o elemento da mensagem
    const messageElement = document.querySelector('.added-to-cart-message');

    // Define o texto da mensagem
    messageElement.textContent = `${productName} foi adicionado ao carrinho!`;

    // Remove a classe 'hidden' para tornar a mensagem visível
    messageElement.classList.remove('hidden');
    showAddedToCartMessage(productName);
    // Oculta a mensagem após alguns segundos
    setTimeout(function() {
        messageElement.classList.add('hidden');
    }, 3000); // 3000 milissegundos = 3 segundos
}

function addToCart(productName, price) {
    // Cria um objeto representando o item do carrinho
    const newItem = { productName, price };
    
    // Adiciona o item ao array de itens do carrinho
    cartItems.push(newItem);

    // Atualiza o preço total
    total += price;
    document.getElementById('total-price').textContent = total.toFixed(2);

    // Cria o HTML para exibir o item no carrinho
    const itemHTML = `<p>${productName} - R$ ${price.toFixed(2)}</p>`;
    
    // Seleciona o elemento onde os itens do carrinho serão exibidos
    const cartItemsContainer = document.querySelector('.cart-items');

    // Adiciona o HTML do novo item ao container de itens do carrinho
    cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
}

function generateWhatsAppMessage() {
    let message = "Olá! Estou fazendo um pedido:\n\n";

    // Adiciona cada item do carrinho à mensagem
    cartItems.forEach(item => {
        message += `- ${item.productName}: R$ ${item.price.toFixed(2)}\n`;
    });

    // Adiciona o total à mensagem
    message += `\nTotal: R$ ${total.toFixed(2)}`;

    // Retorna a mensagem gerada
    return encodeURIComponent(message);
}

function sendWhatsAppMessage() {
    // Número de telefone para onde enviar a mensagem
    const phoneNumber = "";

    // Mensagem gerada com base nos itens do carrinho e no total
    const message = generateWhatsAppMessage();

    // URL completa para abrir o WhatsApp com a mensagem pré-preenchida
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Abrir o WhatsApp em uma nova janela
    window.open(whatsappURL);
}



function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');

    // Focar na modal quando ela aparecer
    modal.focus();
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
}

