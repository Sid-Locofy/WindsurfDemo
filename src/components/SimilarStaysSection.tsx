import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import StayCard from "./StayCard";
import styles from "./SimilarStaysSection.module.css";

export type SimilarStaysSectionType = {
  className?: string;
};

const SimilarStaysSection: FunctionComponent<SimilarStaysSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.similarStaysSection, className].join(" ")}>
      <Box className={styles.similarStaysHeader}>
        <Typography
          className={styles.similarStays}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
        >
          Similar stays
        </Typography>
        <Typography
          className={styles.button}
          variant="inherit"
          variantMapping={{ inherit: "div" }}
          sx={{
            fontWeight: "600",
            fontSize: "var(--font-size-16)",
            lineHeight: "26px",
            letterSpacing: "0.46px",
          }}
        >
          View all
        </Typography>
      </Box>
      <Box className={styles.stayCards}>
        <StayCard
          stayName="Missisuaga Aistream"
          stayPlace="Missisauga, Ontario, Canada"
          price="$502"
        />
        <StayCard
          imageContainerBackgroundImage="url('/image-container1@3x.png')"
          stayName="Urban Loft"
          stayPlace="Missisauga, Ontario, Canada"
          price="$499"
        />
        <StayCard
          imageContainerBackgroundImage="url('/image-container2@3x.png')"
          stayName="Forestville Cottages"
          stayPlace="Simcoe, Ontario Canada"
          price="$600"
        />
      </Box>
    </section>
  );
};

export default SimilarStaysSection;
