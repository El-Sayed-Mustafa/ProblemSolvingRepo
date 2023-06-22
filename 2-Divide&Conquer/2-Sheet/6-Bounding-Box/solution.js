function boundingBoxConvexPolygon(vertices) {
    const n = vertices.length;

    // Find the vertex with maximum X coordinate
    const maxXIndex = unimodalSearch(vertices, 0, n - 1, 'x');
    const maxX = vertices[maxXIndex].x;

    // Find the vertex with minimum Y coordinate
    const minYIndex = divideAndConquerSearch(vertices, 0, n - 1, 'y', 'min');
    const minY = vertices[minYIndex].y;

    // Find the vertex with maximum Y coordinate
    const maxYIndex = divideAndConquerSearch(vertices, 0, n - 1, 'y', 'max');
    const maxY = vertices[maxYIndex].y;

    return {
        minX: vertices[0].x,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
    };
}

function unimodalSearch(vertices, low, high, property) {
    if (low === high) {
        return low;
    }

    const mid = Math.floor((low + high) / 2);

    if (vertices[mid][property] > vertices[mid - 1][property] && vertices[mid][property] > vertices[mid + 1][property]) {
        return mid;
    }

    if (vertices[mid][property] > vertices[mid - 1][property]) {
        return unimodalSearch(vertices, mid + 1, high, property);
    } else {
        return unimodalSearch(vertices, low, mid - 1, property);
    }
}

function divideAndConquerSearch(vertices, low, high, property, target) {
    if (low === high) {
        return low;
    }

    const mid = Math.floor((low + high) / 2);

    if (target === 'min') {
        if (vertices[mid][property] < vertices[mid + 1][property]) {
            return divideAndConquerSearch(vertices, low, mid, property, target);
        } else {
            return divideAndConquerSearch(vertices, mid + 1, high, property, target);
        }
    } else if (target === 'max') {
        if (vertices[mid][property] > vertices[mid + 1][property]) {
            return divideAndConquerSearch(vertices, low, mid, property, target);
        } else {
            return divideAndConquerSearch(vertices, mid + 1, high, property, target);
        }
    }
}

// Example usage:
const vertices = [
    { x: 1, y: 5 },
    { x: 2, y: 7 },
    { x: 4, y: 9 },
    { x: 6, y: 8 },
    { x: 8, y: 6 },
    { x: 9, y: 4 },
    { x: 7, y: 2 },
    { x: 5, y: 1 }
];

const boundingBox = boundingBoxConvexPolygon(vertices);
console.log(boundingBox);
