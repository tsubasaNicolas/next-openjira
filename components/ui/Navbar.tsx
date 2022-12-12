import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import MenuOutlineIcon from "@mui/icons-material/MenuOutlined";
import { useContext } from "react";
import { UIContext } from "../../context/ui";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlineIcon />
        </IconButton>
        {/*  <NextLink href="/" passHref> */}
        <Link underline="none" color="white" href="/">
          <Typography variant="h6">OpenJira</Typography>
        </Link>
        {/*   </NextLink> */}
      </Toolbar>
    </AppBar>
  );
};
