import {
  clearClubIdFromLocalStorage,
  getClubIdFromLocalStorage,
  setClubIdToLocalStorage,
} from "@/utils/localStorege/ClubIdControl";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ClubInfo {
  memberId: number;
  memberName: string;
  memberProfileImage: string;
  role: "MEMBER" | "MEMBER";
  clubProfileImage: string;
  clubName: string;
}
interface ClubState {
  clubId: number | null;
  children: ClubInfo;
}

const initialState: ClubState = {
  clubId: getClubIdFromLocalStorage(),
  children: {
    memberId: -1,
    memberName: "",
    memberProfileImage: "",
    role: "MEMBER",
    clubProfileImage: "",
    clubName: "",
  },
};
export const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    setClubId: (state, action: PayloadAction<number>) => {
      state.clubId = action.payload;
      setClubIdToLocalStorage(action.payload);
    },
    setClub: (state, action: PayloadAction<ClubInfo>) => {
      state.children = action.payload;
    },
    clearClub: (state) => {
      state.clubId = null;
      clearClubIdFromLocalStorage();
      state.children = {
        memberId: -1,
        memberName: "",
        memberProfileImage: "",
        role: "MEMBER",
        clubProfileImage: "",
        clubName: "",
      };
    },
  },
});

export const { setClubId, setClub } = clubSlice.actions;
export default clubSlice.reducer;
