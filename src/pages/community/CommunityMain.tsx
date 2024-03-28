import { Outlet } from "react-router-dom";
import { Header } from "../../components/app/common/header/Header";

export const CommunityMain = () => {
  return (
    <>
      <Header searchFunc={() => {}} />
      <Outlet />
    </>
  );
};
