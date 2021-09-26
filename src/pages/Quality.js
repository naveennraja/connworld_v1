import React from "react";
import digitalVeriniere from "../images/digitalVerinier.jpeg";
import digitalMicrometers from "../images/digitalMicrometers.jpeg";
import feelersGauge from "../images/feelersGauge.png";
import heightGauge from "../images/heightGauge.jpeg";
import surfaceComparator from "../images/surfaceComparator.png";

// import qualityImage from "../images/quality.jpeg";
import ImageComponent from "../components/ImageComponent";
import ParagraphComponent from "../components/ParagraphComponent";

const Quality = (props) => {
  const { contentText, title } = props.contents;
  return (
    <>
      <h3>{title}</h3>
      <div className="row">
        <div className="col-12">
          <ParagraphComponent text={contentText}></ParagraphComponent>
          <div className="row">
            <div className="col">
              <ImageComponent
                src={digitalVeriniere}
                title={"Digital Veriniere"}
              />
              <figcaption className="figure-caption text-center my-2">
                Digital Veriniere
              </figcaption>
            </div>
            <div className="col">
              <ImageComponent
                src={digitalMicrometers}
                title={"Digital Micrometers"}
              />
              <figcaption className="figure-caption text-center my-2">
                Digital Micrometers
              </figcaption>
            </div>
            <div className="col">
              <ImageComponent src={feelersGauge} title={"Feelers Gauge"} />
              <figcaption className="figure-caption text-center my-2">
                Feelers Gauge
              </figcaption>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ImageComponent
                src={surfaceComparator}
                title={"Surface Comparator"}
              />
              <figcaption className="figure-caption text-center my-2">
                Surface Comparator
              </figcaption>
            </div>
            <div className="col">
              <ImageComponent src={heightGauge} title={"Height Gauge"} />
              <figcaption className="figure-caption text-center my-2">
                Height Gauge
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
