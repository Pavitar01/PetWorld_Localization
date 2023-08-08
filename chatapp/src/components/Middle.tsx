import React, { useEffect, useState } from "react";
import { usersdata } from "../dummy";
import Card from "./Card";
type arrtype = { id: number; username: string; flag: number };
const Middle = () => {
  const [search, setSearch] = useState<string>();
  const [arr, setArr] = useState<arrtype[] | []>();
  useEffect(() => {
    setArr(usersdata);
  }, []);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArr = usersdata?.filter((index) =>
      index.username.toLowerCase().includes(e.target.value)
    );
    setArr(newArr);
  };
  return (
    <div className="middleBoard">
      <div className="input">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      {arr?.map((i, index) => {
        return <Card username={i.username} flag={i.flag} />;
      })}
    </div>
  );
};

export default Middle;
