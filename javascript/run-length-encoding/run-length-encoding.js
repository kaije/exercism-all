export function encode(str) {
  let encoded = '';
  if (str) {
    const runs = str.match(/(.)\1+|./g);
    runs.forEach( run => { 
      if (run.length > 1) {     
        encoded = `${encoded}${run.length}${run.charAt(0)}`
      } else {
        encoded = `${encoded}${run}`;
      }
    });
  }
  return encoded;
}

export function decode(str) {
  let decoded = '';
  if (str) {
    const compressions = str.match(/([0-9])+[a-zA-Z ]|[a-zA-Z ]/g);
    compressions.forEach( compression => {
      if(/[0-9]/.test(compression)) {
        decoded = `${decoded}${compression.match(/[a-zA-Z ]/)[0].repeat(compression.match(/[0-9]+/)[0])}`;
      } else {
        decoded = `${decoded}${compression}`;
      }
    });
  }
  return decoded;
}