import React, { useEffect, useState} from "react";

//internal import
import { Footer, Header, Table} from "../components/index";
import { getAllHistory } from "../utils/context";

const tokens = () => {
  const [history, setHistory] = useState([]);

  const loadData = async () => {
    try {
      const data = await getAllHistory();
      if (Array.isArray(data)) {
        setHistory(data.reverse());
      } else {
        console.error('Data is not an array:', data);
      }
    } catch (error) {
      console.error('Failed to fetch history data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  
  console.log(history);
  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <div className="p-[80px]">
        <Table history={history} />
      </div>
      <Footer />
    </div>
  )
};

export default tokens;
