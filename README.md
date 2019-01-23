# Find Shortest Distance

## Clarifying Questions (Assumptions in brackets)
1. Can both parameters be the same colour? (Yes, output shortest distance between the same colour)
2. What if no matching pair is found? (Throw an error)
3. Does the order of parameters matter? (No)
4. How are the parameters input? (In a string array of length 2)
5. Can the input be empty? (Yes, throw an error)

## Test cases
### General
Input: red green red blue yellow green yellow blue orange red orange
Params: green, orange
Output: 3

Input: red red blue red
Params: red, blue
Output: 1

Input: red yellow blue
Params: red, blue
Output: 2

Input: yellow yellow blue yellow yellow red
Params: red, blue
Output: 3

### Edge 
Input: red green red blue yellow green yellow blue orange red orange
Params: yellow, yellow
Output: 2

Input: red green red blue yellow green yellow blue orange red orange
Params: green, black
Output: Throw Error

Input:
Params: red, blue
Output: Throw Error

## Brute Force Approach
1. Define a variable shortestDistance.
2. For every car colour, check if it's in params. If true, then for every following car colour, check for a match of the other param colour. Find the distance to the shortest match.
3. If the distance is shorter than shortestDistance, replace it.
4. Return shortestDistance.
5. This is an O(N^2 * S) solution, where S is the length of strings.

## Optimised Idea
1. For every colour, store the last index if colour matches params.
2. For every match, find the distance by subtracting current index from last matching index of the other colour.
3. Store the shortest distance.
4. This is an O(N * S) solution, where S is the length of strings (because hashing is an O(S) operation).

## Plan
1. Initialise a map that maps a colour to an object colourData. (If param colours are equal, map contains one entry where the otherColourData maps to itself)
2. Colour data contains {lastIndex, otherColorData} where otherColorData is the reference to the other colorData object.
3. Split the input. For every string, check if the color is in the map.
4. If true, check if otherColourData has lastIndex. If true, find the distance and replace shortestDistance if shorter.
5. Store new lastIndex
6. Return shortestDistance

