const GREY = Object.freeze({
  GREY_100: '#F8F8F8',
  GREY_200: '#EEE',
  GREY_300: '#DDD',
  GREY_400: '#BBB',
  GREY_500: '#777',
  GREY_600: '#555',
  GREY_700: '#3B3B3B',
  GREY_800: '#222',
});

const BLUE = Object.freeze({
  BLUE_100: '#F3F8FF',
  BLUE_200: '#E1EEFF',
  BLUE_300: '#BAD8FF',
  BLUE_400: '#7AB3FF',
  BLUE_500: '#1A7CFF',
  BLUE_600: '#0062E7',
  BLUE_700: '#0049A9',
  BLUE_800: '#003780',
});

const MINT = Object.freeze({
  MINT_100: '#EAF9F8',
  MINT_200: '#D4F3F2',
  MINT_300: '#AAE6E4',
  MINT_400: '#71CBC8',
  MINT_500: '#2AC1BC',
  MINT_600: '#269C98',
  MINT_700: '#1D7875',
  MINT_800: '#12514F',
});

const GREEN = Object.freeze({
  GREEN_100: '#EDFBF2',
  GREEN_200: '#DCF4E5',
  GREEN_300: '#B7E8CA',
  GREEN_400: '#78D59D',
  GREEN_500: '#30BE68',
  GREEN_600: '#20944C',
  GREEN_700: '#187A3E',
  GREEN_800: '#136031',
});

const ORANGE = Object.freeze({
  ORANGE_100: '#FFF9F2',
  ORANGE_200: '#FFEBD6',
  ORANGE_300: '#FFD4A6',
  ORANGE_400: '#FFAF59',
  ORANGE_500: '#FF8400',
  ORANGE_600: '#F16A00',
  ORANGE_700: '#D45610',
  ORANGE_800: '#AD460D',
});

const RED = Object.freeze({
  RED_100: '#FEF5F5',
  RED_200: '#FDE4E3',
  RED_300: '#FBC3C2',
  RED_400: '#F8908F',
  RED_500: '#F45452',
  RED_600: '#F12F2E',
  RED_700: '#C90300',
  RED_800: '#A70D0A',
});

const COLOR = Object.freeze(
  Object.assign({}, { ...GREY, ...BLUE, ...MINT, ...GREEN, ...ORANGE, ...RED })
);

export default COLOR;
