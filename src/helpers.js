

export function sumTimes(times) {
    let minutosTotais = times.reduce((sum, time) => {
      const timeParts = time.split(':');
      return sum += +timeParts[0] * 60 + +timeParts[1];
    }, 0);
    return `${Math.floor(minutosTotais / 60)}:${minutosTotais % 60}`;
  }


export function isGreaterDate(str1, str2){
  let date1 = new Date(str1);
  let date2 = new Date(str2);

  return date1>date2;
}

export function timerValidate(str1, str2){

  let realTimer = str1.split(':'),
  minTimer = str2.split(':'),
  maxTimer = [23,59];
  return realTimer.map( (time, i) => time >= minTimer[i] && time <= maxTimer[i]).every((i) => i===true);;



}