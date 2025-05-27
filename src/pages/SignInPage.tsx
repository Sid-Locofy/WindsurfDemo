import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";
import Band from "../components/Band";
import styles from "./SignInPage.module.css";

const SignInPage: FunctionComponent = () => {
  return (
    <Box className={styles.signInPage}>
      <Header />
      <main className={styles.main}>
        <Box className={styles.content}>
          <Typography
            className={styles.formTitle}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "700", letterSpacing: "0.02em" }}
          >
            Sign in
          </Typography>
          <SignInForm />
        </Box>
      </main>
      <Band />
    </Box>
  );
};

export default SignInPage;
