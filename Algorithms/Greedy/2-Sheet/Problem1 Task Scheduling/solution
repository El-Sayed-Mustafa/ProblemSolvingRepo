function taskScheduling(tasks) {
    // Sort tasks by processing time in ascending order
    tasks.sort((a, b) => a.processingTime - b.processingTime);

    let sum = 0;
    let completionTime = 0;

    for (let i = 0; i < tasks.length; i++) {
        sum += tasks[i].processingTime;
        completionTime += sum;
    }

    return completionTime / tasks.length;
}

// Example usage:
const tasks = [
    { id: 'a1', processingTime: 3 },
    { id: 'a2', processingTime: 5 },
];

const averageCompletionTime = taskScheduling(tasks);
console.log('Average completion time:', averageCompletionTime);
