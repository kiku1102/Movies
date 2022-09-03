import { Grid } from "@mui/material";
import ModaLogin from "../Components/ModaLogin";
function Login() {
  return (
    <Grid container textAlign="center" justifyContent="center" style={{ backgroundColor: "#D2F5E3" }}>
      <Grid item xs={4} md={4} sm={4} lg={4}>
        <ModaLogin />
      </Grid>
    </Grid>
  );
}

export default Login;