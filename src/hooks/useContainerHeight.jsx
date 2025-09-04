import { useEffect, useState } from "react";

export default function useContainerHeight(containerRef) {
  const [containerH, setContainerH] = useState(0);

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setContainerH(containerRef.current.offsetHeight);
      }
    }

    updateSize();

    addEventListener("resize", updateSize);

    return () => removeEventListener("resize", updateSize);
  }, [containerRef]);

  return containerH;
}
