"use client";
const CLUB_ID_KEY = `clubId`;
export const setClubIdToLocalStorage = (clubId: number) => {
  localStorage.setItem(CLUB_ID_KEY, clubId.toString());
};

export const getClubIdFromLocalStorage = (): number | null => {
  if (typeof window !== 'undefined') {
    const storedClubId = localStorage.getItem(CLUB_ID_KEY);
    return storedClubId ? parseInt(storedClubId, 10) : null;
  } // 로컬 스토리지 이슈...
  return null;
};

export const clearClubIdFromLocalStorage = () => {
  localStorage.removeItem(CLUB_ID_KEY);
};
