import { StyledSvg } from '../../styles/Svg.style.ts';

function CloseIcon() {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        fill="#CAAFA7"
        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
      />
    </StyledSvg>
  );
}

export default CloseIcon;
