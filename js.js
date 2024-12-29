// Плавный скроллинг к разделам
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отключаем стандартное поведение ссылки
        const targetId = this.getAttribute('href').substring(1); // Получаем ID секции
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    });
});

// Валидация формы
const form = document.querySelector('#contact form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Отключаем стандартное поведение отправки формы

    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!email || !validateEmail(email)) {
        alert('Пожалуйста, введите корректный email.');
        return;
    }

    if (!message) {
        alert('Пожалуйста, введите сообщение.');
        return;
    }

    alert('Спасибо за ваше сообщение!');
    form.reset(); // Очищаем форму после отправки
});

// Валидация email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Клик по кнопке "Contact Me" на главной странице
const contactButton = document.querySelector('#home button');
contactButton.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        window.scrollTo({
            top: contactSection.offsetTop,
            behavior: 'smooth'
        });
    }
});
