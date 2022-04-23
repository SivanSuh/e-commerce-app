import { addBasket } from "../redux/action/action";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.values);
  console.log(values);

  const addDispatch = (datas) => {
    dispatch(addBasket(datas));
  };
  return (
    <div>
      <div className="flex justifty-around mx-auto md:w-10/12 w-full h-full  flex-wrap mt-4">
        {values.bookList.map((datas) => {
          return (
            <div
              className="flex flex-col relative border-2 mx-auto md:w-80 w-96 h-96 m-2 p-2 "
              key={datas.id}
            >
              <img
                className="object-contain w-full h-56"
                src={datas.image}
                alt="foto"
              />
              <h4 className="text-sm sm:text-base">{datas.title}</h4>
              <h4 className="my-2 font-bold">{datas.price + " TL"}</h4>
              <div className="flex justify-center items-center  absolute bottom-0 right-0 left-0">
                <button
                  className="font-bold p-2 bg-yellow-400 w-2/4  hover:text-white"
                  onClick={() => addDispatch(datas)}
                >
                  add
                </button>
                <Link
                  to={`detail/${datas.id}`}
                  className="font-bold p-2 w-2/4 bg-black text-white text-center hover:text-yellow-500"
                >
                  <button>Detail</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
