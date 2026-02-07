import { useEffect, useState } from "react";

const AnimatedCounter = ({ value, duration = 2000, id }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = `counter-${id}`;

    // ✅ Kalau sudah pernah selesai → langsung set value
    if (sessionStorage.getItem(key) === "done") {
      setCount(value);
      return;
    }

    let start = 0;
    const end = value;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
        sessionStorage.setItem(key, "done"); // 🔒 kunci
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, id]);

  return <span>{count}</span>;
};

export default AnimatedCounter;
