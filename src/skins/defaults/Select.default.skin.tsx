const Skin = () => {
  return (
    <svg width="345" height="56" viewBox="0 0 345 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_57_12827)">
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4H333C337.418 4 341 7.58172 341 12V44C341 48.4183 337.418 52 333 52H12C7.58172 52 4 48.4183 4 44V12Z"
          fill="white"
        />
        <path
          d="M4.5 12C4.5 7.85787 7.85786 4.5 12 4.5H333C337.142 4.5 340.5 7.85786 340.5 12V44C340.5 48.1421 337.142 51.5 333 51.5H12C7.85786 51.5 4.5 48.1421 4.5 44V12Z"
          stroke="#667085"
        />
        <g clipPath="url(#clip0_57_12827)">
          <path
            d="M28 36.3333C32.6024 36.3333 36.3333 32.6024 36.3333 28C36.3333 23.3976 32.6024 19.6667 28 19.6667C23.3976 19.6667 19.6667 23.3976 19.6667 28C19.6667 32.6024 23.3976 36.3333 28 36.3333Z"
            stroke="#667085"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <rect x="46" y="19" width="90" height="18" rx="9" fill="#E6E6E6" />
        <rect x="144" y="19" width="59" height="18" rx="9" fill="#E6E6E6" />
        <g clipPath="url(#clip1_57_12827)">
          <path
            d="M317 36.3333C321.602 36.3333 325.333 32.6024 325.333 28C325.333 23.3976 321.602 19.6667 317 19.6667C312.398 19.6667 308.667 23.3976 308.667 28C308.667 32.6024 312.398 36.3333 317 36.3333Z"
            stroke="#667085"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_57_12827"
          x="0"
          y="0"
          width="345"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_57_12827" />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.92549 0 0 0 0 0.941176 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_12827" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_57_12827" result="effect2_dropShadow_57_12827" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_57_12827" result="shape" />
        </filter>
        <clipPath id="clip0_57_12827">
          <rect width="20" height="20" fill="white" transform="translate(18 18)" />
        </clipPath>
        <clipPath id="clip1_57_12827">
          <rect width="20" height="20" fill="white" transform="translate(307 18)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Skin;
