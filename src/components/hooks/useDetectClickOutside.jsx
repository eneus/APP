import { useEffect } from 'react';

function useOutsideHandler(ref, activeSearch, setActiveSearch, condition) {
    // remove class .active if clicker outside
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && (condition === null || condition === "")) {
        setActiveSearch(false)
      }
    }
  
    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  
    return { ref, activeSearch };
  }

  export default useOutsideHandler;