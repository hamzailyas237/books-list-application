import { useState } from "react"
import Modal from "react-bootstrap/Modal"
import BookRating from "../rating/BookRating"
import "./modal.css"

function AppModal({ bool, book, handleClose }) {
  const [lgShow, setLgShow] = useState(bool)
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {
          setLgShow(false)
          handleClose()
        }}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div className="book-img-popup-container">
            <img
              src={book && book.imageLink}
              alt="book image"
              className="book-img-popup"
            />
          </div>

          <div className="book-data-container">
            <div>
              <h4>{book && book.title}</h4>
            </div>

            <div className="book-data">
              <div>
                <h6>Rating</h6>
                <BookRating rating={book && book.rating} />
              </div>
              <div>
                <h6>Reviews</h6>
                <p>({book && book.reviews})</p>
              </div>
              <div>
                <h6>Price</h6>
                <p>${book && book.price}</p>
              </div>
            </div>

            <div style={{ lineHeight: 0.6 }}>
              <p>
                <b>Author:</b> {book && book.author}
              </p>
              <p>
                <b> Country:</b> {book && book.country}
              </p>
              <p>
                <b>Language:</b> {book && book.language}
              </p>
              <p>
                <b>Year: </b>
                {book && book.year}
              </p>
              <p>
                <b>Pages:</b> {book && book.pages}
              </p>
            </div>

            <div>
              <button className="view-book-details-btn">View Details</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AppModal
