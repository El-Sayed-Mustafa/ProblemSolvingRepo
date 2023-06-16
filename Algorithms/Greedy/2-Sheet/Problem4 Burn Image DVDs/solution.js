function burnImageDVDs(images, DVDs, capacity) {
    images.sort((a, b) => b.rank - a.rank); // Sort the images in descending order of rank

    const total = new Array(DVDs).fill(0); // Array to store total rank for each DVD
    const remainingCapacity = new Array(DVDs).fill(capacity); // Array to store remaining capacity for each DVD

    for (let i = 0; i < images.length; i++) {
        let added = false;

        for (let dvd = 0; dvd < DVDs; dvd++) {
            if (images[i].size <= remainingCapacity[dvd]) {
                total[dvd] += images[i].rank; // Add rank to total for the current DVD
                remainingCapacity[dvd] -= images[i].size; // Update remaining capacity
                added = true;
                break;
            }
        }


    }

    return total;
}

// Example usage:
const images = [
    { size: 10, rank: 5 },
    { size: 15, rank: 8 },
    { size: 20, rank: 6 },
    { size: 12, rank: 7 },
];

const DVDs = 2;
const capacity = 30;

const totalRanks = burnImageDVDs(images, DVDs, capacity);
console.log('Total ranks for each DVD:', totalRanks);
