Завдання 1
Умова
Дано два рядки:
const firstRow = ‘Slow and steady wins the race’;
const secondRow = &#39;You can say that again’;
У кожній з них необхідно порахувати кількість літер &quot;a&quot; і вивести рядок, в
якому таких літер більше.
function getRow(firstRow, secondRow) {
}
console.log(getRow(firstRow, secondRow)); //&#39;You can say that again’
Поради щодо виконання
 використовуйте функцію для підрахунку кількості літер у рядку;
 використовуйте цикл для перебору букв;
 щоб перебрати весь рядок, скористайтеся властивістю .length у рядку;
 щоб отримати символ рядка з певним номером, потрібно використати
метод .charAt();
Завдання під *
 зробити програму інтерактивною, використовуючи команди prompt()і
alert().
 зробити так щоб можна було порахувати будь-яку літеру, яку введе
користувач, (метод prompt())

Завдання 2
Є номер телефону з 13 символів: +380664567890
Правила форматування такі:
 після +38 має бути пропуск;
 потім йде кругла дужка, що відкривається;
 потім три цифри (код оператору зв’язку);
 потім кругла дужка, що закривається;
 знову пробіл;
 три цифри;
 мінус;
 чотири цифри.
У нас має бути функція, яка приймає телефон рядком і повертає назад
відформатований телефон:
function formattedPhone(phone) {
}
console.log(formattedPhone(&#39;+80664567890&#39;)); // +8 (066) 456-78-90
Завдання під *
 зробити програму інтерактивною, використовуючи команди prompt() і
alert()
 Напишіть функцію так, щоб вона могла приймати телефон у форматі
80971234567, а повертати+38 (097) 123-45-67
 Напиши функцію, яка може приймати телефон у форматі 0671234567 а
повертало у форматі +38 (067) 123-45-67
 Повертайте повідомлення, що формат функції неправильний, якщо
передається щось несхоже на +80971234567 або 80631234567 або
80971234567 або 0631234567
