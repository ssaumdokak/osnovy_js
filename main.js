// Завдання 1
function countLetters(row, letter) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow) {
    let letter = prompt('Яку літеру підраховувати?', 'a');
    const firstCount = countLetters(firstRow, letter);
    const secondCount = countLetters(secondRow, letter);

    if (firstCount > secondCount) {
        return firstRow;
    } else {
        return secondRow;
    }
}

function task1() {
    const firstRow = 'Slow and steady wins the race';
    const secondRow = 'You can say that again';
    alert(getRow(firstRow, secondRow));
}

// Завдання 2
function formattedPhone(phone) {
    let cleanPhone = phone.replace(/\D/g, ''); // очищуємо від нецифрових символів
    if (cleanPhone.length === 12 && cleanPhone.startsWith('380')) {
        return `+${cleanPhone.substring(0, 2)} (${cleanPhone.substring(2, 5)}) ${cleanPhone.substring(5, 8)}-${cleanPhone.substring(8, 10)}-${cleanPhone.substring(10, 12)}`;
    } else if (cleanPhone.length === 11 && cleanPhone.startsWith('8')) {
        return `+38 (${cleanPhone.substring(1, 4)}) ${cleanPhone.substring(4, 7)}-${cleanPhone.substring(7, 9)}-${cleanPhone.substring(9, 11)}`;
    } else if (cleanPhone.length === 10) {
        return `+38 (${cleanPhone.substring(0, 3)}) ${cleanPhone.substring(3, 6)}-${cleanPhone.substring(6, 8)}-${cleanPhone.substring(8, 10)}`;
    } else {
        return 'Неправильний формат телефону';
    }
}

function task2() {
    let phone = prompt('Введіть номер телефону:', '+80664567890');
    alert(formattedPhone(phone));
}
