import { useState } from "react";
import StarWarsExample from "./Examples/StarWars/StarWarsExample";
import PicsumExample from "./Examples/Picsum/PicsumExample";

function App() {
    const [selectedExample, setSelectedExample] = useState("sw");

    return (
        <>
            <label htmlFor="select-example">Example</label>
            <select
                id="select-example"
                onChange={(e) => setSelectedExample(e.target.value)}
                value={selectedExample}
            >
                <option value="sw">Star Wars</option>
                <option value="picsum">Picsum</option>
            </select>

            {selectedExample === "sw" && <StarWarsExample />}
            {selectedExample === "picsum" && <PicsumExample />}
        </>
    );
}

export default App;
