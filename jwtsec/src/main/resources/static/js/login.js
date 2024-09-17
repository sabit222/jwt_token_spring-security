document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        email,
        password,
    };

    try {
        const response = await fetch('/api/v1/auth/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        if (response.ok) {
            const result = await response.json();
            const token = result.token; // Получаем токен

            // Сохраняем токен в localStorage
            localStorage.setItem('authToken', token);

            // Перенаправляем пользователя на домашнюю страницу
            window.location.href = '/v2/auth/home';
        } else {
            document.getElementById('message').textContent = 'Ошибка входа';
        }
    } catch (error) {
        console.error('Ошибка:', error);
        document.getElementById('message').textContent = 'Ошибка при подключении к серверу';
    }
});
