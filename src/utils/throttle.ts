const throttle = <T extends (...args: Parameters<T>) => void>(
    fn: T,
    delay: number
) => {
    let lastTime: number;

    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastTime < delay) {
            return;
        }

        lastTime = now;
        fn(...args);
    };
};

export default throttle;
