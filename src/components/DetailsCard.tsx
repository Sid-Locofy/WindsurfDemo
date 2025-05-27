import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  className = "",
  image,
  title,
  description,
}) => {
  return (
    <Box className={[styles.detailscard, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <Box className={styles.highlightContent}>
        <Typography
          className={styles.title}
          variant="inherit"
          variantMapping={{ inherit: "div" }}
          sx={{
            fontWeight: "600",
            lineHeight: "150%",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </Typography>
        <Typography
          className={styles.description}
          variant="inherit"
          variantMapping={{ inherit: "div" }}
          sx={{
            fontSize: "var(--font-size-16)",
            letterSpacing: "0.02em",
            fontWeight: "400",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsCard;
