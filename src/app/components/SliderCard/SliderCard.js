function SliderCard({ item, index }) {
  return (
    <>
      <div className="h-[200px] lg:h-[450px] md:h-[400px] sm:h-[200px] lg:w-[650px] md:w-[450px] sm:w-[300px] w-[300px] relative m-auto">
        <div className="h-full w-full group cursor-all-scroll z-50 relative">
          <img
            src={item.images[0]}
            alt="portfolio thumbnail"
            className="w-full h-[200px] lg:h-[350px] md:h-[300px] max-w-[100%] rounded-lg"
          ></img>
        </div>
        <div
          className="absolute top-14 sm:left-12 rounded-lg bg-white h-[200px] lg:h-[350px] md:h-[300px] w-full"
          style={{ boxShadow: "#48AFDE -10px 10px 20px 10px" }}
        >
          <div className="relative h-[200px] lg:h-[350px] md:h-[300px] w-[100%]">
            <p className="absolute bottom-3 left-4 text-lg font-[300]">
              {item.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
