export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const debounce = (fn: Function, delay: number) => {
  var t: number;
  return function () {
    clearTimeout(t);
    t = setTimeout(fn, delay);
  };
};

/**
 * Copiar un texto en el portapapeles...
 * @param {*} text
 */
export const copyToClipboard = (text: string = "") => {
  navigator.clipboard.writeText(text);
};

/**
 * Establece una interrupción...
 * @param ms
 * @returns
 */
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const randomNumber = (min = 0, max = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
