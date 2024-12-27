// Import the URLSearchParams module from Node.js to work with query parameters in URLs
import { URLSearchParams } from 'node:url';

// List of special characters to be tested in URL parsing
const specialChars = [
  '+',
  '!',
  '"',
  '#',
  "'",
  '(',
  ')',
  '*',
  ',',
  '-',
  '.',
  '/',
  ':',
  '?',
  '“',
  '”',
];

/**
 * Parses a query string and converts it into a JavaScript object.
 *
 * @param {string} str - The query string to parse.
 * @returns {Object} - An object representing the parsed key-value pairs.
 */
const parse = (str) => {
  const searchParams = new URLSearchParams(str); // Create a URLSearchParams instance from the input string
  const result = {}; // Object to store the parsed key-value pairs

  for (const key of searchParams.keys()) {
    const values = searchParams.getAll(key); // Get all values associated with the key
    result[key] = values.length === 1 ? values[0] : values; // Store single or multiple values
  }

  return result;
};

// Test the parse function with a set of special characters
console.log(
  specialChars.map((char) => ({
    char, // The special character being tested
    parsed: parse(
      `endpoint?name=Hello3:World(foo3${char}bar)-12-24-2024T18_10_57_8860.xyz`
    ), // Parsing a sample string containing the special character
  }))
);

// Demonstration of URL encoding and decoding
// Decode a URI component containing encoded special characters
console.log(
  decodeURIComponent(
    'endpoint?name=Hello3:World(foo3%2Bbar)-12-24-2024T18_10_57_8860.xyz'
  )
);

// Encode a URI component to make it safe for inclusion in a URL
console.log(
  encodeURIComponent(
    'endpoint?name=Hello3:World(foo3+bar)-12-24-2024T18_10_57_8860.xyz'
  )
);
