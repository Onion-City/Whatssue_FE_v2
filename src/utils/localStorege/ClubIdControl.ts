const CLUB_ID_KEY = `clubId`;

export const setClubIdToLocalStorage = (clubId: number) => {
  localStorage.setItem(CLUB_ID_KEY, clubId.toString());
};

export const getClubIdFromLocalStorage = (): number | null => {
  const storedClubId = localStorage.getItem(CLUB_ID_KEY);
  return storedClubId ? parseInt(storedClubId, 10) : null;
};

export const clearClubIdFromLocalStorage = () => {
  localStorage.removeItem(CLUB_ID_KEY);
};
