import styled from "styled-components";

export const FeedbackOptionsButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FeedbackButtonsGood = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 8px 24px;
  border-radius: 16px;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  color: #f8f8f8;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  background-color: #2f9e44;
  transition: 0.3s;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background-color: #34b04b;
    transition: 0.4s ease-in-out;
  }
`;
export const FeedbackButtonsNeutral = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 8px 24px;
  border-radius: 16px;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  color: #f8f8f8;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  background-color: #2f9e44;
  transition: 0.3s;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  }
  background-color: #fb9301;
  transition: 0.3s;

  &:hover {
    background-color: #fc9d19;
    transition: 0.4s ease-in-out;
  }
`;
export const FeedbackButtonsBad = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 8px 24px;
  border-radius: 16px;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  color: #f8f8f8;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  background-color: #2f9e44;
  transition: 0.3s;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  }
  background-color: #e03131;
  transition: 0.3s;

  &:hover {
    background-color: #f24343;
    transition: 0.4s ease-in-out;
  }
`;
