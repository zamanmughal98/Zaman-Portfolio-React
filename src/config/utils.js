export const debounce = (callback, delay) => {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const capitalizeSentence = (message = '') => {
  if (message && (typeof message !== 'string' || !message.trim()))
    return message;

  return message
    .split(' ')
    ?.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    ?.join(' ');
};
