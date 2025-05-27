import { FunctionComponent, useCallback } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  className?: string;
  listingImage?: string;
  showSuperhostTag?: boolean;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;

  /** Action props */
  onListingItemClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  className = "",
  onListingItemClick,
  listingImage,
  showSuperhostTag,
  listingTitle,
  listingSubtitle,
  rating,
  price,
}) => {
  const navigate = useNavigate();

  const onListingItemClick1 = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <section
      className={[styles.listingItem, className].join(" ")}
      onClick={onListingItemClick}
    >
      <img className={styles.listing01ImageIcon} alt="" src={listingImage} />
      {!!showSuperhostTag && (
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
      )}
      <img
        className={styles.heartIcon}
        loading="lazy"
        alt=""
        src="/heart-icon@2x.png"
      />
      <Box className={styles.itemDetails}>
        <Box className={styles.listingInfo}>
          <Box className={styles.listingCont}>
            <Typography
              className={styles.listingTitle}
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                fontWeight: "600",
                lineHeight: "16px",
                letterSpacing: "0.02em",
              }}
            >
              {listingTitle}
            </Typography>
            <Typography
              className={styles.listingSubtitle}
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                fontSize: "var(--font-size-14)",
                lineHeight: "14px",
                letterSpacing: "0.02em",
                fontWeight: "400",
              }}
            >
              {listingSubtitle}
            </Typography>
          </Box>
          <Box className={styles.ratingCont}>
            <Typography
              className={styles.rating}
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
            >
              {rating}
            </Typography>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </Box>
        </Box>
        <Box className={styles.bottomContainer}>
          <Box className={styles.pricePerNight}>
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
    </section>
  );
};

export default ListingItem;
