export function DisplayGridIcon() {
  return (
    <svg
      width="56"
      height="56"
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
          <g transform="translate(8.167 9.333)">
            <rect x=".5" y=".5" width="10.667" height="16.5" rx="3" />
            <rect x="14.5" y=".5" width="10.667" height="16.5" rx="3" />
            <rect x="28.5" y=".5" width="10.667" height="16.5" rx="3" />
            <rect x=".5" y="20.333" width="10.667" height="16.5" rx="3" />
            <rect x="14.5" y="20.333" width="10.667" height="16.5" rx="3" />
            <rect x="28.5" y="20.333" width="10.667" height="16.5" rx="3" />
          </g>
        </g>
      </g>
    </svg>
  );
}
