import React from "react";
import { boolean } from "@storybook/addon-knobs";
import DimzouCardII from "../DimzouCardII";
import DimzouCardIIPlaceholder from "../DimzouCardIIPlaceholder";
import demoData from "./demoData";

/** DimzouCard - Type II */
const Example = () => (
  <DimzouCardIIPlaceholder
    title={demoData.title}
    body={demoData.body}
    cover={demoData.cover}
    author={demoData.author}
    showAvatar={boolean("showAvatar", true)}
    titleLines={3}
    bodyLines={4}
  />
);

export default Example;
