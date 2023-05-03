import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { userId } = useParams();
  return <div>Profile for userId: {userId}</div>;
};

export default ProfilePage;
