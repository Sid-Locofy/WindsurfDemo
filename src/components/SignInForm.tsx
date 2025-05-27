import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import SocialMediaLogin from "./SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import styles from "./SignInForm.module.css";

export type SignInFormType = {
  className?: string;
};

const SignInForm: FunctionComponent<SignInFormType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <section className={[styles.signInForm, className].join(" ")}>
      <form className={styles.form}>
        <Box className={styles.formFields}>
          <TextField
            className={styles.email}
            placeholder="Email address"
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: (
                  <img width="20px" height="20px" src="/iconaccount1.svg" />
                ),
              },
            }}
            sx={{
              "& fieldset": { borderColor: "#d9d9d9" },
              "& .MuiInputBase-root": {
                height: "52px",
                backgroundColor: "#fff",
                paddingRight: "12px",
              },
              "& .MuiInputBase-input": { color: "#787878" },
            }}
          />
          <TextField
            className={styles.email}
            placeholder="Password"
            variant="outlined"
            type="password"
            slotProps={{
              input: {
                endAdornment: (
                  <img width="20px" height="20px" src="/iconpassword1.svg" />
                ),
              },
            }}
            sx={{
              "& fieldset": { borderColor: "#d9d9d9" },
              "& .MuiInputBase-root": {
                height: "52px",
                backgroundColor: "#fff",
                paddingRight: "12px",
              },
              "& .MuiInputBase-input": { color: "#787878" },
            }}
          />
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
            width: 160,
          }}
        >
          Sign in
        </Button>
      </form>
      <Box className={styles.divider} />
      <SocialMediaLogin label="Or sign in with" />
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        {`Don’t have an account yet? `}Sign up
      </div>
    </section>
  );
};

export default SignInForm;
