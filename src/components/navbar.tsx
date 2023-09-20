import Image from "next/image";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { list } from "postcss";
import React, { useState } from "react";
import { Button } from "react-scroll";

const gothic = Montserrat({ subsets: ["latin"], weight: "400" });

type Anchor = "top" | "left" | "bottom" | "right";

export default function Navbar({ isDarkText }: { isDarkText: boolean }) {
  const logo_link = isDarkText
    ? "/logo/05_0x0-Tesla_Wordmark_20_Black.png"
    : "/logo/07_0x0-Tesla_Wordmark_20_White.png";

  const [openedDrawer, setOpenedDrawer] = useState(false);

  const drawerContent = (anchor: Anchor) => (
    <Box
      sx={{
        "& .mui-focused .muioutlinedinput-notchedoutline": {
          border: "none",
          borderradius: "5px 5px 0 0",
        },
      }}
      onClick={() => setOpenedDrawer(false)}
    >
      <nav
        className={`pointer-events-auto flex items-center justify-between p-2 xl:px-8 xl:py-4 ${gothic.className}`}
      >
        <Link href="#home">
          <div className={`pointer-events-auto rounded-lg`}>
            <Image src={logo_link} alt="logo-tesla" width={160} height={160} />
          </div>
        </Link>
        <div className="flex gap-10 font-medium max-xl:hidden">
          <div className="cursor-pointer">Vehicles</div>
          <div className="cursor-pointer">Energy</div>
          <div className="cursor-pointer">Charging</div>
          <div className="cursor-pointer">Discover</div>
          <div className="cursor-pointer">Shop</div>
        </div>
        <div className="flex gap-3 max-xl:hidden">
          <HelpOutlineIcon />
          <LanguageIcon />
          <AccountCircleIcon />
        </div>
        <div className="cursor-pointer rounded-lg  bg-opacity-20 p-2  transition duration-1000 xl:hidden">
          Menu
        </div>
      </nav>
    </Box>
  );

  return (
    <nav
      className={`pointer-events-auto flex items-center justify-between p-2 xl:px-8 xl:py-4 ${gothic.className}`}
    >
      <Link href="#home">
        <div className={`pointer-events-auto rounded-lg`}>
          <Image src={logo_link} alt="logo-tesla" width={160} height={160} />
        </div>
      </Link>
      <div
        onMouseEnter={() => setOpenedDrawer(true)}
        className="flex gap-10 font-medium max-xl:hidden"
      >
        <div className="cursor-pointer">Vehicles</div>
        <div className="cursor-pointer">Energy</div>
        <div className="cursor-pointer">Charging</div>
        <div className="cursor-pointer">Discover</div>
        <div className="cursor-pointer">Shop</div>
      </div>
      <div className="flex gap-3 max-xl:hidden">
        <HelpOutlineIcon />
        <LanguageIcon />
        <AccountCircleIcon />
      </div>
      <div className="cursor-pointer rounded-lg  bg-opacity-20 p-2  transition duration-1000 xl:hidden">
        Menu
      </div>

      <div className="absolute right-0 top-0">
        <React.Fragment key={"top"}>
          {/* <button onClick={() => setOpenedDrawer(true)}>{"top"}</button> */}
          <Drawer
            anchor="top"
            open={openedDrawer}
            onClose={() => setOpenedDrawer(false)}
          >
            {drawerContent("top")}
          </Drawer>
        </React.Fragment>
      </div>
    </nav>
  );
}
