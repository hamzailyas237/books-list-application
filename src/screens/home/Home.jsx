import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetBooksAction } from "../../store/actions/BookActions"
import BookCard from "../../components/card/BookCard"
import { Box } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"
import Navbar from "../../components/navbar/Navbar"
import banner from "../../assets/banner.png"
import "./home.css"

const Home = () => {
  const dispatch = useDispatch()

  const { books, loading } = useSelector((state) => {
    return state.GetBooksReducer
  })

  useEffect(() => {
    dispatch(GetBooksAction())
  }, [])

  return (
    <>
      <Navbar />
      <img className="home-banner" src={banner} alt="banner" />
      <Box
        sx={{
          margin: "75px",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {loading ? (
          <CircularProgress sx={{ color: "#004D6D" }} thickness={4.8} />
        ) : (
          books &&
          books.map((book, i) => {
            return <BookCard key={i} book={book} />
          })
        )}
      </Box>
    </>
  )
}

export default Home
