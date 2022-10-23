const WORK_HOURS_PER_DAY = 8;
function dayRate(ratePerHour) {
    return ratePerHour*WORK_HOURS_PER_DAY;
}

function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget/dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let a = 1 - discount;
    let full_month = Math.floor(numDays/22)
    let rem_days = numDays % 22
    let price_for_month = full_month*22*WORK_HOURS_PER_DAY*ratePerHour
    return Math.ceil((price_for_month*a)+(rem_days*WORK_HOURS_PER_DAY*ratePerHour));
}
