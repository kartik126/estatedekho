export function basePriceConvert(money) {
  if (money == null) {
    return 'Rs ' + 0;
  } else if (money > 100000 && money < 10000000) {
    let value = money / 100000;
    value = Number.parseFloat(value)
      .toFixed(2)
      .replace(/\.?0+$/, '');
    return value + ' L';
  } else if (money >= 10000000) {
    let value = money / 10000000;
    value = Number.parseFloat(value)
      .toFixed(2)
      .replace(/\.?0+$/, '');
    return value + ' Cr';
  } else if (money < 100000) {
    let value = money / 1000;
    value = Number.parseFloat(value)
      .toFixed(2)
      .replace(/\.?0+$/, '');
    return value + ' K';
  }
}
