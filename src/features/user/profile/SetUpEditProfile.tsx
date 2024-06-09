import EditProfile from "./components/EditProfile";
import { EditProfileHeader } from "./components/EditProfileHeader";
import React from "react";

const SetUpEditProfile: React.FC = () => {
  return (
    <>
      <EditProfileHeader />
      <EditProfile />
    </>
  );
};

export default SetUpEditProfile;
