const GIGASECOND_IN_MILLISECONDS: number = 1e12;

export default class Gigasecond {
  startDate: Date;

  constructor(startDate: Date) {
    this.startDate = startDate;
  }

  date(): Date {
    return new Date(this.startDate.getTime() + GIGASECOND_IN_MILLISECONDS);
  }
}
