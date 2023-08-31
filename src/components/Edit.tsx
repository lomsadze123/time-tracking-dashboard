import { styled } from "styled-components";

export const Edit = () => {
  return (
    <Div>
      <p>Rename</p>
      <p>Save as PDF</p>
      <p>Delete</p>
    </Div>
  );
};

export default Edit;

const Div = styled.div`
  position: absolute;
  background-color: hsl(235, 46%, 20%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  bottom: -2rem;
  border-radius: 0 0 1.5rem 1.5rem;
  p {
    color: white;
    font-size: 1.2rem;
  }
`;
