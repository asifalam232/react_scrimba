import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

function App() {
    const firstName = "Asif";
    const lastName = "Alam";

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning";
    } else if ( hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "night";
    }

    const styles = {
        color: "#FF8C00",
        backgroundColor: "#FF2D00",
        fontSize: "200px",
    };

    return (
        <div>
            <h1>Hello {`${firstName} ${lastName}`}</h1>
            <h1 style={styles}>Good {timeOfDay}</h1>
            <h1>It is currently about {date.getHours() % 12} o'clock</h1>
            <Header />
            <MainContent />
            <Footer />

            {/*<input type="checkbox"/>*/}
            {/*<p>Placeholder Text her</p>*/}

            {/*<input type="checkbox"/>*/}
            {/*<p>Placeholder Text her</p>*/}

            {/*<input type="checkbox"/>*/}
            {/*<p>Placeholder Text her</p>*/}

            {/*<input type="checkbox"/>*/}
            {/*<p>Placeholder Text her</p>*/}
        </div>
    );
}

export default App;