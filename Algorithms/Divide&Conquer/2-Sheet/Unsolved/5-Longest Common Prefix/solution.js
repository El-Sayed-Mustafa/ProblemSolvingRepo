// Helper function to find the common prefix between two strings using Two Pointers
function findCommonPrefix(str1, str2) {
    let prefix = "";
    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length && str1[i] === str2[j]) {
        prefix += str1[i];
        i++;
        j++;
    }

    return prefix;
}

// D&C function to find the longest common prefix
function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return "";
    }

    if (strings.length === 1) {
        return strings[0];
    }

    const mid = Math.floor(strings.length / 2);
    const leftPrefix = longestCommonPrefix(strings.slice(0, mid));
    const rightPrefix = longestCommonPrefix(strings.slice(mid));

    return findCommonPrefix(leftPrefix, rightPrefix);
}

// Example usage:
const strings1 = ["geeksforgeeks", "geeks", "geek", "geezer"];
const longestPrefix1 = longestCommonPrefix(strings1);
console.log("Longest Common Prefix:", longestPrefix1);

const strings2 = ["apple", "ape", "april"];
const longestPrefix2 = longestCommonPrefix(strings2);
console.log("Longest Common Prefix:", longestPrefix2);
