import Head from "next/head";
import { useState } from "react";
import generatePDF from "../components/converter";
import Image from "next/image"


export default function Home() {
  const [Qdata, setQdata] = useState({
    username: "",
    date: "",
    price: "45000",
    location: "salem",
    pk: "0"
  });
  const ValueHandler = (e) => {
    setQdata({ ...Qdata, [e.target.name]: e.target.value });
  };
  console.log(Qdata);
  return (
    <div>
      <Head>
        <title>Attirant Webz</title>
        <meta
          name="description"
          content="Qutation Generator for Attirant Webz"
        />
      </Head>
      <div className="form">
        <div className="chld">
          <img src="/90sklicker.png" alt="logo" />
        </div>
        <hr />
        <div className="chld">
          <label htmlFor="username">client</label>
          <input className="input" id="username" type="text" value={Qdata.username} onChange={ValueHandler} name="username" />
        </div>

        <div className="chld">
          <label htmlFor="cars">package</label>
          <select id="cars" className="input" name="pk" onChange={ValueHandler} value={Qdata.pk}>
            <option value="0">Silver</option>
            <option value="1">Gold</option>
            <option value="2">Diamond</option>
            <option value="3">Platinum</option>
          </select>
        </div>
        <div className="chld">
          <label htmlFor="price">price</label>
          <input className="input" id="price" type="number" value={Qdata.price} onChange={ValueHandler} name="price" />
        </div>
        <div className="chld">
          <label htmlFor="date">date</label>
          <input className="input" id="date" type="date" value={Qdata.date} onChange={ValueHandler} name="date" />
        </div>
        <div className="chld">
          <label htmlFor="location">location</label>
          <input className="input" id="location" type="text" value={Qdata.location} onChange={ValueHandler} name="location" />
        </div>
        <button onClick={() => {
          const { date, location, price, username, pk } = Qdata
          if (date && location && price && username && pk)
            generatePDF(Qdata)
          else alert("plese enter the values in the fields")
        }}>Get Quot</button>
      </div>
    </div>
  );
}
