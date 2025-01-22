import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

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
