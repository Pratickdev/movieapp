import React, { useEffect } from "react";
import Head from "./Head";
import Footer from "./Footer";
import Figure from "react-bootstrap/Figure";
import CloseButton from "react-bootstrap/CloseButton";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { CountContext } from "./Home";
import "../src/Asset/css/cart.css";
import { cartData } from "./redux/CartSlice";
export default function Cart() {
  const cartProduct = useSelector((state) => state.Cart.value);
  const { count, setCount , selected, setSelected} = useContext(CountContext);
  const dispatch = useDispatch();
  useEffect(() => {}, [cartProduct]);
  function handelClick(id) {
    setCount(count - 1);
    let alldata = cartProduct;
    let filteredACartdata = alldata.filter((eachdata) => eachdata.id !== id);
    let allIndex=selected
    let filteredIndex=allIndex.filter((each) => each !== id);
    console.log(filteredIndex);
    setSelected(filteredIndex);
    dispatch(cartData(filteredACartdata));
  }

  if (cartProduct.length < 1)
    return (
      <>
        <Head />
        <Container>
          <div className="App bodycolor">
            <Figure.Caption>Empty Cart</Figure.Caption>
          </div>
        </Container>
      </>
    );
  return (
    <>
      <div className="App bodycolor">
        <Head />
        <Container>
          <div className="row" style={{ padding: "10px" }}>
            {cartProduct.map((each) => (
              <div className="col-md-2">
                <Figure key={each.id}>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={each.pic}
                    className="img"
                  />
                  <Figure.Caption   style={{ fontWeight: "700" }}
>
                    {each.name}
                    <CloseButton
                      onClick={() => {
                        handelClick(each.id);
                      }}
                    />
                  </Figure.Caption>
                </Figure>
              </div>
            ))}
          </div>
          {/* <Footer /> */}
        </Container>
      </div>
    </>
  );
}
