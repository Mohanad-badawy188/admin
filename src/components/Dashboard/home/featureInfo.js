import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import axios from "axios";

const Container = styled.div``;
const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
`;
const Features = styled.div`
  padding: 16px;
  
  width: 60%;
  border-radius: 15px;
  margin: 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const FeatureTitle = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
`;
const FeatureData = styled.div`
  display: flex;

  justify-content: center;
  padding: 5px;
  text-align: center;
`;
const FeatureIcon = styled.div`
  margin-left: 10px;
  display: flex;

  text-align: center;
  align-items: center;
`;
const Money = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const FeatureSmallData = styled.div`
  text-align: center;
  margin-top: 6px;

  color: gray;
`;

function FeatureInfo() {
  const [income, setIncome] = useState([]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      const TOKEN = JSON.parse(
        JSON.parse(localStorage.getItem("persist:root")).user
      ).user.accessToken;

      try {
        const res = await axios({
          method: "get",
          url: "http://localhost:5000/api/order/income",
          headers: { token: `Bearer ${TOKEN}` },
        });
        setIncome(res.data);
        setPercent((res.data[0].total * 100) / res.data[1].total - 100);
      } catch {}
    };

    getIncome();
  },[]);
  income.sort((a,b) => a.id - b.id)
  return (
    <Container>
      <FeaturesContainer>
        <Features>
          <FeatureTitle>Sales</FeatureTitle>
          <FeatureData>
            <Money> $ {income[0]?.total} 
            </Money>
            <FeatureIcon>
              {percent}%{" "}

      {  percent < 0 ?     <ArrowDownward sx={{ color: "red" }} fontSize="very small" /> :<ArrowUpward  sx={{color:"green"}} fontSize="very small"/>    
     
     
   }
            </FeatureIcon>
          </FeatureData>
          <FeatureSmallData>compared to last month </FeatureSmallData>
        </Features>

      </FeaturesContainer>
    </Container>
  );
}

export default FeatureInfo;
