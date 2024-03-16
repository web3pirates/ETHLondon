import { SVGProps } from "react";

const Trashcan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="20"
    viewBox="0 0 18 20"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.8001 0.400391C7.5773 0.40051 7.35894 0.46265 7.16947 0.579853C6.97999 0.697057 6.82689 0.864694 6.7273 1.06399L5.8585 2.80039H1.8001C1.48184 2.80039 1.17661 2.92682 0.951569 3.15186C0.726526 3.37691 0.600098 3.68213 0.600098 4.00039C0.600098 4.31865 0.726526 4.62388 0.951569 4.84892C1.17661 5.07396 1.48184 5.20039 1.8001 5.20039V17.2004C1.8001 17.8369 2.05295 18.4474 2.50304 18.8974C2.95313 19.3475 3.56358 19.6004 4.2001 19.6004H13.8001C14.4366 19.6004 15.0471 19.3475 15.4972 18.8974C15.9472 18.4474 16.2001 17.8369 16.2001 17.2004V5.20039C16.5184 5.20039 16.8236 5.07396 17.0486 4.84892C17.2737 4.62388 17.4001 4.31865 17.4001 4.00039C17.4001 3.68213 17.2737 3.37691 17.0486 3.15186C16.8236 2.92682 16.5184 2.80039 16.2001 2.80039H12.1417L11.2729 1.06399C11.1733 0.864694 11.0202 0.697057 10.8307 0.579853C10.6413 0.46265 10.4229 0.40051 10.2001 0.400391H7.8001ZM5.4001 7.60039C5.4001 7.28213 5.52653 6.97691 5.75157 6.75186C5.97661 6.52682 6.28184 6.40039 6.6001 6.40039C6.91836 6.40039 7.22358 6.52682 7.44863 6.75186C7.67367 6.97691 7.8001 7.28213 7.8001 7.60039V14.8004C7.8001 15.1187 7.67367 15.4239 7.44863 15.6489C7.22358 15.874 6.91836 16.0004 6.6001 16.0004C6.28184 16.0004 5.97661 15.874 5.75157 15.6489C5.52653 15.4239 5.4001 15.1187 5.4001 14.8004V7.60039ZM11.4001 6.40039C11.0818 6.40039 10.7766 6.52682 10.5516 6.75186C10.3265 6.97691 10.2001 7.28213 10.2001 7.60039V14.8004C10.2001 15.1187 10.3265 15.4239 10.5516 15.6489C10.7766 15.874 11.0818 16.0004 11.4001 16.0004C11.7184 16.0004 12.0236 15.874 12.2486 15.6489C12.4737 15.4239 12.6001 15.1187 12.6001 14.8004V7.60039C12.6001 7.28213 12.4737 6.97691 12.2486 6.75186C12.0236 6.52682 11.7184 6.40039 11.4001 6.40039Z"
    />
  </svg>
);

export default Trashcan;
