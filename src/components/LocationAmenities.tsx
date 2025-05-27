import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import styles from "./LocationAmenities.module.css";

export type LocationAmenitiesType = {
  className?: string;
};

const LocationAmenities: FunctionComponent<LocationAmenitiesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.locationAmenities, className].join(" ")}>
      <Box className={styles.leftSection}>
        <Typography
          className={styles.amenities}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
        >
          Amenities
        </Typography>
        <Box className={styles.amenitiesList}>
          <Box className={styles.wrappedLayer}>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities01icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Lakeside
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities02icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Kitchen
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities03icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Security cameras on property
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities04icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Wifi
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities05icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Free parking
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                alt=""
                src="/amenities06icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Outdoor shower
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities07icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Hot water
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities08icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Shampoo
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                alt=""
                src="/amenities09icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Fire Extinguisher
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities10icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Freezer
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                loading="lazy"
                alt=""
                src="/amenities11icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Coffee Maker
              </Typography>
            </Box>
            <Box className={styles.item}>
              <img
                className={styles.amenities01Icon}
                alt=""
                src="/amenities12icon.svg"
              />
              <Typography
                className={styles.label}
                variant="inherit"
                variantMapping={{ inherit: "div" }}
                sx={{ fontWeight: "400" }}
              >
                Glass stove
              </Typography>
            </Box>
          </Box>
          <Button
            className={styles.searchFlightsButton}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
            }}
          >
            Show all amenities
          </Button>
        </Box>
      </Box>
      <Box className={styles.mapSection}>
        <Box className={styles.mapContainer}>
          <Box className={styles.mapContent}>
            <Box className={styles.mapLocation}>
              <Typography
                className={styles.whereYoullBe}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
              >
                Where you’ll be
              </Typography>
              <Box className={styles.locationName}>
                <img
                  className={styles.locationIcon}
                  alt=""
                  src="/vector-2.svg"
                />
                <Typography
                  className={styles.theBridlePath}
                  variant="inherit"
                  variantMapping={{ inherit: "div" }}
                  sx={{ fontWeight: "400" }}
                >
                  The Bridle Path
                </Typography>
              </Box>
            </Box>
            <Box className={styles.weather}>
              <Box className={styles.weatherInfo}>
                <img
                  className={styles.suncloudIcon}
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <Box className={styles.weatherInfo1}>
                  <Typography
                    className={styles.temperature}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{
                      fontWeight: "600",
                      lineHeight: "150%",
                      letterSpacing: "0.02em",
                    }}
                  >
                    20°C
                  </Typography>
                  <Typography
                    className={styles.weatherDetail}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{
                      fontSize: "var(--font-size-14)",
                      letterSpacing: "0.02em",
                      fontWeight: "400",
                    }}
                  >
                    Broken clouds
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.frameParent}>
                <Box className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <Box className={styles.cWrapper}>
                    <Typography
                      className={styles.c}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      23°C
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.cWrapper}>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    Sun
                  </Typography>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    27 Aug
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.frameParent}>
                <Box className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <Box className={styles.cWrapper}>
                    <Typography
                      className={styles.c}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      22°C
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.cWrapper}>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    Mon
                  </Typography>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    28 Aug
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.frameParent}>
                <Box className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <Box className={styles.cWrapper}>
                    <Typography
                      className={styles.c}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      23°C
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.cWrapper}>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    Tue
                  </Typography>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    29 Aug
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.frameParent}>
                <Box className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <Box className={styles.cWrapper}>
                    <Typography
                      className={styles.c}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      20°C
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.cWrapper}>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    Wed
                  </Typography>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    30 Aug
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.frameParent}>
                <Box className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <Box className={styles.cWrapper}>
                    <Typography
                      className={styles.c}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      19°C
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.cWrapper}>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    Thu
                  </Typography>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    31 Aug
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.frameParent}>
                <Box className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <Box className={styles.cWrapper}>
                    <Typography
                      className={styles.c}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      24°C
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.cWrapper}>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    Fri
                  </Typography>
                  <Typography
                    className={styles.c}
                    variant="inherit"
                    variantMapping={{ inherit: "div" }}
                    sx={{ fontWeight: "400" }}
                  >
                    1 Sep
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <img
            className={styles.mapContainerChild}
            alt=""
            src="/rectangle-1@2x.png"
          />
          <Box className={styles.mapPlaceholder}>
            <img
              className={styles.mapPlaceholderChild}
              alt=""
              src="/group-3.svg"
            />
            <img
              className={styles.mapPlaceholderItem}
              alt=""
              src="/group-4.svg"
            />
            <img
              className={styles.mapPlaceholderInner}
              alt=""
              src="/vector-6.svg"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default LocationAmenities;
