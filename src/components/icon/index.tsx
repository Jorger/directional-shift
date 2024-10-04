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
      "M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z",
    ],
  },
  home: {
    viewBox: "0 0 24 24",
    path: [
      "M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z",
    ],
  },
  back: {
    viewBox: "0 0 32 32",
    path: [
      "M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z",
    ],
  },
  copy: {
    viewBox: "0 0 24 24",
    path: [
      "m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z",
    ],
  },
  twitter: {
    viewBox: "0 0 24 24",
    path: [
      "M16.0258 5H18.1724L13.4825 10.5068L19 18H14.6797L11.2962 13.4553L7.42453 18H5.27648L10.2928 12.11L5 5H9.42964L12.4882 9.15395L16.0258 5ZM15.2723 16.6799H16.4619L8.78336 6.25073H7.50699L15.2723 16.6799Z",
    ],
  },
  facebook: {
    viewBox: "0 0 24 24",
    path: [
      "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z",
    ],
  },
  linkedin: {
    viewBox: "0 0 24 24",
    path: [
      "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    ],
  },
  close: {
    viewBox: "0 0 24 24",
    path: [
      "M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z",
    ],
  },
  info: {
    viewBox: "0 0 1000 1000",
    path: [
      "M619.2,10c65.7,0,98.5,44.7,98.5,95.9c0,63.9-57,123.1-131.3,123.1c-62.2,0-98.4-36.8-96.7-97.5C489.7,80.4,532.8,10,619.2,10L619.2,10z M417.1,990c-51.8,0-89.8-31.9-53.6-172.7l59.5-249.5c10.3-39.9,12.1-55.9,0-55.9c-15.5,0-82.8,27.5-122.6,54.7l-25.9-43.1c126-107.1,271-169.9,333.2-169.9c51.8,0,60.4,62.4,34.5,158.3l-68.2,262.2c-12.1,46.3-6.9,62.3,5.2,62.3c15.5,0,66.5-19.2,116.6-59.1l29.4,39.9C602.8,942,468.9,990,417.1,990L417.1,990z",
    ],
  },
  share: {
    viewBox: "0 0 24 24",
    path: [
      "M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z",
    ],
  },
  github: {
    viewBox: "0 0 1000 1000",
    path: [
      "M670.4,568.2c18.5,0,34.4,9.2,47.9,27.7c13.5,18.5,20.2,41.2,20.2,68.2s-6.7,49.7-20.2,68.2c-13.5,18.5-29.5,27.7-47.9,27.7c-19.9,0-36.6-9.2-50.1-27.7c-13.5-18.5-20.2-41.2-20.2-68.2s6.7-49.7,20.2-68.2C633.9,577.4,650.5,568.2,670.4,568.2L670.4,568.2 M911.2,318.9c52.6,56.8,78.8,125.7,78.8,206.7c0,52.6-6,99.8-18.1,141.7c-12.1,41.9-27.3,76-45.8,102.3c-18.5,26.3-41.2,49.4-68.2,69.2s-51.8,34.4-74.6,43.7s-48.6,16.3-77.8,21.3c-29.1,5-51.1,7.8-66,8.5c-14.9,0.7-30.9,1.1-47.9,1.1c-4.3,0-17,0.4-38.3,1.1c-21.3,0.7-39.1,1.1-53.3,1.1s-32-0.4-53.3-1.1c-21.3-0.7-34.1-1.1-38.3-1.1c-17,0-33-0.4-47.9-1.1c-14.9-0.7-36.9-3.6-66-8.5c-29.1-5-55-12.1-77.8-21.3c-22.7-9.2-47.6-23.8-74.6-43.7c-27-19.9-49.7-43-68.2-69.2c-18.5-26.3-33.7-60.4-45.8-102.3C16,625.3,10,578.1,10,525.6c0-81,26.3-149.8,78.8-206.7c-5.7-2.8-6-31.2-1.1-85.2S104.4,130,122.9,84.6c65.3,7.1,146.3,44,242.9,110.8c32.7-8.5,77.4-12.8,134.2-12.8c59.7,0,104.4,4.3,134.2,12.8c44-29.8,86.3-54,126.8-72.4c40.5-18.5,69.9-29.1,88.4-32l27.7-6.4c18.5,45.4,30.2,95.2,35.2,149.1C917.2,287.7,916.9,316.1,911.2,318.9L911.2,318.9 M502.1,866.4c117.9,0,207-14.2,267.4-42.6c60.4-28.4,90.5-86.6,90.5-174.7c0-51.1-19.2-93.7-57.5-127.8c-19.9-18.5-43-29.8-69.2-34.1s-66.4-4.3-120.4,0c-54,4.3-90.9,6.4-110.8,6.4H500h-2.1c-22.7,0-52.2-1.4-88.4-4.3c-36.2-2.8-64.6-4.6-85.2-5.3c-20.6-0.7-43,1.8-67.1,7.5c-24.1,5.7-44,15.6-59.7,29.8c-36.9,32.7-55.4,75.3-55.4,127.8c0,88.1,29.8,146.3,89.5,174.7c59.7,28.4,148.4,42.6,266.3,42.6H502.1L502.1,866.4 M331.7,568.2c18.5,0,34.4,9.2,47.9,27.7c13.5,18.5,20.2,41.2,20.2,68.2s-6.7,49.7-20.2,68.2c-13.5,18.5-29.5,27.7-47.9,27.7c-19.9,0-36.6-9.2-50.1-27.7c-13.5-18.5-20.2-41.2-20.2-68.2s6.7-49.7,20.2-68.2C295.1,577.4,311.8,568.2,331.7,568.2L331.7,568.2",
    ],
  },
  devto: {
    viewBox: "0 32 448 448",
    path: [
      "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z",
    ],
  },
  games: {
    viewBox: "0 0 24 24",
    path: [
      "M6 2l1.171.203c-.355 2.245.791 2.519 2.699 2.874 1.468.273 3.13.622 3.13 3.284v.639h-1.183v-.639c0-1.556-.48-1.809-2.164-2.122-2.583-.48-4.096-1.391-3.653-4.239zm18 14c0 3.312-2.607 6-5.825 6-1.511 0-2.886-.595-3.921-1.565-1.311-1.229-3.278-1.132-4.55.038-1.03.948-2.389 1.527-3.879 1.527-3.217 0-5.825-2.688-5.825-6s2.608-6 5.825-6l12.563.007c3.118.116 5.612 2.755 5.612 5.993zm-15-1h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zm4 1h-2v1h2v-1zm4-2c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1zm0 2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm2 2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm2-2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1z",
    ],
  },
  gear: {
    viewBox: "0 0 24 24",
    path: [
      "M24 14v-4c-1.619 0-2.906.267-3.705-1.476-.697-1.663.604-2.596 1.604-3.596l-2.829-2.828c-1.033 1.033-1.908 2.307-3.666 1.575-1.674-.686-1.404-2.334-1.404-3.675h-4c0 1.312.278 2.985-1.404 3.675-1.761.733-2.646-.553-3.667-1.574l-2.829 2.828c1.033 1.033 2.308 1.909 1.575 3.667-.348.849-1.176 1.404-2.094 1.404h-1.581v4c1.471 0 2.973-.281 3.704 1.475.698 1.661-.604 2.596-1.604 3.596l2.829 2.829c1-1 1.943-2.282 3.667-1.575 1.673.687 1.404 2.332 1.404 3.675h4c0-1.244-.276-2.967 1.475-3.704 1.645-.692 2.586.595 3.596 1.604l2.828-2.829c-1-1-2.301-1.933-1.604-3.595l.03-.072c.687-1.673 2.332-1.404 3.675-1.404zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z",
    ],
  },
  sound: {
    viewBox: "0 0 24 24",
    path: [
      "M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z",
    ],
  },
  music: {
    viewBox: "0 0 24 24",
    path: [
      "M23 0l-15.996 3.585v13.04c-2.979-.589-6.004 1.671-6.004 4.154 0 2.137 1.671 3.221 3.485 3.221 2.155 0 4.512-1.528 4.515-4.638v-10.9l12-2.459v8.624c-2.975-.587-6 1.664-6 4.141 0 2.143 1.715 3.232 3.521 3.232 2.14 0 4.476-1.526 4.479-4.636v-17.364z",
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
