const conversions = {
  plus: '+',
  minus: '-',
  'multiplied by': '*',
  'divided by': '/'
};

const operatorsPattern = Object.keys(conversions).join('|');
const operandPattern = '-?[0-9]+';

export class ArgumentError extends Error {
}

export class WordProblem {
  constructor(question) {
    this.problem = question;
  }

  answer() {
    const tokens = this.parseTokens(this.problem);
    return this.solve(tokens);
  }

  parseTokens(str) {
    const tokensRegex = new RegExp(`${operatorsPattern}|${operandPattern}`, 'gi');
    const tokens = str.match(tokensRegex);

    if (!tokens || tokens.length < 3) {
      throw new ArgumentError();
    }

    return tokens;
  }

  solve(tokens) {
    let answer;
    let left = tokens[0];

    if (!this.isOperand(left)) {
      throw new ArgumentError();
    }

    for (let i = 1; i < tokens.length; i += 2) {
      const [operator, right] = tokens.slice(i, i + 2);
      if (!this.isOperator(operator) || !this.isOperand(right)) {
        throw new ArgumentError();
      }
      answer = eval(this.convertToExpression(`${left} ${operator} ${right}`));
      left = answer;
    }

    return answer;
  }

  isOperator(token) {
    return this.operatorsRegex().test(token);
  }

  isOperand(token) {
    const operandRegex = new RegExp(`${operandPattern}`, 'i');
    return operandRegex.test(token);
  }

  convertToExpression(str) {
    return str
      .replace(this.operatorsRegex(), match => conversions[match]);
  }

  operatorsRegex() {
    return new RegExp(`${operatorsPattern}`, 'i');
  }
}
