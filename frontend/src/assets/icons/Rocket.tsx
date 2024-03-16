import { SVGProps } from "react";

const Rocket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" {...props}>
    <path d="M25.8072 13.8612C18.4894 22.0758 13.4674 33.8775 13.0011 34.9895L0.015625 29.4294L14.5435 14.9015C16.2295 13.2155 18.6688 12.4623 21.0363 12.9286L25.8072 13.8612ZM32.9097 52.0643C32.9097 52.0643 46.3256 46.5042 54.038 38.7919C73.4085 19.4213 70.1801 4.28357 69.1398 0.875784C65.7321 -0.200359 50.5943 -3.39291 31.2238 15.9776C23.5114 23.69 17.9513 37.1059 17.9513 37.1059L32.9097 52.0643ZM56.1544 44.2085C47.9398 51.5262 36.1381 56.5482 35.0261 57.0145L40.5862 70L55.1141 55.4721C56.8001 53.7861 57.5534 51.3469 57.087 48.9793L56.1544 44.2085ZM25.1256 55.6514C25.1256 58.6288 23.906 61.3191 21.9689 63.2562C17.7361 67.489 0.015625 70 0.015625 70C0.015625 70 2.52662 52.2795 6.75945 48.0467C8.26173 46.5366 10.1789 45.5069 12.2675 45.0885C14.3561 44.6701 16.5219 44.8817 18.49 45.6967C20.4581 46.5116 22.1396 47.8929 23.3211 49.6654C24.5025 51.4378 25.1306 53.5213 25.1256 55.6514ZM39.4742 23.3672C39.4742 19.4213 42.7026 16.1929 46.6485 16.1929C50.5943 16.1929 53.8228 19.4213 53.8228 23.3672C53.8228 27.313 50.5943 30.5414 46.6485 30.5414C42.7026 30.5414 39.4742 27.313 39.4742 23.3672Z" />
  </svg>
);

export default Rocket;