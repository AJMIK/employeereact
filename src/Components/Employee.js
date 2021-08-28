import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Employee() {
    return (
    <Grid container>
        <Grid item xs={12} sm={12} md={12}></Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Typography>Employee Details</Typography>
            <TextField
            type="text"
            variant="outlined"
            label="Employee Name"
            fullWidth
            required
            margin="normal"
            />
            <TextField 
            type="number"
            variant="outlined"
            label="Employee Id"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            type="text"
            variant="outlined"
            label="Designation"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            type="number"
            variant="outlined"
            label="Salery"
            fullWidth
            margin="normal"
            />
            <TextField
            type="text"
            variant="outlined"
            label="Address"
            fullWidth
            margin="normal"
            required
            />
            <TextField
            type="number"
            variant="outlined"
            label="MobNo"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            type="text"
            variant="outlined"
            label="Email"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            type="password"
            variant="outlined"
            label="Password"
            fullWidth
            required
            margin="normal"
            />
            <Button 
            type="submit"
            variant="contained"
            color="secondary"
            >SUBMIT</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}></Grid>
    </Grid>
    )
}
