import data from "../assets/data/foodItems.json";
import { foodItemType } from "../lib/definitions";
import MenuItem from "./MenuItem";

export default function MenuList() {
  const foodItems: foodItemType[] = data;

  return (
    <section className="flex flex-col gap-8 justify-center items-center my-24">
      {foodItems.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </section>
  );
}
