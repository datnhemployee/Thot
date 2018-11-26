import { Dimensions } from 'react-native';

const RED = '#ff4757';
const LIGHT_RED = '#ff6b81';
const LIGHT_GRAY = '#dfe4ea';
const GRAY = '#a4b0be';

const USERNAME_COLOR = RED;
const USERNAME_HOLDER_COLOR = GRAY;

const PASSWORD_COLOR = RED;
const PASSWORD_HOLDER_COLOR = GRAY;

const SCREEN_SIZE = {
  W: Dimensions.get("window").width,
  H: Dimensions.get("window").height,
}

const FONT = {
  uvfVerner:  'UVF Verner',
  segoeUILI:  'Segoe UI Light Italic',
  segoeUIL:   'Segoe UI Light',
}
export {
  RED, 
  LIGHT_RED, 
  LIGHT_GRAY,
  GRAY,
  SCREEN_SIZE,
  USERNAME_HOLDER_COLOR,
  PASSWORD_HOLDER_COLOR,
  FONT,
}
