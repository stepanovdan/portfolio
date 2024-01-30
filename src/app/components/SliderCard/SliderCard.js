function SliderCard({ item, index }) {
  return (
    <>
      <div className="h-[200px] lg:h-[450px] md:h-[400px] sm:h-[200px] lg:w-[650px] md:w-[450px] sm:w-[300px] w-[300px] relative m-auto">
        <div className="h-full w-full group cursor-all-scroll z-50 relative">
          <img src={item.images[0]} alt="daw"></img>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
