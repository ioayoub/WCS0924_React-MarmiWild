import { useState } from "react";
import { foodItemType } from "../lib/definitions";

export default function MenuItem({ item }: { item: foodItemType }) {
  const { itemName, description, foodImage, price, isFavorite } = item;

  const [isFavoriteIcon, setIsFavoriteIcon] = useState(isFavorite);

  const handleToggleFavorite = () => setIsFavoriteIcon(!isFavoriteIcon);

  return (
    <article className="flex justify-between border border-black w-2/4">
      <img src={foodImage} alt={`Image de ${itemName}`} className="w-52" />
      <div className="flex flex-col justify-around">
        <h2 className="text-center fond-bold text-2xl">{itemName}</h2>
        <p className="text-center">{description}</p>
      </div>
      <div className="flex flex-col justify-around px-4">
        <span>{price} Euros</span>
        <button onClick={handleToggleFavorite}>
          <span className="text-2xl">{isFavoriteIcon ? "❤️" : "♡"}</span>
        </button>
      </div>
    </article>
  );
}
