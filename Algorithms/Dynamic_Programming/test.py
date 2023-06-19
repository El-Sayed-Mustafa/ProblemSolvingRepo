def text_justification(words, page_width):
    n = len(words)
    min_badness = [None] * (n + 1)  # Store the minimum badness measure for each subproblem
    best_split = [-1] * n  # Store the best split index for each subproblem

    def calculate_badness(start, end):
        line_width = sum(len(word) for word in words[start:end])  # Calculate the width of the line
        if line_width > page_width:
            return float('inf')  # Line width exceeds page width, return infinity badness
        return (page_width - line_width) ** 3  # Calculate and return the badness measure

    def compute_min_badness(i):
        if min_badness[i] is not None:
            return min_badness[i]  # Return memoized result if available
        if i == n + 1:
            min_badness[i] = 0  # Base case: end of text, no badness
        else:
            current_min_badness = float('inf')
            optimal_split = None
            for j in range(i + 1, n + 1):
                width += len(words[j - 1]) + 1  # +1 for the space between words
                current_badness = compute_min_badness(j) + calculate_badness(i, width)
                if current_badness < current_min_badness:
                    current_min_badness = current_badness
                    optimal_split = j
            min_badness[i] = current_min_badness  # Memoize the minimum badness
            best_split[i - 1] = optimal_split  # Store the best split index for the subproblem
        return min_badness[i]

    min_badness_value = compute_min_badness(1)  # Calculate the minimum badness measure
    splits = []
    current_index = 0
    while current_index < n:
        splits.append(best_split[current_index])  # Append the best split index to the splits list
        current_index = best_split[current_index] - 1 if best_split[current_index] != -1 else n  # Move to the next subproblem

    return min_badness_value, splits

# Example usage
words = ["This", "is", "an", "example", "text", "to", "justify"]
page_width = 15

min_badness, splits = text_justification(words, page_width)
print(f"Minimum badness measure: {min_badness}")
print(f"Best splits: {splits}")
