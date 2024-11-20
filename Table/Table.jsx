import { useState, useEffect } from "react";
import ReusableTable from "./ReusableTable";
const API = "https://mocki.io/v1/41294b43-e54c-4b09-b520-4cc1650789ac";

const Table = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [search, setSearch] = useState("");
  const [tosort, settosort] = useState(0);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const data = await fetch(API);
    const json = await data.json();
    console.log(json?.data);
    setList(json?.data);
  };

  useEffect(() => {
    const record = list.filter((ele) => {
      return ele.name.toLowerCase().includes(search.toLowerCase());
    });
    setList2(record);
  }, [search]);

  const remove = (index) => {
    console.log(index + " from func");
    if (!search) {
      setList((currentlist) => currentlist.filter((item) => item.id !== index));
    } else {
      setList2((currentlist) =>
        currentlist.filter((item) => item.id !== index)
      );
    }
  };
  useEffect(() => {
    setList((currentlist) =>
      currentlist.sort(function (a, b) {
        return a.price - b.price;
      })
    );
  }, [tosort]);

  return (
    <>
      <input
        onChange={(e) => {
          value = { search };
          setSearch(e.target.value);
        }}
        placeholder="Search By Name..."
      />
      {!search ? (
        <ReusableTable arrdata={list} remove={remove} settosort={settosort} />
      ) : (
        <ReusableTable arrdata={list2} remove={remove} settosort={settosort} />
      )}
    </>
  );
};

export default Table;
