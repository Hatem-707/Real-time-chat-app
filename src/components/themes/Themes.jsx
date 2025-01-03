const Themes = () => {
    var d = new Date();
    var hours = d.getHours();
    
    let morning = hours<12 ? true: false;
    
    if (morning) {
      document.documentElement.style.setProperty(
        "--background-image", morning ? "url('/assets/sun.jpg')" : "url('/assets/moon.png')"
      )
      document.documentElement.style.setProperty(
        "--theme-color", morning ? "rgba(63.5,76.1,75.7,0.7)":"rgba(19.6, 20.4, 28.2, 0.7)"
      )
      document.documentElement.style.setProperty(
        "--field-color", morning ? "rgba(6.7, 12.2, 15.7, 0.773)" : "rgba(66, 66, 92, 0.773)"
      )
      document.documentElement.style.setProperty(
        "--message-color", morning ?  "rgb(174, 58, 38)" : "rgb(122, 21, 140)"
      )
      document.documentElement.style.setProperty(
        "--add-color", morning ?  "rgba(6.7, 12.2, 15.7, 0.773)" : "rgba(66, 66, 92, 0.9)"
      )
    
    }
}

export default Themes
