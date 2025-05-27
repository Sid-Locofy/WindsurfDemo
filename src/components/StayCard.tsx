import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./StayCard.module.css";

export type StayCardType = {
  className?: string;
  stayName?: string;
  stayPlace?: string;
  price?: string;

  /** Style props */
  imageContainerBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  className = "",
  imageContainerBackgroundImage,
  stayName,
  stayPlace,
  price,
}) => {
  const imageContainerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: imageContainerBackgroundImage,
    };
  }, [imageContainerBackgroundImage]);

  return (
    <Box className={[styles.staycard, className].join(" ")}>
      <Box className={styles.imageContainer} style={imageContainerStyle}>
        <Box className={styles.superhostTag}>
          <img
            className={styles.superhostIcon}
            alt=""
            src="/superhost-icon.svg"
          />
          <Typography
            className={styles.superhost}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "500", letterSpacing: "-0.01em" }}
          >
            Superhost
          </Typography>
        </Box>
        <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
      </Box>
      <Box className={styles.container}>
        <Box className={styles.content}>
          <Box className={styles.textContent}>
            <Typography
              className={styles.stayName}
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
            >
              {stayName}
            </Typography>
            <Typography
              className={styles.stayPlace}
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                fontSize: "var(--font-size-14)",
                letterSpacing: "0.02em",
                fontWeight: "400",
              }}
            >
              {stayPlace}
            </Typography>
          </Box>
          <Box className={styles.ratingContainer}>
            <Typography
              className={styles.rating}
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
            >
              4.8
            </Typography>
            <img
              className={styles.reviewCountIcon}
              alt=""
              src="/star-icon.svg"
            />
          </Box>
        </Box>
        <Box className={styles.priceContainer}>
          <Typography
            className={styles.rating}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
          >
            {price}
          </Typography>
          <Typography
            className={styles.night}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{
              fontSize: "var(--font-size-14)",
              letterSpacing: "0.02em",
              fontWeight: "400",
            }}
          >
            /night
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StayCard;
