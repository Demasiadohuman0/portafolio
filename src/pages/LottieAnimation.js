import Lottie from "lottie-react"

export default function Lottieanimacion({ alto, ancho, animacion }) {
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: animacion,
    };
    return (
        <Lottie
          options={defaultOption}
          height={"${alto}"}
          width={"${ancho}"}
          isClickToPauseDisabled
        />
    );
}
