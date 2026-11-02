function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
  const selected = bigShoeImg === imgURL.bigShoe;

  return (
    <button
      type="button"
      aria-label={`Show ${imgURL.name}`}
      aria-pressed={selected}
      className={`min-h-12 cursor-pointer rounded-none border ${
        selected ? "border-volt" : "border-white/15"
      } max-sm:flex-1`}
      onClick={() => {
        if (!selected) changeBigShoeImage(imgURL.bigShoe);
      }}
    >
      <div className="flex h-20 w-20 items-center justify-center bg-card bg-cover bg-center sm:h-36 sm:w-36">
        <img
          src={imgURL.thumbnail}
          alt=""
          width={127}
          height={103}
          className="h-full w-full object-cover"
        />
      </div>
    </button>
  );
}

export default ShoeCard;
