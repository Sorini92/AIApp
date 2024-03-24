import { Outlet } from "react-router-dom";
import { Header } from "../../components/app/common/header/Header";

export const CommunityMain = () => {
  const communityBreadcrumbs = [
    { text: "Community", type: "link", to: "" },
    { text: "Prompt", type: "text", to: "" },
  ];

  return (
    <>
      <Header breadcrumbs={communityBreadcrumbs} searchFunc={() => {}} />

      <Outlet />
    </>
  );
};
