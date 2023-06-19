from collections import deque
#Vasily wants to transform a starting number a into a target number b.
#  He can use two operations: multiplying the current number by 2 or 
# `appending the digit 1 to the right. The task is to determine 
# if there exists a sequence of these operations that can transform a into b.
# The program should take a and b as input and 
# output 1 if a transformation is possible, and -1 if it is not.

def can_transform(a, b):
    queue = deque([(a, 0)])  # Initialize the queue with the starting number and the number of steps taken
    visited = set([a])  # Keep track of visited numbers

    while queue:
        current, steps = queue.popleft()

        if current == b:
            return 1  # Transformation is possible

        # Apply the two types of operations
        multiply = current * 2
        append = int(str(current) + '1')

        # Check if the multiplied number is within the allowed range and not visited before
        if multiply <= b and multiply not in visited:
            queue.append((multiply, steps + 1))
            visited.add(multiply)

        # Check if the appended number is within the allowed range and not visited before
        if append <= b and append not in visited:
            queue.append((append, steps + 1))
            visited.add(append)

    return -1  # No transformation is possible

# Example usage
a, b = 4, 42
result = can_transform(a, b)
print(result)