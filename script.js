var money = +prompt("Ваш бюджет на месяц?", 0),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = 
{
    budget: money,
    timeData: time,
    optionalExpenses:{},
    expenses:{},
    income : [],
    savings: false
    
};


for (let i = 0; i < 2; i++){
    let question_STR_1 = prompt("Введите обязательную статью расходов в этом месяце"),
        question_INT_1 = prompt("Во сколько обойдется?",0);

    if(typeof(question_STR_1) === 'string' && typeof(question_STR_1) != null && typeof(question_INT_1) != null && question_INT_1 != '' && question_STR_1 != '' && question_STR_1.length < 20){
        console.log("Well done");
        appData.expenses[question_STR_1] = question_INT_1;
    
    }
}

appData.MoneyPerDay = appData.budget / 30;

if(appData.MoneyPerDay <= 100){
    console.log("Minimal cash per day!");
} else if(appData.MoneyPerDay >100 && appData.MoneyPerDay <= 1000){
    console.log("Normal cash per day!");
}else if(appData.MoneyPerDay > 1000){
    console.log("Maximum cash per day!");
}

alert("Бюджет на день: " + appData.MoneyPerDay);

