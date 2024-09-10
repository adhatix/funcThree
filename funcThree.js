let transversal;
export function funcThree(director) {
    transversal = director;
    if (transversal === 'up') {
        return 'down';
    } else if (transversal === 'down') {
        return 'up';
    } else if (transversal === 'left') {
        return 'right';
    } else if (transversal === 'right') {
        return 'left';
    } else {
        throw new Error(
            'funcThree() expected a direction up, down, left, or right'
        );
    }
}
