import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState({});

  function toggle(id) {
    setIsShowing({ ...isShowing, [id]: Boolean(!isShowing[id]) });
    // console.log({ ...isShowing, [id]: Boolean(!isShowing[id]) });
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
