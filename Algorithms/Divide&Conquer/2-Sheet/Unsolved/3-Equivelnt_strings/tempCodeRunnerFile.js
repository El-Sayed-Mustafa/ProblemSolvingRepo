function areStringsEquivalent(a, b) {
    // Base case: If the strings are equal, return true
    if (a === b) {
      return true;
    }
  
    const len = a.length;
  
    // If the length of the strings is odd, they cannot be split into equivalent halves
    if (len % 2 !== 0) {
      return false;
    }
  
    // Split the strings into halves
    const a1 = a.slice(0, len / 2);
    const a2 = a.slice(len / 2);
    const b1 = b.slice(0, len / 2);
    const b2 = b.slice(len / 2);
  
    // Check the two possible combinations
    return (
      (areStringsEquivalent(a1, b1) && areStringsEquivalent(a2, b2)) ||
      (areStringsEquivalent(a1, b2) && areStringsEquivalent(a2, b1))
    );
  }
  
  // Example usage:
  const input1a = "aaba";
  const input1b = "abaa";
  console.log("Sample Output1:", areStringsEquivalent(input1a, input1b));
  
  const input2a = "aabb";
  const input2b = "abab";
  console.log("Sample Output2:", areStringsEquivalent(input2a, input2b));
  