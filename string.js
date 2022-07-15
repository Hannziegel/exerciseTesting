const  stringLength = (string) => {
  return string.length;
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

const capitalizeString = (string) => {
  return string.toUpperCase();
}

module.exports = {
  stringLength: stringLength,
  reverseString:  reverseString,
  capitalizeString:  capitalizeString,
};


