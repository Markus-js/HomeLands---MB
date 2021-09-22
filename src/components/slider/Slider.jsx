import Style from "./slider.module.scss";
import Carousel from "react-material-ui-carousel";
import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpeg";
import Slide3 from "../../assets/images/slide3.jpeg";

export function Slider() {
  const carouselItems = [
    {
      url: Slide1,
      alt: "Vejle",
    },
    {
      url: Slide2,
      alt: "København",
    },
    {
      url: Slide3,
      alt: "Bryggen",
    },
  ];

  return (
    <Carousel className={Style.slider} indicators={false} autoPlay={false}>
      {carouselItems.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div>
      <h3>{props.item.title} </h3>
      <img alt={props.item.alt} src={props.item.url} />
    </div>
  );
}
