import Card from "react-bootstrap/Card"
import BookRating from "../rating/BookRating"
import FavoriteIcon from "@mui/icons-material/Favorite"
import IconButton from "@mui/material/IconButton"
import AppModal from "../modal/AppModal"
import { useState } from "react"
import "./card.css"

function BookCard({ book }) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  return (
    <>
      {modalOpen ? (
        <AppModal bool={modalOpen} book={book} handleClose={handleCloseModal} />
      ) : null}
      <Card
        className="card-container"
        onClick={() => {
          setModalOpen(true)
        }}
      >
        <Card.Img variant="top" className="card-img" src={book.imageLink} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <BookRating rating={book.rating} />${book.price}
          <IconButton
            sx={{
              position: "absolute",
              right: "8px",
              top: "15px",
              backgroundColor: "white",
            }}
          >
            <FavoriteIcon sx={{ color: book.is_liked ? "red" : "inherit" }} />
          </IconButton>
        </Card.Body>
      </Card>
    </>
  )
}

export default BookCard
