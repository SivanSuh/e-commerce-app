import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBasket } from "../redux/action/action";
const Basket = (props) => {
  const totalPrice = props.card.reduce(
    (total, items) => (total += items.price),
    0
  );
  return (
    <div className="h-auto w-10/12 mx-auto">
      <h2 className="md:text-right text-center my-3 text-3xl">
        Total : {totalPrice + " TL"}
      </h2>
      {props.card.map((book) => (
        <div
          key={book.id}
          className="flex justify-around items-center md:flex-nowrap flex-wrap border-2 md:w-7/12 w-full mx-auto my-5 p-2"
        >
          <div className="md:w-2/4 w-full  ">
            <img className="w-48 mx-auto" src={book.image} alt={book.title} />
          </div>
          <div className="md:w-2/4 w-full text-center">
            <h2>{book.title}</h2>
            <button className="p-1 text-white bg-slate-600 mx-1">+</button>
            <button
              className="p-1 text-white bg-slate-600 mx-1"
              onClick={() => props.deleteBasket(book)}
            >
              -
            </button>
            <h2>
              <strong>Price : {book.price + " TL"}</strong>
            </h2>
          </div>
        </div>
      ))}
      <Link to="/">
        <button className="mt-4 bg-slate-900 text-white p-2 rounded hover:text-yellow-500">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};
export default connect(mapStateToProps, { deleteBasket })(Basket);
