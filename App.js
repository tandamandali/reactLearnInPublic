        // asynchronous rendering of ReactDOM which replaces id=root elements
        const heading = React.createElement("h2", {}, "Hello World from React!");
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading);