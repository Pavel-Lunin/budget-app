'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    //далее пишем проверку
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        //прописываем метод (сбора информации)
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt("Во сколько обойдется?", "");

                //Оператор if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода.

                if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

                    appData.expenses[a] = b;
                } else {
                    i--;
                }

            }
        },

        //toFixed - округляем результат
        detectDayBudget: function () {
            // Расчет дневного бюджета
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
        },
        detectLevel: function () {
            if (appData.moneyPerDay < 100) {
                console.log("Это минимальный уровень достатка!");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Это средний уровень достатка!");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Это высокий уровень достатка!");
            } else {
                console.log("Ошибочка...!");
            }
        },
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");

                appData.monthIncome = save / 100 / 12 * percent;
                alert("доход в месяц с вашего депозита: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function () {
            // Функция для определения необязательных расходов
            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        },
        chooseIncome: function () {
            let items = prompt('Что принесёт дополнительный доход? (перечислите через запятую)', '');

            if (typeof (items) != "string" || items == "" || typeof (items) == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");

            } else {
                //переносим данные в массив income: [] - для этого необходимо превратить строку в наш массив. Используем команду split
                appData.income = items.split(", ");
                //Так как значение свойства income это массив данных, то мы смогли использовать команду push(), чтобы добавить новый элемент в конец массива
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();

                appData.income.forEach(function (itemmassive, i) {
                    alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
                });
            }
        };
        //где key - очередное имя свойства объекта для каждой итерации
        for (let key in appData) {
            console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
        }


        // Используем цикл WHILE

        // let i = 0;
        // while (i < 2) {
        //     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        //         b = prompt ("Во сколько обойдется?", "");

        //     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        //         console.log ("done");

        //         appData.expenses[a] = b;
        //     } else {
        //          console.log ("bad result");
        //          i--;
        //     }

        //     i++;
        // }



        // Используем цикл DO...WHILE

        // let i = 0;
        // do {
        //     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        //         b = prompt ("Во сколько обойдется?", "");

        //     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        //         console.log ("done");

        //         appData.expenses[a] = b;
        //     } else {
        //          console.log ("bad result");
        //          i--;
        //     }

        //     i++;
        // }
        // while(i < 2);