import React, { useState } from "react";
import product from "../assets/imgs/pr1.png";
import c1 from "../assets/imgs/c1.png";
import c2 from "../assets/imgs/c2.png";
import c3 from "../assets/imgs/c3.png";
import c4 from "../assets/imgs/c4.png";
import c5 from "../assets/imgs/c5.png";
import c6 from "../assets/imgs/c6.png";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import last1 from "../assets/imgs/last1.png";
import last2 from "../assets/imgs/last2.png";
import last3 from "../assets/imgs/last3.png";
import last4 from "../assets/imgs/last4.png";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: product,
      description: "Декоративный куст, с шикарными листьями, горшком",
      price: "2 000 руб. ",
      size: "120 × 212  × 46 ",
    },
    {
      id: 2,
      img: product,
      description: "Декоративный куст, с шикарными листьями, горшком",
      price: "2 000 руб. ",
      size: "120 × 212  × 46 ",
    },
    {
      id: 3,
      img: product,
      description: "Декоративный куст, с шикарными листьями, горшком",
      price: "2 000 руб. ",
      size: "120 × 212  × 46 ",
    },
    {
      id: 4,
      img: product,
      description: "Декоративный куст, с шикарными листьями, горшком",
      price: "2 000 руб. ",
      size: "120 × 212  × 46 ",
    },
    {
      id: 5,
      img: product,
      description: "Декоративный куст, с шикарными листьями, горшком",
      price: "2 000 руб. ",
      size: "120 × 212  × 46 ",
    },
    {
      id: 6,
      img: product,
      description: "Декоративный куст, с шикарными листьями, горшком",
      price: "2 000 руб. ",
      size: "120 × 212  × 46 ",
    },
    {
      id: 7,
      img: product,
      description: "Декоративный куст, с шикарными листьями, горшком",
      price: "2 000 руб. ",
      size: "120 × 212  × 46 ",
    },
    {
      id: 8,
      img: product,
      description: "Декоративный куст, с шикарными листьями, горшком",
      price: "2 000 руб. ",
      size: "120 × 212  × 46 ",
    },
  ]);

  const [collections, setCollection] = useState([
    {
      id: 1,
      img: c3,
    },
    {
      id: 2,
      img: c4,
    },
    {
      id: 3,
      img: c5,
    },
    {
      id: 4,
      img: c6,
    },
  ]);
  const [last, setLast] = useState([
    {
      id: 1,
      img: last1,
      description: "Кресло ARONIA, розовый, ALP00009126",
      price: "88 500 руб. ",
    },
    {
      id: 2,
      img: last2,
      description: "Кресло ARONIA, розовый, ALP00009126",
      price: "88 500 руб. ",
    },
    {
      id: 3,
      img: last3,
      description: "Кресло ARONIA, розовый, ALP00009126",
      price: "88 500 руб. ",
    },
    {
      id: 4,
      img: last4,
      description: "Кресло ARONIA, розовый, ALP00009126",
      price: "88 500 руб. ",
    },
  ]);
  return (
    <>
      {/* Products section started */}
      <section className="products mt-[50px]">
        <div className="container">
          <h1 className="font-[400] text-[24px]">
            Лучшее предложение все предложения
          </h1>

          <div className="product_cards grid grid-cols-4 gap-[10px] mt-[40px]">
            {products.map((product) => (
              <div
                key={product.name}
                className="product1 flex flex-col gap-[40px]"
              >
                <img src={product.img} alt="" />

                <div className="description flex items-center gap-[30px]">
                  <p className="font-[400px] text-[14px]">
                    {product.description}
                  </p>
                  <p className="font-[400px] text-[14px]">{product.price}</p>
                </div>
                <p className="font-[400] text-[8px]">{product.size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Product section ended */}

      {/* section:collection started */}
      <section className="collection mt-[50px]">
        <div className="container">
          <h1 className="font-[400] text-[24px]">Коллекции плитки</h1>
          {/* collection_img */}
          <div className="collection_img mt-[30px] grid grid-cols-2 gap-[30px]">
            {/* left */}
            <div className="left_sec">
              <img src={c1} alt="" />

              <div className="small_imgs flex items-center gap-[20px] mt-[20px]">
                {collections.map((collection) => (
                  <div key={collection.img} className="img1">
                    <img src={collection.img} alt="" />
                  </div>
                ))}
              </div>

              <div className="c_size flex items-center justify-between mt-[20px]">
                <p className="font-[400] text-[16px]">
                  Блестящая коллекция Maracesh
                </p>
                <p className="font-[400] text-[16px]">от 2000 руб./м2</p>
              </div>
            </div>
            {/* right */}
            <div className="left_sec">
              <img src={c2} alt="" />

              <div className="small_imgs flex items-center gap-[20px] mt-[20px]">
                {collections.map((collection) => (
                  <div key={collection.img} className="img1">
                    <img src={collection.img} alt="" />
                  </div>
                ))}
              </div>

              <div className="c_size flex items-center justify-between mt-[20px]">
                <p className="font-[400] text-[16px]">
                  Блестящая коллекция Maracesh
                </p>
                <p className="font-[400] text-[16px]">от 2000 руб./м2</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section"collection ended */}

      {/* seciton:video started*/}
      <section className="video mt-[50px]">
        <div className="container flex flex-col items-center gap-[15px]">
          <div className="header_part flex items-center flex-col gap-[15px]">
            <h1 className="font-[400] text-[24px] text-center">
              Раздел о производстве
            </h1>
            <p className="font-[400] text-[14px] text-center">
              Мы стремимся к европейскому качеству, поэтому используем фасады и
              элементы декора, созданные итальянскими дизайнерами и
              произведенные на ведущих фабриках Италии.{" "}
            </p>
          </div>

          <div className="imgs flex items-center gap-[40px]">
            <img src={img2} alt="" />
            <img src={img1} alt="" />
          </div>
          <p className="font-[400] text-[8px] text-center underline">
            Больше о нас
          </p>
        </div>
      </section>
      {/* section:video ended */}

      {/* section:last started */}
      <section className="last mt-[40px]">
        <div className="container">
          <h1 className="font-[400] text-[24px]">Недавно просмотренные</h1>
          <div className="last_cards grid grid-cols-4 gap-[30xp] mt-[30px]">
            {last.map((l)=>(
                <div key={l.id} className="l1 flex items-center gap-[15px]">
                    <img src={l.img} alt="" />
                    <div className="desc flex flex-col gap-[10px]">
                        <p className="font-[400] text-[14px]">{l.description}</p>
                        <p className="font-[400] text-[14px]">{l.price}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
