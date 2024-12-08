const GridShowcase = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="bg-blue-200 p-4 text-center rounded-md">
          Item {index + 1}
        </div>
      ))}
    </div>
  );
};

export default GridShowcase;
