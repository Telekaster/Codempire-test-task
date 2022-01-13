import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesAction } from "./redux/actions";
import Header from "./components/Header";
import Information from "./components/Information";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Information />
    </div>
  );
}
