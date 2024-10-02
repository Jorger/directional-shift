import React from "react";

const properties = {
  pause: {
    viewBox: "0 0 24 24",
    path: ["M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"],
  },
  play: {
    viewBox: "0 0 24 24",
    path: ["M3 22v-20l18 10-18 10z"],
  },
  undo: {
    viewBox: "0 0 24 24",
    path: [
      "M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z",
    ],
  },
  home: {
    viewBox: "0 0 24 24",
    path: [
      "M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z",
    ],
  },
};

export type TypeIcon = keyof typeof properties;

interface Props {
  type: TypeIcon;
  fill?: string;
}

const Icon = React.memo(({ type = "pause", fill = "white" }: Props) => {
  const showIcon = properties?.[type as TypeIcon] || properties.pause;

  return (
    <div
      className={`icon-wrapper icon-${type}`}
      style={{ pointerEvents: "none" }}
    >
      <svg viewBox={showIcon.viewBox}>
        {showIcon.path.map((d, key) => (
          <path d={d} fill={fill} key={key} />
        ))}
      </svg>
    </div>
  );
});

export default Icon;
