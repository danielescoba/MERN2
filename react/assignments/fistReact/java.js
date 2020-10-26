const App = () => {
        // Here we simply created a function that returns a new React element
        return React.createElement("h1", {}, "Our First React page has rendered");
    }
    /* 
    *  SIDE NOTE:
    *  Because the function above returns 1 thing, we can re-write this function in 1 line:
    *  const App = () => React.createElement("h1", {}, "Our First React page has rendered");
    */
    // Then we call the function that returns the element that we intend to render.
    ReactDOM.render(App(), document.getElementById("root"));
    // Though, take a mental note on how we are firing the App function just like any other function
    