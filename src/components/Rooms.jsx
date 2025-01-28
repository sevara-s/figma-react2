import React, { useState } from "react";
import room1 from "../assets/imgs/room1.png";
import room2 from "../assets/imgs/room2.png";
import room3 from "../assets/imgs/room3.png";
import room4 from "../assets/imgs/room4.png";
import f1 from "../assets/imgs/f1.png";
import f2 from "../assets/imgs/f2.png";

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
              <div key={f1.id} className="f1 flex flex-col items-center gap-[8px]">
                <img src={f1.img} alt="" />
                <p>{f1.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Rooms;
