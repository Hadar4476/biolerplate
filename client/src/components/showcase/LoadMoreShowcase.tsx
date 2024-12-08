import { useState, useEffect, useRef } from "react";
import { Stack, Button } from "@mui/material";

const dummayData = Array.from({ length: 12 }, (_, i) => i + 1);

const LoadMoreShowcase = () => {
  const [items, setItems] = useState<number[]>(dummayData);
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...dummayData]);
      setIsLoading(false);
    }, 1000); // Simulate a loading delay
  };

  const handleScroll = () => {
    if (gridRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = gridRef.current;

      if (scrollHeight - scrollTop === clientHeight && !isLoading) {
        loadMoreItems();
      }
    }
  };

  useEffect(() => {
    const container = gridRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLoading]);

  return (
    <Stack
      flex={1}
      gap="24px"
      alignItems="center"
      justifyContent="space-between"
    >
      {/* Scrollable Container */}
      <Stack ref={containerRef} flex={1} className="w-full h-full">
        <Stack
          ref={gridRef}
          flex={1}
          maxHeight={`${containerRef.current?.clientHeight}px`}
          className="w-full h-full overflow-y-auto border border-gray-300 p-4 rounded-md"
        >
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item, index) => (
              <Stack
                key={index}
                alignItems="center"
                justifyContent="center"
                className="h-full p-4 rounded-md bg-blue-200"
              >
                Item {item}
              </Stack>
            ))}
          </div>
          {isLoading && (
            <div className="text-center mt-4 text-gray-500">
              Loading more items...
            </div>
          )}
        </Stack>
      </Stack>

      {/* Load More Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={loadMoreItems}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load More"}
      </Button>
    </Stack>
  );
};

export default LoadMoreShowcase;
