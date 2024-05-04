import React from "react";

type AnimalItemProps = {
  animal: string;
};

const AnimalItem = ({ animal }: AnimalItemProps) => {
  return (
    <li>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  );
};

export default AnimalItem;
