

export function sumTimes(times) {
    let minutosTotais = times.reduce((sum, time) => {
      const timeParts = time.split(':');
      return sum += +timeParts[0] * 60 + +timeParts[1];
    }, 0);
    return `${Math.floor(minutosTotais / 60)}:${minutosTotais % 60}`;
  }
