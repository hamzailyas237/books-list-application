import React from "react"
import logo from "../../assets/logo.png"
import { Box, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import Avatar from "@mui/material/Avatar"
import { useDispatch, useSelector } from "react-redux"
import { SearchBooksAction } from "../../store/actions/BookActions"
import "./navbar.css"

const AppNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const dispatch = useDispatch()
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    dispatch(SearchBooksAction(event.target.value))
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        mt: 1,
        flexWrap: "wrap",
      }}
    >
      <img src={logo} alt="logo" />
      <TextField
        id="search"
        type="search"
        placeholder="search"
        value={searchTerm}
        className="search-input"
        onChange={handleChange}
        sx={{
          width: 663,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "100px",
            backgroundColor: "#EFEFEF",
          },
        }}
      />
      <Avatar
        className="profile-avatar"
        alt="Travis Howard"
        src="https://avatars.githubusercontent.com/u/65035919?v=4"
      />
    </Box>
  )
}

export default AppNavbar
