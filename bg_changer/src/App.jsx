import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-4 py-1 rounded-full test-white shadow-lg"
          onClick={() => setcolor("red")}
          style={{backgroundColor: "red"}}
          > Red</button>
          <button className="outline-none px-4 py-1 rounded-full test-white shadow-lg"
           onClick={() => setcolor("Blue")}
          style={{backgroundColor: "Blue"}}
          > Blue</button>
          <button className="outline-none px-4 py-1 rounded-full test-white shadow-lg"
           onClick={() => setcolor("Green")}
          style={{backgroundColor: "Green"}}
          > Green</button>
          <button className="outline-none px-4 py-1 rounded-full test-white shadow-lg"
           onClick={() => setcolor("Yellow")}
          style={{backgroundColor: "Yellow"}}
          > Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full test-white shadow-lg"
           onClick={() => setcolor("pink")}
          style={{backgroundColor: "pink"}}
          > pink</button>
          <button className="outline-none px-4 py-1 rounded-full test-white shadow-lg"
           onClick={() => setcolor("orange")}
          style={{backgroundColor: "orange"}}
          > orange</button> 

        </div>
      </div>
     </div>
    </>
  )
}

export default App
