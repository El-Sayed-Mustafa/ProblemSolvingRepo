function activitySelection(activities) {
    // Sort activities by finish time in ascending order
    activities.sort((a, b) => a.finish - b.finish);

    // Initialize an empty set to store selected activities
    const A = new Set();

    // Select the first activity (earliest finish time)
    A.add(activities[0]);
    let lastSelectedActivity = activities[0];

    // Iterate over the remaining activities
    for (let i = 1; i < activities.length; i++) {
        const currentActivity = activities[i];
        // Check if the current activity is compatible with the last selected activity
        if (currentActivity.start >= lastSelectedActivity.finish) {
            A.add(currentActivity);
            lastSelectedActivity = currentActivity;
        }
    }

    return A;
}
