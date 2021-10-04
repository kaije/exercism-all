class Gigasecond {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  date() {
    /* getTime() always uses UTC for time representation, and
       returns the number of milliseconds since Jan 1, 1970, 00:00:00.000.
       We can then add 1 gigasecond in milliseconds to this. */
    return new Date(this.birthdate.getTime() + 1e12);
  }
} 

export default Gigasecond;
