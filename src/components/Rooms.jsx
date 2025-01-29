import React, { useState } from "react";
import room1 from "../assets/imgs/room1.png";
import room2 from "../assets/imgs/room2.png";
import room3 from "../assets/imgs/room3.png";
import room4 from "../assets/imgs/room4.png";
import f2 from "../assets/imgs/f2.png";
import place1 from "../assets/imgs/place1.png";

function Rooms() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Спальня",
      img: room1,
    },
    {
      id: 2,
      name: "Спальня",
      img: room2,
    },
    {
      id: 3,
      name: "Спальня",
      img: room3,
    },
    {
      id: 4,
      name: "Спальня",
      img: room4,
    },
  ]);

  const [popular, setPopular] = useState([
    {
      id: 1,
      name: "Стулья",
      img: f2,
    },
    {
      id: 2,
      name: "Стулья",
      img: f2,
    },
    {
      id: 3,
      name: "Стулья",
      img: f2,
    },
    {
      id: 4,
      name: "Стулья",
      img: f2,
    },
    {
      id: 5,
      name: "Стулья",
      img: f2,
    },
    {
      id: 6,
      name: "Стулья",
      img: f2,
    },
  ]);
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: "Ресторан Тургенев",
      img: place1,
    },
    {
      id: 2,
      name: "Ресторан Колокольников",
      img: place1,
    },
    {
      id: 3,
      name: "ЗАГС, Тюмень",
      img: place1,
    },
  ]);

  return (
    <>
      {/* section:rooms started */}
      <section className="rooms mt-[40px] ">
        <div className="container">
          <h1 className="font-[400] text-[24px] text-[#000]">
            Каталог по комнатам
          </h1>

          <div className="all_rooms mt-[30px] grid grid-cols-4 gap-[25px]">
            {rooms.map((room) => (
              <div className="room1">
                <img src={room.img} alt="" />
                <p className="font-[400] text-[16px]">{room.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section:rooms ended */}

      {/* section: furniture started */}
      <section className="furniture mt-[50px]">
        <div className="container">
          <h1 className="font-[400] text-[24px] text-[#000]">
            Популярные категории Все категории
          </h1>

          <div className="all_furniture mt-[30px] grid grid-cols-6 gap-[25px]">
            {popular.map((f1) => (
              <div
                key={f1.id}
                className="f1 flex flex-col items-center gap-[8px]"
              >
                <img src={f1.img} alt="" />
                <p>{f1.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section :furniture ended */}

      {/* section:office stared */}
      <section className="office mt-[50px]">
        <div className="container flex items-center gap-[15px]">
          {/* place */}
          <div className="place1 flex flex-col items-start gap-[10px]">
            <h1 className="font-[400] text-[24px]">
              Мебель для ресторанов, гостиниц и офиса
            </h1>
            <p className="font-[400] text-[14px]">
              Мы стремимся к европейскому качеству, поэтому используем фасады и
              элементы декора, созданные итальянскими дизайнерами{" "}
            </p>
            <button className="font-[400] text-[14px] text-center border border-[#000]rounded-[2px] p-[10px] bg-[white] hover:bg-[#cbc9c9] ">
              Подробнее
            </button>
          </div>

          <div className="restaurants grid grid-cols-3 gap-[10px]">
            {/* place2 */}
            {places.map((place) => (
              <div key={place.id} className="place2">
                <img src={place.img} alt="" />
                <p className="font-[400] text-[16px]">{place.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Rooms;
