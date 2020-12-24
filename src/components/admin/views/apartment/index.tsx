import React from "react";
import { TabsRender } from "../../../../containers/Tabs";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TimerIcon from "@material-ui/icons/Timer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { LabelIcon } from "../../../../containers/Label/Icon";
import { ApproveApartment } from "./approve";
import { RoleAdmin } from "../../../../libs/constants/role";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
export const STATUS_APARTMENT = {
  APPROVED: "APPROVE",
  NO_APPROVED: "NO_APPROVE",
  LOVE: "LOVE",
  EXTEND: "EXTEND",
};
interface Props {}
const apartmentTab = [
  {
    label: <LabelIcon label="Đã duyệt" icon={<CheckCircleIcon />} />,
    component: <ApproveApartment type={STATUS_APARTMENT.APPROVED} />,
    icon: CheckCircleIcon,
    private: [RoleAdmin.ADMIN, RoleAdmin.MANAGER, RoleAdmin.OWNER],
  },
  {
    label: <LabelIcon label="Chưa duyệt" icon={<TimerIcon />} />,
    component: <ApproveApartment type={STATUS_APARTMENT.NO_APPROVED} />,
    icon: TimerIcon,
    private: [RoleAdmin.ADMIN, RoleAdmin.MANAGER, RoleAdmin.OWNER],
  },
  {
    label: <LabelIcon label="Yêu thích" icon={<FavoriteIcon />} />,
    component: <ApproveApartment type={STATUS_APARTMENT.LOVE} />,
    icon: FavoriteIcon,
  },
  {
    label: <LabelIcon label="Bài đăng của tôi" icon={<HomeIcon />} />,
    component: "Bài đăng của tôi",
    icon: HomeIcon,
    private: [RoleAdmin.ADMIN, RoleAdmin.MANAGER],
  },
  {
    label: <LabelIcon label="Yêu cầu gia hạn" icon={<WatchLaterIcon />} />,
    component: <ApproveApartment type={STATUS_APARTMENT.EXTEND} />,
    icon: HomeIcon,
    private: [RoleAdmin.ADMIN, RoleAdmin.MANAGER],
  },
];
export const ApartmentDashboard = (props: Props) => {
  return (
    <>
      <TabsRender input={apartmentTab} />
    </>
  );
};
