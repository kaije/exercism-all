export const dayRate = (ratePerHour) => 8 * ratePerHour;

export const monthRate = (ratePerHour, discount) => 
  Math.ceil(applyDiscount(22 * dayRate(ratePerHour), discount));

export const daysInBudget = (budget, ratePerHour, discount) => 
  Math.floor(budget / applyDiscount(dayRate(ratePerHour), discount));

const applyDiscount = (value, percentage) =>  value * (1 - percentage);
