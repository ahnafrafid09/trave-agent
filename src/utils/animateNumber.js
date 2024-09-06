const animateNumber = (start, end, duration, callback) => {
    let startTimestamp = null;

    const increment = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentNumber = Math.floor(progress * (end - start) + start);
        callback(currentNumber);

        if (progress < 1) {
            requestAnimationFrame(increment);
        }
    };

    requestAnimationFrame(increment);
};

export default animateNumber;
