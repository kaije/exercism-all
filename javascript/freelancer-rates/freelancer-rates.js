export const dayRate = (ratePerHour) => 8 * ratePerHour;

export const monthRate = (ratePerHour, discount) => 
  Math.ceil(applyDiscount(22 * dayRate(ratePerHour), discount));

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget the total budget
 * @param {number} ratePerHour the rate per hour
 * @param {number} discount to apply, example 20% written as 0.2
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour, discount) {
  throw new Error('Implement the daysInBudget function');
}

const applyDiscount = (value, percentage) =>  value * (1 - percentage);
