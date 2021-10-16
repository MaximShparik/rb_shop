import numeral from 'numeral'

export { default as deepClone } from 'just-clone'

export const formatAmount = (val, format = '0,0.00') => {
  return numeral(val).format(format)
}
export function randomInteger (min, max) {
  var rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}
