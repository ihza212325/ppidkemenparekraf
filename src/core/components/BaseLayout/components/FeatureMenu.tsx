import { memo, ReactNode, useEffect, useMemo, useState } from "react";
import {
  Bell,
  GalleryVertical,
  Speech,
  Ticket,
  TicketCheck,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import ButtonNav from "../../Atoms/ButtonNav";
type MenuType = {
  name: String;
  icon: ReactNode;
  nav: String;
};
function FeatureMenu() {
  const navs = window.location.pathname;
  const [activeMenu, setactiveMenu] = useState<String>("home");

  let menu: MenuType[] = [
    {
      name: "Notification",
      icon: <Bell className="h-[1.125rem] my-auto" />,
      nav: "/notif",
    },
    {
      name: "Ticketing",
      icon: <Ticket className="h-[1.125rem] my-auto" />,
      nav: "/ticket",
    },
    {
      name: "Transaction",
      icon: <TicketCheck className="h-[1.125rem] my-auto" />,
      nav: "/transaction",
    },
    {
      name: "Banner",
      icon: <Bell className="h-[1.125rem] my-auto" />,
      nav: "/banner",
    },
    {
      name: "User Tije",
      icon: <Users className="h-[1.125rem] my-auto" />,
      nav: "/user",
    },
    {
      name: "Post",
      icon: <GalleryVertical className="h-[1.125rem] my-auto" />,
      nav: "/post",
    },
    {
      name: "Complaint",
      icon: <Speech className="h-[1.125rem] my-auto" />,
      nav: "/complaint",
    },
  ];

  const handleClickMenu = (menu: String) => {
    setactiveMenu(menu);
  };
  useEffect(() => {
    handleClickMenu(navs);
    return () => {};
  }, []);

  const ListFeature = useMemo(() => {
    return menu.map((e: MenuType, i) => {
      return (
        <li key={i}>
          <NavLink to={`${e.nav}`} onClick={() => handleClickMenu(e.nav)}>
            <ButtonNav
              buttonType={activeMenu === e.nav ? "active" : "inactive"}
              icon={e.icon}
              onClick={() => {}}
              title={e.name}
              key={i}
            />
          </NavLink>
        </li>
      );
    });
  }, [activeMenu]);
  return <>{ListFeature}</>;
}

export default memo(FeatureMenu);
