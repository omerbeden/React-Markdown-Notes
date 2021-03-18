import { useState } from "react";

export const ContentShow = (props) => {
  const [text, setText] = useState(props.text);
  return <div>{text}</div>;
};
