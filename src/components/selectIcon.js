import { Cloudy, Default, Misty, Partly, Rainy, Snow, Sunny, Wind } from 'images';

const selectIcon = (condition) => {
  const str = condition;
  switch (true) {
    case /clear/.test(str):
    return Sunny;
    case /broken/.test(str):
    return Partly;
    case /cloud/.test(str):
    return Cloudy;
    case /mist/.test(str):
    return Misty;
    case /rain/.test(str):
    return Rainy;
    case /snow/.test(str):
    return Snow;
    case /wind/.test(str):
    return Wind;
    default:
    return Default;
  }
};
export default selectIcon;