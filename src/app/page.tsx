import Image from "next/image";
import { Client } from "./api/clients/interfaces";
import { cache } from "react";

export default async function Home() {
  const RES = await fetch('http://localhost:3000/api/clients',{ cache:'force-cache'});
  const data = await RES.json();
 console.log(data)
  return (
    <main>
      {
        data.map((item:Client) => {
          return (
            <>
            <div className="border bg-gray-400 ">
              <div>{item.name}</div>
              <div>{item.address}</div>
            </div>
            </>
          )
        })
      }
    </main>
  );
}
