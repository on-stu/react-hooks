export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    const handle = () => {
      console.log("leaving");
      onBefore();
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
