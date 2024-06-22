import { useEffect, useState } from "react";

export const useDebounce = ({keyword, delay = 500}: {
  keyword: string;
  delay?: number;
}) => {
  const [debouncedValue, setDebouncedValue] = useState(keyword);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(keyword);
    }, delay);

    return () => clearTimeout(handler);
  }, [keyword]);

  return debouncedValue;
}