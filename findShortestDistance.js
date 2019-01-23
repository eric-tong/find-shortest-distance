function findShortestDistance(carColours, params) {
    const colourToColourData = mapify(params);
    let shortestDistance = Infinity;

    for (const [i, colour] of carColours.split(' ').entries()) {
        const colourData = colourToColourData.get(colour);

        if (colourData) {
            if (typeof colourData.otherColourData.lastIndex !== 'undefined') {
                shortestDistance = Math.min(shortestDistance, i - colourData.otherColourData.lastIndex);
            }
            colourData.lastIndex = i;
        }
    }

    if (shortestDistance < Infinity)
        return shortestDistance;
    else
        throw 'No match found';
}

function mapify(params) {
    if (params[0] === params[1]) {
        const colourData = { lastIndex: undefined, otherColourData: undefined };
        colourData.otherColourData = colourData;

        return new Map([[params[0], colourData]]);
    } else {
        const colourData = params.map(colour => [colour, { lastIndex: undefined, otherColourData: undefined }]);
        colourData[0][1].otherColourData = colourData[1][1];
        colourData[1][1].otherColourData = colourData[0][1];

        return new Map(colourData);
    }
}

module.exports = findShortestDistance;