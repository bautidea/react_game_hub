export function DisplayFlexIcon() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M6 0h44a6 6 0 016 6v44a6 6 0 01-6 6H6a6 6 0 01-6-6V6a6 6 0 016-6z"
          id="a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#FFF" opacity=".2" xlinkHref="#a" />
        <g mask="url(#b)" stroke="#FFF">
          <rect
            x="1"
            y=".667"
            width="33"
            height="29"
            rx="4"
            transform="translate(10.5 12.833)"
          />
          <rect
            x="1"
            y=".5"
            width="33"
            height="29"
            rx="4"
            transform="translate(10.5 -20)"
          />
          <rect
            x="1"
            y="1.833"
            width="33"
            height="29"
            rx="4"
            transform="translate(10.5 44.667)"
          />
        </g>
      </g>
    </svg>
  );
}
