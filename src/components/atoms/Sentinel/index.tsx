import { useEffect } from "react";

interface IProps {
  callback: () => any;
}

export function Sentinel({ callback }: IProps) {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        callback();
      }
    });

    intersectionObserver.observe(document.querySelector("#sentinel")!);

    return () => intersectionObserver.disconnect();
  }, [callback]);

  return <div id="sentinel" data-testid="sentinel" />;
}
