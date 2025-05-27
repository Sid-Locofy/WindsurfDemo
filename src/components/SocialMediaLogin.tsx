import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./SocialMediaLogin.module.css";

export type SocialMediaLoginType = {
  className?: string;
  label?: string;
};

const SocialMediaLogin: FunctionComponent<SocialMediaLoginType> = ({
  className = "",
  label,
}) => {
  return (
    <Box className={[styles.socialMediaLogin, className].join(" ")}>
      <Typography
        className={styles.label}
        variant="inherit"
        variantMapping={{ inherit: "div" }}
        sx={{ lineHeight: "160%", letterSpacing: "0.02em", fontWeight: "400" }}
      >
        {label}
      </Typography>
      <Box className={styles.socialLoginContainer}>
        <Box className={styles.socialLogin}>
          <img
            className={styles.socialLoginImageIcon}
            loading="lazy"
            alt=""
            src="/socialloginimage@2x.png"
          />
          <Typography
            className={styles.text}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ letterSpacing: "0.24px", fontWeight: "400" }}
          >
            Google
          </Typography>
        </Box>
        <Box className={styles.socialLogin}>
          <img
            className={styles.socialLoginImageIcon}
            alt=""
            src="/socialloginimage-1@2x.png"
          />
          <Typography
            className={styles.text1}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ letterSpacing: "0.24px", fontWeight: "400" }}
          >
            Facebook
          </Typography>
        </Box>
        <Box className={styles.socialLogin}>
          <img
            className={styles.socialLoginImageIcon}
            alt=""
            src="/socialloginimage-2@2x.png"
          />
          <Typography
            className={styles.text}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ letterSpacing: "0.24px", fontWeight: "400" }}
          >
            Apple
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialMediaLogin;
