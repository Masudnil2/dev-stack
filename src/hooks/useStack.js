import { useState, useCallback } from "react";
import { toast } from "react-toastify";

export default function useStack() {
  const [stack, setStack] = useState([]);

  const isInStack = useCallback(
    (id) => stack.some((tech) => tech.id === id),
    [stack]
  );

  const addToStack = useCallback(
    (tech) => {
      setStack((current) => {
        if (current.some((item) => item.id === tech.id)) {
          toast.warn(`${tech.name} is already in your stack.`);
          return current;
        }
        toast.success(`${tech.name} added to your stack.`);
        return [...current, tech];
      });
    },
    []
  );

  const removeFromStack = useCallback((tech) => {
    setStack((current) => current.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  }, []);

  const removeAll = useCallback(() => {
    setStack((current) => {
      if (current.length === 0) return current;
      toast.info("Your stack has been cleared.");
      return [];
    });
  }, []);

  return { stack, isInStack, addToStack, removeFromStack, removeAll };
}
