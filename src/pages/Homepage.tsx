import { FunctionComponent, useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import Band from "../components/Band";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <Box className={styles.homepage}>
      <Header />
      <HeroContainer />
      <main className={styles.staysSection}>
        <Box className={styles.searchSectionHeader}>
          <Box className={styles.leftSide}>
            <Typography
              className={styles.staysNearby}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{
                fontWeight: "400",
                lineHeight: "120%",
                letterSpacing: "0.02em",
              }}
            >
              Stays nearby:
            </Typography>
            <Typography
              className={styles.torontoOntario}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{
                fontWeight: "600",
                lineHeight: "120%",
                letterSpacing: "0.02em",
              }}
            >
              Toronto Ontario
            </Typography>
          </Box>
          <Box className={styles.layoutSelection}>
            <img
              className={styles.viewButtonsIcon}
              alt=""
              src="/frame-25.svg"
            />
            <img
              className={styles.viewButtonsIcon1}
              alt=""
              src="/view-buttons.svg"
            />
          </Box>
        </Box>
        <section className={styles.homes}>
          <ListingItem
            onListingItemClick={onListingItemClick}
            listingImage="/listing01image@2x.png"
            showSuperhostTag
            listingTitle="Brightwoods Cabins"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
          />
          <ListingItem
            listingImage="/listing02image@2x.png"
            showSuperhostTag={false}
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$502"
          />
          <ListingItem
            listingImage="/listing03image@2x.png"
            showSuperhostTag={false}
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
          />
          <ListingItem
            listingImage="/listing04image@2x.png"
            showSuperhostTag={false}
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
          />
          <ListingItem
            listingImage="/listing05image@2x.png"
            showSuperhostTag={false}
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
          />
          <ListingItem
            listingImage="/listing06image@2x.png"
            showSuperhostTag={false}
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
          />
          <ListingItem
            listingImage="/listing07image@2x.png"
            showSuperhostTag={false}
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
          />
          <ListingItem
            listingImage="/listing08image@2x.png"
            showSuperhostTag={false}
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
          />
          <ListingItem
            listingImage="/listing09image@2x.png"
            showSuperhostTag={false}
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
          />
          <ListingItem
            listingImage="/listing10image@2x.png"
            showSuperhostTag={false}
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$385"
          />
          <ListingItem
            listingImage="/listing11image@2x.png"
            showSuperhostTag={false}
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$385"
          />
          <ListingItem
            listingImage="/listing12image@2x.png"
            showSuperhostTag={false}
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$385"
          />
          <ListingItem
            listingImage="/listing13image@2x.png"
            showSuperhostTag={false}
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$385"
          />
          <ListingItem
            listingImage="/listing14image@2x.png"
            showSuperhostTag={false}
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$385"
          />
          <ListingItem
            listingImage="/listing15image@2x.png"
            showSuperhostTag={false}
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
          />
          <ListingItem
            listingImage="/listing16image@2x.png"
            showSuperhostTag={false}
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
          />
        </section>
        <Button
          className={styles.showMoreButton}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
          }}
        >
          Show more
        </Button>
      </main>
      <Footer />
      <Band />
    </Box>
  );
};

export default Homepage;
