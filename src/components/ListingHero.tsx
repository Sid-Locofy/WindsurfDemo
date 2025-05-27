import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./ListingHero.module.css";

export type ListingHeroType = {
  className?: string;
};

const ListingHero: FunctionComponent<ListingHeroType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.listingHero, className].join(" ")}>
      <section className={styles.heroImagePlaceholderParent}>
        <img
          className={styles.heroImagePlaceholder}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <Box className={styles.imageCarousel}>
          <img
            className={styles.carouselImageItems}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.carouselImageItems}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.carouselImageItems}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.carouselImageItems}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <img
            className={styles.carouselImageItems4}
            loading="lazy"
            alt=""
            src="/frame-64@2x.png"
          />
        </Box>
      </section>
      <section className={styles.frameParent}>
        <Box className={styles.listingTitleContentParent}>
          <Box className={styles.listingTitleContent}>
            <Box className={styles.listingLocationContentParent}>
              <Box className={styles.listingLocationContent}>
                <Box className={styles.listingNameLocation}>
                  <Typography
                    className={styles.brightwoodsCabin}
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
                  >
                    Brightwoods Cabin
                  </Typography>
                  <Typography
                    className={styles.bridlepathOntarioCanada}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{
                      fontSize: "var(--font-size-16)",
                      letterSpacing: "0.02em",
                      fontWeight: "400",
                    }}
                  >
                    Bridlepath, Ontario, Canada
                  </Typography>
                </Box>
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt=""
                  src="/hearticon.svg"
                />
              </Box>
              <Box className={styles.listingDetails}>
                <Box className={styles.listingRating}>
                  <Typography
                    className={styles.ratingValue}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
                  >
                    5.0
                  </Typography>
                  <img
                    className={styles.ratingStarsIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </Box>
                <Box className={styles.reviewCount}>
                  <Typography
                    className={styles.reviews}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ letterSpacing: "0.02em", fontWeight: "400" }}
                  >
                    200 Reviews
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography
              className={styles.welcomeToOur}
              variant="inherit"
              variantMapping={{ inherit: "div" }}
              sx={{
                fontSize: "var(--font-size-16)",
                lineHeight: "160%",
                letterSpacing: "0.02em",
                fontWeight: "400",
              }}
            >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</Typography>
          </Box>
          <Box className={styles.listingPriceContentParent}>
            <Box className={styles.listingPriceContent}>
              <Box className={styles.priceDetails}>
                <Typography
                  className={styles.pricePerNight}
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{ fontWeight: "700", letterSpacing: "0.02em" }}
                >
                  $658
                </Typography>
                <Box className={styles.nightLabel}>
                  <Typography
                    className={styles.night}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ letterSpacing: "0.02em", fontWeight: "400" }}
                  >
                    /night
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.bookingRecommendation}>
                <Box className={styles.icontrend}>
                  <Box className={styles.iconParent}>
                    <img
                      className={styles.icon}
                      loading="lazy"
                      alt=""
                      src="/icon1.svg"
                    />
                    <Box className={styles.recommendationIconBackground} />
                  </Box>
                </Box>
                <Typography
                  className={styles.night}
                  variant="inherit"
                  variantMapping={{ inherit: "div" }}
                  sx={{ letterSpacing: "0.02em", fontWeight: "400" }}
                >
                  Best time to Book
                </Typography>
              </Box>
            </Box>
            <Button
              className={styles.searchFlightsButton}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#00c29f",
                borderRadius: "6px",
                "&:hover": { background: "#00c29f" },
              }}
            >
              Book this home
            </Button>
          </Box>
        </Box>
        <Box className={styles.hostInfo}>
          <Typography
            className={styles.night}
            variant="inherit"
            variantMapping={{ inherit: "div" }}
            sx={{ letterSpacing: "0.02em", fontWeight: "400" }}
          >
            Hosted by:
          </Typography>
          <Box className={styles.hostDetails}>
            <img
              className={styles.hostImageIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <Box className={styles.hostNameAndJoinDate}>
              <Typography
                className={styles.michelleWard}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  fontWeight: "600",
                  lineHeight: "150%",
                  letterSpacing: "0.02em",
                }}
              >
                Michelle Ward
              </Typography>
              <Typography
                className={styles.joinedInMay}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{
                  fontSize: "var(--font-size-14)",
                  letterSpacing: "0.02em",
                  fontWeight: "400",
                }}
              >
                Joined in May 2021
              </Typography>
            </Box>
            <Box className={styles.hostBadge}>
              <img
                className={styles.hostBadgeIcon}
                alt=""
                src="/vector-1.svg"
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
          </Box>
        </Box>
      </section>
    </section>
  );
};

export default ListingHero;
