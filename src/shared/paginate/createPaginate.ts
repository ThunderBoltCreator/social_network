export const createPaginate = (current: number, viewed: number, last: number) => {
  const res = []
  const step = Math.floor(viewed / 2)
  let firstNumber = 1
  let lastNumber = last
  if (current - step < 1) {
    firstNumber = 1
    lastNumber = firstNumber + viewed - 1
  }
  if (current + step > last) {
    lastNumber = last
    firstNumber = lastNumber - viewed + 1
  }
  if (current - step > 0 && current + step <= last) {
    firstNumber = current - step
    lastNumber = current + step
  }
  for (let i = firstNumber; i <= lastNumber; i++) {
    res.push(i)
  }
  return res
}