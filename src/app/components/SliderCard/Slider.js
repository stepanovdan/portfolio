import SliderCard from "./SliderCard";
import { DataArray } from "@/app/data";

function Slider() {
  return (
    <div>
      {DataArray.map((item, index) => (
        <div className="my-slider" key={DataArray.name}>
          <SliderCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
}

export default Slider;
