const CLUB_ID_KEY = `clubId`;
export const setClubIdToLocalStorage = (clubId: number) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(CLUB_ID_KEY, clubId.toString());
  }
};

export function getClubIdFromLocalStorage(): number | null {
  if (typeof window !== "undefined") {
    const storedClubId = localStorage.getItem(CLUB_ID_KEY);
    return storedClubId ? parseInt(storedClubId, 10) : null;
  }
  return null;
}

export const clearClubIdFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CLUB_ID_KEY);
  }
};
