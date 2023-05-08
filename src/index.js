import "./index.html";
import "swiper/scss";
import "swiper/scss/pagination";

// все стилевые штуки лучше подключать до импорта стилей
//new modules
import "./index.scss";

const videoBG = document.querySelector(".video-bg");

videoBG.innerHTML = `<source set="/video/video.webm" type="video/webm" />
<source src="/video/video.mp4" type="video/mp4" />
`;
