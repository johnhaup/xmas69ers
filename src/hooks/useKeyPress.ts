import { useState, useEffect, useCallback } from "react";

export function useKeyPress(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  const downHandler = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey]
  );

  const upHandler = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
}
