import React from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import CircularProgress from  "@mui/material/CircularProgress";



const Login = () => {
  return (
       <Container component="main" maxWidth="xs" >
       <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
                <div>
                    <CircularProgress
                      style={{
                        color: "white",
                        width: 20,
                        height: 20,
                        marginRight: 20,
                      }}
                    />
                  </div>

            Sign in
          </Button>
        </form>
       </div>
     </Container>
 
  );
};

export default Login;
