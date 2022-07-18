import BackButton from "../../components/BackButton";
import bookcover from "../../assets/images/book-cover/book-cover.png";
import book from "../../assets/images/book-cover/book.png";

import "./index.scss";

const BookCover = () => {
  return (
    <div className="book-cover">
      <BackButton />
      <div className="book-cover__poster">
        <img src={bookcover} alt="book cover" />
      </div>
      <div className="book-cover__content">
        <h1>Book Cover </h1>
        <p>
          Date: 28/08/2019
          <br />
          Role: Art Director
          <br />
          Credit: George Antelava
        </p>
      </div>

      <div className="book-cover__book">
        <img src={book} alt="book cover" />
        <p>
          This art was inspired by the book itself. It's about the lost story of a man who traveled around the globe. The main protagonist faced many obstacles. His name was lost as the first man who circled the globe.
        </p>
      </div>
    </div>
  );
};

export default BookCover;
