import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <Box className={styles.container}>
        <Box className={styles.linkColumn}>
          <Typography
            className={styles.footerLinkTitle}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
          >
            Support
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Help Centre
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            AirCover
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Combating discrimination
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Supporting people with disabilities
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Cencellation options
          </Typography>
        </Box>
        <Box className={styles.linkColumn}>
          <Typography
            className={styles.footerLinkTitle}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
          >
            Hosting
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Local home
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Cover for hosts
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Hosting resources
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Community forum
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Hosting responsibly
          </Typography>
        </Box>
        <Box className={styles.linkColumn}>
          <Typography
            className={styles.footerLinkTitle}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
          >
            Localhost
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Newsroom
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            New Features
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Careers
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Investres
          </Typography>
          <Typography
            className={styles.footerLinks}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "400" }}
          >
            Gift cards
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
