import { Cloudy, Default, Misty, Partly, Rainy, Snow, Sunny, Wind } from 'images';

const selectIcon = (condition) => {
  const str = condition;
  switch (true) {
    case /clear/i.test(str):
    return Sunny;
    case /cloud/i.test(str):
    return Partly;
    case /scattered/i.test(str):
    return Cloudy;
    case /fog/i.test(str):
    return Misty;
    case /rain/i.test(str):
    return Rainy;
    case /snow/i.test(str):
    return Snow;
    case /wind/i.test(str):
    return Wind;
    default:
    return Default;
  }
};
export default selectIcon;