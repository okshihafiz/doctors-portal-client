import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
     {
         id: 1,
         name: 'Teeth Orthodonics',
         time: '08.00 AM - 09.00 AM',
         space: 10,
     },
     {
         id: 2,
         name: 'Cosmetic Dentistry',
         time: '09.00 AM - 10.00 AM',
         space: 8,
     },
     {
         id: 3,
         name: 'Teeth Cleaning',
         time: '10.00 AM - 11.00 AM',
         space: 9,
     },
     {
         id: 4,
         name: 'Cavity Protection',
         time: '11.00 AM - 12.00 PM',
         space: 5,
     },
     {
         id: 5,
         name: 'Pediatric Dental',
         time: '06.00 PM - 07.00 PM',
         space: 10,
     },
     {
         id: 6,
         name: 'Oral Surgery',
         time: '07.00 PM - 08.00 PM',
         space: 10,
     },
 ]
 

const AvailableAppiontment = ({date}) => {
   const [bookingSucces, setBookingSuccess] = useState(false)
  
     return (
          <Container>
               <Typography variant="h4" sx={{color : '#1565C0', fontWeight: '600', my:5}}>
               Available Appiontment on {date.toDateString()}</Typography>
               {bookingSucces && <Alert severity="success">Appiontment Booked Successfully</Alert>}
               <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
               {
                    bookings.map(booking => <Booking
                         date={date}
                         key={booking.id}
                         booking={booking}
                         setBookingSuccess={setBookingSuccess}
                        
                    />)  
               }
               </Grid>
               </Box>
          </Container>
     );
};

export default AvailableAppiontment;