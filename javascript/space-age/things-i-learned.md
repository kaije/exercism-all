# Space Age

## Things I Learned

An approach to dynamically generating functions.

Rather than declaring similar functions separately like this:

```
onMercury() {
  return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Mercury);
}
 	 
onVenus() {
  return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Venus);
}   
```

I can do this:

```
const secondsPerEarthYear = 31557600;

const secondsPerYear = {
  Earth: secondsPerEarthYear,
  Mercury: secondsPerEarthYear * 0.2408467,
  Venus: secondsPerEarthYear * 0.61519726,
  Mars: secondsPerEarthYear * 1.8808158,
  Jupiter: secondsPerEarthYear * 11.862615,
  Saturn: secondsPerEarthYear * 29.447498,
  Uranus: secondsPerEarthYear * 84.016846,
  Neptune: secondsPerEarthYear * 164.79132
};

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;

    for (const planet in secondsPerYear) {
      this[`on${planet}`] = () => {
        return Number((this.seconds / secondsPerYear[planet]).toFixed(2));
      }
    }
  }
} 

export default SpaceAge;
```