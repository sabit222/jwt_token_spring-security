document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Собираем данные формы
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Создаем объект с данными регистрации
    const registerData = {
        firstname,
        lastname,
        email,
        password
    };

    try {
        // Отправляем POST-запрос на сервер
        const response = await fetch('/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });

        // Обработка ответа
        if (response.ok) {
            const result = await response.json();

            // Сохраняем токен в localStorage (если нужно использовать его позже)
            localStorage.setItem('authToken', result.token);

            // Сообщение о успешной регистрации
            document.getElementById('message').textContent = 'Регистрация успешна! Перенаправляем на страницу входа...';

            // Перенаправляем пользователя на страницу входа после небольшой паузы (например, через 2 секунды)
            setTimeout(() => {
                window.location.href = 'login'; // Перенаправляем на страницу входа
            }, 2000);
        } else {
            document.getElementById('message').textContent = 'Ошибка регистрации.';
        }
    } catch (error) {
        // Обработка ошибок подключения
        console.error('Ошибка:', error);
        document.getElementById('message').textContent = 'Ошибка при подключении к серверу.';
    }
});
