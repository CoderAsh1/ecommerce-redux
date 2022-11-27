import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const navItems = ["Products"];

function DrawerAppBar(props) {
  const cart = useSelector((state) => state.cart);
  let cartQty =
    cart.length &&
    cart.reduce((ini, acc) => {
      return ini + acc.qty;
    }, 0);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      style={{
        background: "black",
        color: "white",
        height: "100vh",
      }}
    >
      <List style={{ marginTop: "10px" }}>
        <Link to="/">
          <ListItemButton sx={{ textAlign: "center" }} className="home-btn">
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item}`}
            style={{ marginBottom: "3px" }}
            className="listItem"
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        className="appbar"
        style={{
          background: "#db6904",
          position: "fixed",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            <Link to="/">Redux Store</Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button key="home" sx={{ color: "#fff" }} className="link-btns">
              <Link to="/">Home</Link>
            </Button>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }} className="link-btns">
                <Link to={`/${item}`}>{item}</Link>
              </Button>
            ))}
          </Box>
          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartQty} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
