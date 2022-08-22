import Piechart from "./Fregments/PiChart";
import DataSlice from "./Fregments/DataSlice";
import { people } from "./Fregments/mockdata";
import React, { useState, useEffect } from "react";
function Stats({ handleClick }) {
  const [statusCount, setStatusCount] = useState();
  const [statusMarks, setStatusMarks] = useState();
  const [slicedData, setSlicedData] = useState();
  const [statsRenderMennager, setStatRenderMennager] = useState({
    pieChart: true,
    dataSlice: false,
  });

  const handleStatClick = (e) => {
    console.log("eeee", e);

    setSlicedData(
      people.filter((person) => {
        let pic = person.isComing;
        console.log({ e, pic });
        return person.isComing == e;
      })
    );
    setStatRenderMennager((prev) => {
      return {
        pieChart: prev.pieChart ? false : true,
        dataSlice: prev.dataSlice ? false : true,
      };
    });
    console.log({ slicedData, statsRenderMennager });
  };

  let stat = { yes: 0, no: 0, maybe: 0 };
  useEffect(() => {
    const getStats = async () => {
      for (let i = 0; i < people.length - 1; i++) {
        stat[people[i].isComing] = stat[people[i].isComing] + 1;
      }
      setStatusCount(Object.values(stat));
      setStatusMarks(Object.keys(stat));
    };
    getStats();
  }, []);
  return (
    <div>
      {statsRenderMennager.dataSlice && slicedData && (
        <DataSlice handleClick={handleStatClick} data={slicedData} />
      )}
      {statusMarks?.length > 0 && statsRenderMennager.pieChart && (
        <>
          <Piechart
            handleClick={handleStatClick}
            statusCount={statusCount}
            statusMarks={statusMarks}
          />
        </>
      )}
    </div>
  );
}

export default Stats;
