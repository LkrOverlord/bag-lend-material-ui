"use client"
import { Box } from '@mui/material'
import React from 'react'
import SearchSelect from './selectSearch';


const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose'
];

const GolfClubSearchFilter = () => {
  const handleCityChange = (selectedCities: string[]) => {
    console.log('Selected cities:', selectedCities);
  };

  return (
    <Box sx={{
      width: "666.4px",
      minHeight: "84px",
      borderRadius: "16px",
      backgroundColor: "white",
      padding: "16px",
      position: 'relative',
    }}>
      <SearchSelect 
        title="Where would you like to rent?" 
        placeholder="Enter City" 
        options={cities}
        onChange={handleCityChange}
      />
    </Box>
  )
}

export default GolfClubSearchFilter