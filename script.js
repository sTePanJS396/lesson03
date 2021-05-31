let money; 
let income = 'Реклама в паблике ВК';
let period = 5;
let addExpenses;
let deposit;
let expenses1;
let expenses2;
let amount1;
let amount2;
let budgetMonth;
let mission = 500000;
let budgetDay = budgetMonth / 30;
// Объявим все переменные


// ----------------------Код третьего урока--------------------
money = prompt('Какой твой месячный доход?');
money = Number(money);
// Спрашиваем у пользователя месячных доход, и записываем его в переменную money

addExpenses = prompt('Перечисли возможные расходы за определенный период через запятую');
// Спрашиваем у пользователя траты за период, и записываем их в переменную addExpenses

deposit = confirm('У тебя есть депозит в банке? Нажми OK, если есть.');
// В переменной deposit спрашиваем у пользователя про депозит в банке

expenses1 = prompt('Назови обязательную статью расходов.');
amount1 = prompt('Во сколько тебе это обходиться?');
amount1 = Number(amount1);

expenses2 = prompt('Может, у тебя есть еще какая-либо статья расходов? Назови ее!');
amount2 = prompt('И сколько же ты на это тратишь?!');
amount2 = Number(amount2);
// Спрашиваем у пользователя про статьи расходов

budgetMonth = money - amount1 - amount2;
// Вычесляем бюджет за месяц

mission2 = mission / budgetMonth;
mission2 = Math.round(mission2);
// Вычесляем, за сколько будет достигнута цель накопить определенную сумму денег

budgetDay2 = budgetMonth / 30;
budgetDay2 = Math.floor(budgetDay2);
// Вычесляем дневной бюджет

if (budgetDay2 >= 1200) {
    console.log('У тебя высокий уровень дохода');
} else if (600 <= budgetDay2 <= 1200) {
    console.log('У тебя средний уровень дохода');
} else if (0 <= budgetDay2 <= 600) {
    console.log('К сожалению, уровень дохода у тебя низкий');
} else {
    console.log('Что-то пошло не так :(');
}
// Вычелсяем уровень дохода

// ---------------------------------------------------------------------

// --------------------------ВЫвод всех данных в консоль----------------------------
console.log('Тип переменной money: ', typeof money);
console.log('Тип переменной income: ', typeof income);
console.log('Тип переменной deposit: ', typeof deposit);
console.log('Длинна переменной addExpenses: ', addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log('После приведения строки addExpenses к нижнему регистру, она приняла такой вид: ', addExpenses.toLocaleLowerCase());
console.log('А массив из строки будет такой: ', addExpenses.toLocaleLowerCase().split(', '));
console.log('Бюджет на месяц: ', budgetMonth);
console.log('Желаемый дневной доход находится в переменной budgetDay: ', budgetDay2);
// -------------------------------------------------------------------------------------
