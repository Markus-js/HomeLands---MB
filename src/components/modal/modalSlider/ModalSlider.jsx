import Style from "../../slider/slider.module.scss";
import Carousel from "react-material-ui-carousel";

  
export const ModalSlider = ({houseData}) => {

  return (
    <Carousel className={Style.slider} indicators={false} autoPlay={false}>
      {houseData.item.images.map((item, i) => {
        return <img src={item.filename.medium} alt={item.author} key={i} item={item} />;
      })}
    </Carousel>
  );
}


