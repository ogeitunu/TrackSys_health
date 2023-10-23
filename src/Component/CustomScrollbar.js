import styled from "styled-components";

const CustomScrollbar = styled.div`
  width: 8px;
  background-color: #e0e0e0;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.2s;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export default CustomScrollbar;
