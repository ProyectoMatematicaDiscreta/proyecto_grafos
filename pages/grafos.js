
import Navbar from "../components/Navbar";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function App() {

  return (
    <div>
      <Navbar />

      <div
        style={{
          transition: "all .5s ease-in",
          width: "100vw",
          marginLeft: 0,
          height: "100vh",
          position: "relative"
        }}
      >
        <Excalidraw
          initialData={{
            appState: {
              viewBackgroundColor: "cyan"
            },
            elements: [
              {
                id: "DHWFPSN-r0MzySHwTVMJn",
                type: "circle",
                x: 200,
                y: 200,
                width: 100,
                height: 100,
                angle: 0,
                strokeColor: "#000000",
                backgroundColor: "#40c057",
                fillStyle: "solid",
                strokeWidth: 1,
                strokeStyle: "solid",
                roughness: 1,
                opacity: 100,
                groupIds: [],
                strokeSharpness: "sharp",
                seed: 77373752,
                version: 92,
                versionNonce: 496909640,
                isDeleted: false,
                boundElements: null,
                updated: 1657731262544,
                link: null,
                locked: false
              }
            ]
          }}
        />
      </div>
    </div>
  );
}