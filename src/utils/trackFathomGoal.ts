declare global {
    interface Window { fathom: any; }
}

export const trackFathomGoal = (goalID: string) => {
  if (typeof window !== 'undefined' && typeof window.fathom !== undefined) {
    return window.fathom("trackGoal", goalID, 0);
  }
}