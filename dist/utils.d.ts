export declare function formattedDate(date: Date): string;
export interface Streak {
    currentCount: number;
    startDate: String;
    lastLoginDate: string;
}
export declare function buildStreak(date: Date, overrideDefaults?: Partial<Streak>): Streak;
export declare const KEY = "streak";
export declare function updateStreak(storage: Storage, streak: Streak): void;
