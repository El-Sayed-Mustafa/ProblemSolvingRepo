def is_path_possible(maze, n, m, j):
    # Variables to track the current position and number of spikes encountered
    current_row, current_col = -1, -1
    spikes_encountered = 0

    # Find the entrance '@' and initialize the starting position
    for i in range(n):
        for j in range(m):
            if maze[i][j] == '@':
                current_row, current_col = i, j
                break

    # DFS function to explore the maze
    def dfs(row, col, spikes):
        nonlocal spikes_encountered

        # Check if the current position is out of bounds or a wall
        if row < 0 or row >= n or col < 0 or col >= m or maze[row][col] == '#':
            return

        # If the current position is the treasure 'x', check if the number of spikes encountered is less than j/2
        if maze[row][col] == 'x':
            if spikes_encountered < j/2:
                return "SUCCESS"

        # If the current position is a spike 's', increment the spikes encountered count
        if maze[row][col] == 's':
            spikes += 1

        # If the number of spikes encountered exceeds j/2, backtrack
        if spikes > j/2:
            return

        # Mark the current position as visited
        maze[row][col] = '#'

        # Recursively explore the neighboring positions
        result = dfs(row + 1, col, spikes) or dfs(row - 1, col, spikes) or dfs(row, col + 1, spikes) or dfs(row, col - 1, spikes)

        # Restore the current position after backtracking
        maze[row][col] = '.'

        return result

    # Start the DFS from the entrance position
    return dfs(current_row, current_col, 0) or "IMPOSSIBLE"


# Sample Input 1
n1, m1, j1 = 3, 3, 2
maze1 = [
    ['#', '@', '#'],
    ['#', 's', '#'],
    ['#', 'x', '#']
]

# Check if a path is possible for Sample Input 1
result1 = is_path_possible(maze1, n1, m1, j1)
print("Sample Output 1:", result1)

# Sample Input 2
n2, m2, j2 = 4, 4, 3
maze2 = [
    ['#', '#', '#', '#'],
    ['@', '.', 's', '#'],
    ['#', '#', '.', '#'],
    ['#', 'x', 's', '#']
]

# Check if a path is possible for Sample Input 2
result2 = is_path_possible(maze2, n2, m2, j2)
print("Sample Output 2:", result2)
