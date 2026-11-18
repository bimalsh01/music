/* Decorative card illustrations, copied from the prototype's home artboard. */

const PEG_ROWS = [120, 208, 296];
const PEG_LABELS: [string, string][] = [
  ["D", "G"],
  ["A", "B"],
  ["E", "E"],
];

export function HeadstockArt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 420 606" className="h-full w-auto max-w-full">
      <defs>
        <linearGradient id="homeFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#111213" stopOpacity="0" />
          <stop offset="1" stopColor="#111213" stopOpacity="1" />
        </linearGradient>
      </defs>
      {PEG_ROWS.flatMap((y) => [
        <g key={`l${y}`}>
          <rect x="102" y={y - 5} width="22" height="10" fill="#9AA0A6" />
          <ellipse cx="92" cy={y} rx="17" ry="24" fill="#C9CDD2" />
          <ellipse cx="88" cy={y - 7} rx="7" ry="11" fill="#F2F4F6" />
        </g>,
        <g key={`r${y}`}>
          <rect x="296" y={y - 5} width="22" height="10" fill="#9AA0A6" />
          <ellipse cx="328" cy={y} rx="17" ry="24" fill="#C9CDD2" />
          <ellipse cx="324" cy={y - 7} rx="7" ry="11" fill="#F2F4F6" />
        </g>,
      ])}
      <rect x="166" y="416" width="88" height="190" fill="#2B1A11" />
      <rect x="166" y="478" width="88" height="3" fill="#8F959B" />
      <rect x="166" y="534" width="88" height="3" fill="#8F959B" />
      <rect x="166" y="584" width="88" height="3" fill="#8F959B" />
      <path
        d="M210 18 C252 18 268 32 284 42 L302 64 L296 346 C292 378 256 394 254 416 L166 416 C164 394 128 378 124 346 L118 64 L136 42 C152 32 168 18 210 18 Z"
        fill="#6B3820"
        stroke="#E9DFC8"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M210 30 C246 30 260 42 274 50 L288 68 L283 340 C279 370 248 386 246 410 L174 410 C172 386 141 370 137 340 L132 68 L146 50 C160 42 174 30 210 30 Z"
        fill="none"
        stroke="#4A2614"
        strokeWidth="2"
      />
      <rect x="166" y="416" width="88" height="9" fill="#E9DFC8" />
      <path d="M160 120 L203.2 416 L203.2 606" fill="none" stroke="#C9CDD2" strokeWidth="2.2" />
      <path d="M260 120 L216.8 416 L216.8 606" fill="none" stroke="#C9CDD2" strokeWidth="2.2" />
      <path d="M160 208 L189.6 416 L189.6 606" fill="none" stroke="#C9CDD2" strokeWidth="2.2" />
      <path d="M260 208 L230.4 416 L230.4 606" fill="none" stroke="#C9CDD2" strokeWidth="2.2" />
      <path d="M160 296 L176.0 416 L176.0 606" fill="none" stroke="#39FF88" strokeWidth="3.5" />
      <path d="M260 296 L244.0 416 L244.0 606" fill="none" stroke="#C9CDD2" strokeWidth="2.2" />
      {PEG_ROWS.flatMap((y) => [
        <circle key={`pl${y}`} cx="160" cy={y} r="11" fill="#D5D8DC" />,
        <circle key={`pr${y}`} cx="260" cy={y} r="11" fill="#D5D8DC" />,
      ])}
      {PEG_ROWS.flatMap((y, row) =>
        ([36, 384] as const).map((x, side) => {
          const on = row === 2 && side === 0;
          return (
            <g key={`b${x}${y}`}>
              <circle cx={x} cy={y} r="30" fill={on ? "#39FF88" : "#26292D"} />
              <text
                x={x}
                y={y + 8}
                textAnchor="middle"
                fontFamily="var(--font-bricolage), sans-serif"
                fontWeight="700"
                fontSize="24"
                fill={on ? "#090A0A" : "#EEEDF0"}
              >
                {PEG_LABELS[row][side]}
              </text>
            </g>
          );
        }),
      )}
      <rect x="0" y="486" width="420" height="120" fill="url(#homeFade)" />
    </svg>
  );
}

export function MetronomeArt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 380" className="h-full w-auto max-w-full">
      <rect x="26" y="342" width="248" height="24" fill="#3E1F10" />
      <path d="M112 22 L188 22 L264 342 L36 342 Z" fill="#6B3820" stroke="#E9DFC8" strokeWidth="4" strokeLinejoin="round" />
      <path d="M124 50 L176 50 L226 300 L74 300 Z" fill="#2B1A11" />
      <rect x="138" y="70" width="24" height="2" fill="#8F959B" />
      <rect x="144" y="114" width="12" height="2" fill="#8F959B" />
      <rect x="138" y="158" width="24" height="2" fill="#8F959B" />
      <rect x="144" y="202" width="12" height="2" fill="#8F959B" />
      <rect x="138" y="246" width="24" height="2" fill="#8F959B" />
      <g transform="rotate(-20 150 300)">
        <rect x="148" y="34" width="4" height="266" fill="#D5D8DC" />
        <rect x="130" y="110" width="40" height="26" fill="#39FF88" />
      </g>
      <circle cx="150" cy="300" r="10" fill="#C9CDD2" />
      <circle cx="150" cy="324" r="7" fill="#39FF88" />
    </svg>
  );
}

export function FretboardArt() {
  const strings: [number, number][] = [
    [39, 3], [75, 2.8], [111, 2.5], [147, 2.2], [183, 1.9], [219, 1.6],
  ];
  return (
    <svg aria-hidden="true" viewBox="0 0 260 300" className="h-full w-auto max-w-full">
      <rect x="20" y="30" width="220" height="260" fill="#2B1A11" />
      <rect x="20" y="26" width="220" height="10" fill="#E9DFC8" />
      {[96, 158, 220, 282].map((y) => (
        <rect key={y} x="20" y={y} width="220" height="3" fill="#8F959B" />
      ))}
      {strings.map(([x, w]) => (
        <rect key={x} x={x} y="30" width={w} height="260" fill="#C9CDD2" />
      ))}
      <text x="40" y="18" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fontSize="16" fill="#B8BCC3">×</text>
      <text x="148" y="18" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fontSize="16" fill="#B8BCC3">○</text>
      <text x="220" y="18" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fontSize="16" fill="#B8BCC3">○</text>
      <circle cx="76" cy="190" r="18" fill="#FFFFFF" />
      <circle cx="112" cy="128" r="18" fill="#39FF88" />
      <circle cx="184" cy="66" r="18" fill="#39FF88" />
    </svg>
  );
}
