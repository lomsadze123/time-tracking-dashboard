import { styled } from "styled-components";
import { SwitchButtons } from "./components/SwitchButtons";

function App() {
  return (
    <Body>
      <SwitchButtons />
    </Body>
  );
}

export default App;

const Body = styled.div`
  background-color: hsl(226, 43%, 10%);
  min-height: 100vh;
  &,
  main {
    display: flex;
  }
  justify-content: center;
  align-items: center;
  main {
    flex-direction: column;
    gap: 2.6rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1012px) {
    main {
      flex-direction: row;
      max-width: 101.2rem;
      margin: 0;
    }
  }
`;
