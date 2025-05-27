import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import Band from "../components/Band";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  return (
    <Box className={styles.signUpPage}>
      <Header />
      <main className={styles.main}>
        <Box className={styles.content}>
          <Typography
            className={styles.formTitle}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "700", letterSpacing: "0.02em" }}
          >
            Create Account
          </Typography>
          <SignUpForm />
        </Box>
      </main>
      <Band />
    </Box>
  );
};

export default SignUpPage;
