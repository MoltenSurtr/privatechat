/**
 * Calculates a numeric value based on the characters of the string "What's your perfect first date?".
 *
 * @returns {string} - The calculated numeric value as a reversed string.
 */
const output = "What's your perfect first date?"
    .split("")
    .map(char => parseInt(char))
    .filter(a => a)
    .reduce((a, b) => a + b)
    .toString()
    .split("")
    .reverse()
    .join("");
