def minimize_failure_probability(hours, probabilities):
    num_courses = len(probabilities[0])  # Number of courses
    
    # Initialize the dynamic programming table and the solution array
    dp = [[0] * num_courses for _ in range(hours + 1)]
    choices = [[0] * num_courses for _ in range(hours + 1)]
    
    # Fill in the table for the base cases (study hours = 0)
    for i in range(num_courses):
        dp[0][i] = probabilities[0][i]
    
    # Fill in the table for other cases
    for h in range(1, hours + 1):  # Iterate over study hours
        for n in range(num_courses):  # Iterate over courses
            min_probability = float('inf')  # Initialize minimum probability
            best_choice = 0  # Initialize the best choice
            
            for i in range(h + 1):  # Try different study hour allocations
                if n > 0:
                    # If not the first course, multiply the probability with the previous course's value
                    probability = probabilities[i][n] * dp[h - i][n - 1]
                else:
                    # If the first course, use the probability directly
                    probability = probabilities[i][n]
                
                if probability < min_probability:
                    min_probability = probability
                    best_choice = i  # Update the best choice
            
            dp[h][n] = min_probability
            choices[h][n] = best_choice
    
    # Construct the solution by backtracking the choices
    study_plan = []
    hours_left = hours
    course = num_courses - 1
    
    while course >= 0:
        study_hour = choices[hours_left][course]
        study_plan.append(study_hour)
        hours_left -= study_hour
        course -= 1
    
    study_plan.reverse()  # Reverse the study plan to get the correct order
    
    # Return the minimum failure probability and the study plan
    return dp[hours][num_courses - 1], study_plan


# Test the function
study_hours = 4
failure_probabilities = [
    [0.8, 0.75, 0.9],
    [0.7, 0.7, 0.7],
    [0.65, 0.67, 0.6],
    [0.62, 0.65, 0.55],
    [0.6, 0.62, 0.5]
]

min_failure_prob, study_plan = minimize_failure_probability(study_hours, failure_probabilities)
print("Minimum failure probability:", min_failure_prob)
print("Study plan:", study_plan)
