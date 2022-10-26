import React, { useEffect, useMemo, useState } from "react";
import chartData from "../chart/ChartData";
import ChartData from "../chart/chart";
import FeatureInfo from "./featureInfo";
import WidgetSm from "./widgetSm";
import WidgetLg from "./widgetLg";
import styled from "styled-components";
import axios from "axios";

const Widget = styled.div`
  display: flex;
`;

function Home() {
  const [chart, setChart] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      setChart([])
      const TOKEN = JSON.parse(
        JSON.parse(localStorage.getItem("persist:root")).user
      ).user.accessToken;
      try { 
        const res = await axios({
          method: "get",
          url: "http://localhost:5000/api/users/stats",
          headers: { token: `Bearer ${TOKEN}` },
        });
        res.data.map((item) =>
          setChart((prev) => [
            ...prev,  
            { name: MONTHS[item._id - 1], "New User": item.total ,id:item._id },
          ])
       

        );    
     
      } catch {}
      
    }; 
    
    getStats();


  }, [MONTHS]);
  chart.sort((a,b) => a.id - b.id)

  return (
    <div>
      <FeatureInfo />
      <ChartData
      name="name"
        dataKey="New User"
        grid
  
        title="Data Analytics"
        data={chart}
      />
      <Widget>
        <WidgetSm />

        <WidgetLg />
      </Widget>
    </div>
  );
}

export default Home;
