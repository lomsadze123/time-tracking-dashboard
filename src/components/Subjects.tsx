import Data from "../components/Data";
import ellipsis from "../assets/ellipsis.svg";
import { styled } from "styled-components";
import Edit from "./Edit";

export const Subjects = () => {
  return (
    <Div>
      {Data.map((data, index) => {
        return (
          <PaddingTop key={data.title} index={index}>
            <div className="padding">
              <div>
                <h3>{data.title}</h3>
                <img src={ellipsis} alt="ellipsis icon" />
              </div>
              <div>
                <h2>{data.timeframes.weekly.current}hrs</h2>
                <h4>Last Week - {data.timeframes.weekly.previous}hrs</h4>
              </div>
            </div>
            {/* <Edit /> */}
          </PaddingTop>
        );
      })}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  .padding {
    background-color: hsl(235, 46%, 20%);
    padding: 3rem 2.5rem;
    border-radius: 1.5rem;
  }
  div div div,
  div div div + div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div div div + div {
    margin-top: 0.5rem;
  }
  h2,
  h3,
  h4 {
    color: white;
    font-weight: 300;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }
  h2 {
    font-size: 2.88rem;
  }
  h4 {
    color: hsl(236, 100%, 87%);
    font-size: 1.53rem;
    font-weight: 300;
  }

  @media (min-width: 994px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem;
    div div div + div {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.1rem;
      margin-top: 2rem;
    }
    h2 {
      font-size: 4.5rem;
    }
    h4 {
      font-size: 1.4rem;
    }
  }
`;

const PaddingTop = styled.div<{ index: number }>`
  position: relative;
  padding: 4rem 0 0;
  background: ${(props) => `${Data[props.index].backgroundColor}
    url(${Data[props.index].icon}) no-repeat right 1.2rem top 0`};
  border-radius: 1.5rem 1.5rem 1.8rem 1.8rem;

  @media (min-width: 994px) {
    max-width: 22.5rem;
    width: 100%;
  }
`;
