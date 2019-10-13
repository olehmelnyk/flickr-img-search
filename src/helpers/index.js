/**
 * Removes non alphanumeric characters, uses "+" as word separator
 * @param text search string
 * @returns {string} prepared string, with removed non-alphanum chars, in lowercase and with "+" as a word separator
 */
const prepareSearchText = text => text
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}+-]+/gu, ' ')
    .trim()
    .replace(/\s+/g, '+');

/**
 *
 * @param cb function to be called once per delay period of time
 * @param delay (ms) before calling cb
 * @returns {function(...[*]=)}
 */
const debounce = (cb, delay = 1000) => {
    let inDebounce;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => cb.apply(context, args), delay)
    }
};

export {
    debounce,
    prepareSearchText,
}
