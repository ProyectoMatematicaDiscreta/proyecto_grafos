export default function Logo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={38} {...props}>
      <defs>
        <linearGradient
          id="a"
          x1={0.382}
          y1={1.447}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#c5e300" />
          <stop offset={1} stopColor="#19a92b" />
        </linearGradient>
      </defs>
      <g data-name="Grupo 1" transform="translate(-509 -307)">
        <rect
          data-name="Rect\xE1ngulo 2"
          width={40}
          height={10}
          rx={5}
          transform="translate(509 321)"
          fill="url(#a)"
        />
        <circle
          data-name="Elipse 1"
          cx={7}
          cy={7}
          r={7}
          transform="translate(522 307)"
          fill="#efff00"
        />
        <circle
          data-name="Elipse 2"
          cx={7}
          cy={7}
          r={7}
          transform="translate(522 331)"
          fill="#19a92b"
        />
      </g>
    </svg>
  )
};
