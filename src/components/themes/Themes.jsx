import React, { useEffect } from 'react';

const Themes = () => {
  useEffect(() => {
    const main = () => {
      const d = new Date();
      const hours = d.getHours();

      const morning = hours < 12;

      document.documentElement.style.setProperty(
        "--background-image",
        morning ? "url('sun.jpg')" : "url('moon.png')"
      );
      document.documentElement.style.setProperty(
        "--theme-color",
        morning ? "rgba(63.5, 76.1, 75.7, 0.7)" : "rgba(19.6, 20.4, 28.2, 0.7)"
      );
      document.documentElement.style.setProperty(
        "--field-color",
        morning ? "rgba(6.7, 12.2, 15.7, 0.773)" : "rgba(66, 66, 92, 0.773)"
      );
    };

    // Call the main function when the component renders
    main();
  }, []); // The empty dependency array ensures this runs only once on mount

  return <main />;
};

export default Themes;
