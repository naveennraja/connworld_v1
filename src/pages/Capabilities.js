import React from "react";
import ParagraphComponent from "../components/ParagraphComponent";
import ImageComponent from "../components/ImageComponent";
import capabilityImage from "../images/capability.png";
import capabilityTable from "../images/capabilitytable.png";
const Capabilities = (props) => {
  const { contentText, title } = props.contents;
  return (
    <>
      <h3>{title}</h3>
      <div className="row">
        <div className="col-md-12 col-12">
          <ParagraphComponent text={contentText}> </ParagraphComponent>
          <h5>Machine Specifications</h5>
          <ImageComponent src={capabilityImage} title={title} />
          {/* <figcaption class="figure-caption">A caption for the above image.</figcaption> */}
          <figcaption className="figure-caption text-center my-2">
            BFW BMV50TC24 with MITSUBISHI M80A CNC System.
          </figcaption>
          <ImageComponent src={capabilityTable} title={"Capabilities"} />
          <ParagraphComponent
            text={
              "Based on Customer Confirmed Orders and Long Term agreement, ConnWorld is open for investment on new Machineries."
            }></ParagraphComponent>
        </div>
      </div>
    </>
  );
};

export default Capabilities;
