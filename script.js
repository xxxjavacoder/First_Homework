var money = prompt("Ваш бюджет на месяц?", 0),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

var appData = 
{
    budget: money,
    timeData: time
    
};


var question_STR_1 = prompt("Введите обязательную статью расходов в этом месяце");
var question_INT_1 = prompt("Во сколько обойдется?",0);
var question_STR_2 = prompt("Введите обязательную статью расходов в этом месяце");
var question_INT_2 = prompt("Во сколько обойдется?",0);

var expenses =
{
    question_STR_1 : question_STR_2,
    question_INT_1 : question_INT_2    
};

var optionalExpenses =
{

};

var income = [],
    savings = false;

alert((money-question_INT_1-question_INT_2) / 30);

