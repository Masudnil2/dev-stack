import { useEffect, useState } from "react";
import TechCard from "./TechCard.jsx";
import Loader from "./Loader.jsx";


export default function TechGrid({ isInStack, onAdd }) {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load technologies");
        return res.json();
      })
      .then((data) => {
        if (isMounted) setTechnologies(data);
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          toast.error("Could not load technologies. Please try again.");
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <p className="py-16 text-center text-sm text-rose-600">{error}</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={isInStack(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
