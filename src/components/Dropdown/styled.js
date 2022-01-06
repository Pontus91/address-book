import styled from "styled-components";
import { themeColors } from "../../styles/config";
import { MdFilterList } from 'react-icons/md';

export const DropdownContainer = styled.section`
  height: 45px;
  width: 80px;
  margin-left: 1rem;
  border-radius: 4px;
  display: flex;
  border: none;
  width: 65%;
  max-width: 120px;
  flex-direction: column;
  position: relative;
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themeColors.white[500]};
  box-shadow: ${themeColors.shadows.primary};
  border: 1px solid ${themeColors.gray[100]};
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const DropdownIcon = styled(MdFilterList)`
  color: ${themeColors.black[500]};
  margin-right: .5rem;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${themeColors.black[500]};
  color: ${themeColors.black[500]};
  padding: 5px;
`;

export const CheckboxContainer = styled.div`
  position: absolute;
  right: -1px;
  top: 50px;
  text-align: center;
  width: 200px;
  border-radius: 4px;
  border: 1px solid ${themeColors.gray[100]};
  background: ${themeColors.white[500]};
  padding: 1rem;
  box-shadow: ${themeColors.shadows.primary};
  z-index: 1;
`;
