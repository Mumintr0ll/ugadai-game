// Массив слов
let words = ["КАПУСТА", "МОЛОКО", "КОМПЬЮТЕР", "ПРОГРАММА", "ШКОЛА"];

// Случайный выбор слова
let word = words[Math.floor(Math.random() * words.length)];

// Массив с пустыми местами
let answerArray = [];

// Количество оставшихся букв
let remainingLetters = word.length;

// Начальное количество очков
let score = 10;

// Заполняем массив "_"
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Отображаем слово на странице
document.getElementById("word").textContent = answerArray.join(" ");

// Функция проверки буквы
function checkLetter() {

    let input = document.getElementById("letter");
    let guess = input.value.toUpperCase();
    input.value = "";

    if (guess.length !== 1) {
        document.getElementById("message").textContent = "Введите одну букву!";
        return;
    }

    let correct = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess && answerArray[i] === "_") {
            answerArray[i] = guess;
            remainingLetters--;
            correct = true;
        }
    }

    if (!correct) {
        score--;
        document.getElementById("message").textContent = "Такой буквы нет!";
    } else {
        document.getElementById("message").textContent = "Есть такая буква!";
    }

    // Обновляем слово и очки
    document.getElementById("word").textContent = answerArray.join(" ");
    document.getElementById("score").textContent = score;

    // Проверка победы
    if (remainingLetters === 0) {
        document.getElementById("message").textContent = "Поздравляем! Вы выиграли! Слово: " + word;
    }

    // Проверка поражения
    if (score === 0) {
        document.getElementById("message").textContent = "Вы проиграли! Слово было: " + word;
    }
}