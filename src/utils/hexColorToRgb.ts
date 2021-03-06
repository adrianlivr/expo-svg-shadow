export function hexColorToRgb(color: string) {
  const hexColorRegex = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  const rgb = [];
  let sColor = color.toLowerCase();

  if (sColor && hexColorRegex.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    for (let i = 1; i < 7; i += 2) {
      rgb.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }
    return rgb;
  } else {
    throw Error('Invalid color!');
  }
}
