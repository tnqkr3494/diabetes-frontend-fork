import React from "react";
import { GoX } from "react-icons/go";
import styled from "styled-components";
import { CheckBoxStyled } from "../pages/pay/ShoppingCart";

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 145px;
  height: 95px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 24px;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
`;

const ItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ItemPriceDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Xbutton = styled(GoX)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

interface IItemProps {
  item: {
    image: string;
    name: string;
    price: number;
  };
  checked: boolean;
  onCheck: (item: IItemProps["item"]) => void;
}

const Item = ({ item, checked, onCheck }: IItemProps) => {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <CartItem>
      <CheckBoxStyled
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <ItemImage src={item.image} alt={item.name} />
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
      </ItemDetails>
      <ItemPriceDetail>
        <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
        <Xbutton />
      </ItemPriceDetail>
    </CartItem>
  );
};

export default Item;
