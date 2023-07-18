import {useEffect, useState} from "react";

export const useDeviceDetect = () => {
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  });
  return isTouch;
}