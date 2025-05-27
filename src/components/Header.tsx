import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <Box className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <nav className={styles.navLinks}>
          <Typography
            className={styles.home}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Home
          </Typography>
          <Typography
            className={styles.home}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Stays
          </Typography>
          <Typography
            className={styles.home}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Become a host
          </Typography>
        </nav>
      </Box>
    </header>
  );
};

export default Header;
