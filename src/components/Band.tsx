import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Band.module.css";

export type BandType = {
  className?: string;
};

const Band: FunctionComponent<BandType> = ({ className = "" }) => {
  return (
    <section className={[styles.band, className].join(" ")}>
      <Box className={styles.container}>
        <Typography
          className={styles.localhostIncAll}
          variant="inherit"
          variantMapping={{ inherit: "div" }}
          sx={{ fontWeight: "300", lineHeight: "120%" }}
        >
          © 2023 Localhost, Inc. All Rights Reserved
        </Typography>
        <Box className={styles.policyLinks}>
          <Typography
            className={styles.privacyPolicy}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "300", lineHeight: "120%" }}
          >
            Privacy Policy
          </Typography>
          <Typography
            className={styles.privacyPolicy}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "300", lineHeight: "120%" }}
          >{`Terms & Conditions`}</Typography>
          <Typography
            className={styles.privacyPolicy}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "300", lineHeight: "120%" }}
          >
            Contact us
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default Band;
