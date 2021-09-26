import React from "react";
import ParagraphComponent from "../components/ParagraphComponent";

const Aboutus = (props) => {
  console.log("Inside about us", props);
  const { contentText } = props.contents;
  // console.log("Prps", props);
  return <ParagraphComponent text={contentText} />;
};
export default Aboutus;
