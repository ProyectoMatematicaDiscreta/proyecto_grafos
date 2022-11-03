import { motion } from "framer-motion";
export default function Figures2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={920}
      height={324.963}
      className="mt-4 ml-4"
      transform="translate(550)"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={0.043}
          y1={0.428}
          x2={1.384}
          y2={1.172}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#47ffcd" stopOpacity={0.9} />
          <stop offset={1} stopColor="#00d5ff" stopOpacity={0.9} />
        </linearGradient>
      </defs>
      <path
        d="M915.283 233.976q61.072 31.007-54.528 37.047t-118.873 40.268q-3.272 34.228-65.434 55.167t-138.5-11.275q-76.34-32.215-160.314-10.872t-98.151-15.3q-14.177-36.644-99.242-42.282T71.182 255.72q-23.993-25.369-38.17-53.557t43.623-49.127a849.377 849.377 0 0 1 115.6-33.02q57.8-12.08 100.332-28.59T392.9 58q57.8-16.913 119.963.805t150.5 6.443q88.337-11.271 143.953 9.266t114.51 43.086q58.89 22.55-4.362 53.959t-2.181 62.417Z"
        transform="translate(-30.22 -49.744)"
        fill="url(#linear-gradient)"
      />
      <text
        transform="translate(50 110)"
        fill="green"
        fontSize={32}
        fontFamily="SegoeUI-Bold, Segoe UI"
        fontWeight={700}
      >
        <tspan x={300} y={-40}>
          Beneficion de los Grafos  
        </tspan>

      </text>
      <text
        transform="translate(50 140)"
        fill="grey   "
        fontSize={14}
        fontFamily="SegoeUI-Bold, Segoe UI"
        fontWeight={700}
      >
        <tspan x={0} y={10}>
          Es una estructura matemática que permite modelar problemas de la vida cotidiana, mediante, como hemos visto, una   
        </tspan>
        <tspan x={0} y={30}>
          representación gráfica formada por nodos o vértices que muestra a los actores y aristas que sirven para representar los 
        </tspan>
        <tspan x={0} y={50}>
         lazos o relaciones entre los actores.
        </tspan>
      </text>
    </svg>

  )
};
     