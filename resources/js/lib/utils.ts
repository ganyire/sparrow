export const utilityColors = {
    PrimaryLight: '#86c1fe',
    PrimaryDark: '#0d83fd',
    Secondary: '#f3f9ff',
    Tertiary: '#f9d8c1',
};

/**
 * Delay execution for a given number of seconds.
 * ----------------
 */
export function delay(seconds: number, callback?: () => void) {
    const timeInMilliseconds = seconds * 1000;
    if (callback) {
        return setTimeout(callback, timeInMilliseconds);
    }
    return new Promise((resolve) => setTimeout(resolve, timeInMilliseconds));
}
