/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
  const alphanumericString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  return alphanumericString === alphanumericString.split('').reverse().join('');
}