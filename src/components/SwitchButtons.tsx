import { styled } from "styled-components";
import Jeremy from "../assets/jeremy.png";
import { Subjects } from "./Subjects";
import { useState } from "react";
import { Timeframes } from "./Subjects";

export const SwitchButtons = () => {
  const time = ["Daily", "Weekly", "Monthly"];
  const [button, setButton] = useState(1);
  const [titles, setTitle] = useState<keyof Timeframes>("weekly");

  const handleClick = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (button !== index) {
      setButton(index);
    }
    e.currentTarget.textContent &&
      setTitle(e.currentTarget.textContent.toLowerCase() as keyof Timeframes);
  };

  return (
    <main>
      <Div>
        <div>
          <img src={Jeremy} alt="Jeremy image" />
          <article>
            <h4>Report for</h4>
            <p>Jeremy Robson</p>
          </article>
        </div>
        <article>
          {time.map((time, index) => (
            <Button
              color={index === button}
              onClick={(e) => {
                handleClick(index, e);
              }}
              key={time}
            >
              {time}
            </Button>
          ))}
        </article>
      </Div>
      <Subjects titles={titles} />
    </main>
  );
};

const Div = styled.div`
  &,
  div {
    border-radius: 1.5rem;
  }
  background-color: hsl(235, 46%, 20%);
  img {
    max-width: 7rem;
    width: 100%;
    height: auto;
    border: 0.3rem solid white;
    border-radius: 50%;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background-color: hsl(246, 80%, 60%);
    padding: 3rem 3.5rem;
    h4 {
      color: hsl(236, 100%, 87%);
      font-size: 1.44rem;
      font-weight: 300;
      opacity: 0.7;
    }
    p {
      color: white;
      font-size: 2.34rem;
      font-weight: 300;
      opacity: 0.8;
    }
  }
  div + article {
    display: flex;
    justify-content: space-between;
    padding: 2.8rem 3rem;
  }
  button {
    background-color: transparent;
    border: 0;
    font-size: 1.935rem;
    opacity: 0.8;
  }

  @media (min-width: 1012px) {
    img {
      max-width: 8rem;
    }
    div,
    div + article {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    div + article {
      gap: 2rem;
    }
    div {
      padding: 2.5rem 7rem 7rem 2.2rem;
      gap: 3.5rem;
    }
    div h4 {
      font-size: 1.7rem;
    }
    div p {
      font-size: 3.6rem;
    }
    button {
      font-size: 1.7rem;
      cursor: pointer;
    }
  }
`;

const Button = styled.button<{ color: boolean }>`
  color: ${(props) => (props.color ? "white" : "hsl(235, 45%, 61%)")};
  font-weight: ${(props) => (props.color ? 700 : 300)};
`;
