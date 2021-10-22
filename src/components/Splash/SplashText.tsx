import React from "react";

interface SplashTextProps {
  text: string;
  style: object;
  heading?: string;
  nested?: string;
  nestedStyle?: object;
}

const noNesting = ({ text, style }: SplashTextProps, headingTag: string) => {
  if (headingTag === "") {
    return <div style={style}>{text}</div>;
  } else {
    const Tag = headingTag as keyof JSX.IntrinsicElements;
    return (
      <div style={style}>
        <Tag>{text}</Tag>
      </div>
    );
  }
};

const nesting = (
  { text, style, nestedStyle, nested }: SplashTextProps,
  headingTag: string
) => {
  if (headingTag === "") {
    return (
      <div style={style}>
        {text}
        <span style={nestedStyle}>{nested}</span>
      </div>
    );
  } else {
    const Tag = headingTag as keyof JSX.IntrinsicElements;
    return (
      <div style={style}>
        <Tag>{text}</Tag>
        <span style={nestedStyle}>{nested}</span>
      </div>
    );
  }
};

const SplashText = ({
  text,
  style,
  heading = "",
  nested,
  nestedStyle,
}: SplashTextProps) => {
  /**
   * If there's no headinglevel, don't add heading
   */
  // If there's nothing to nest
  if (nested === undefined) {
    return noNesting({ text, style }, heading);
  } else {
    return nesting({ text, style, nestedStyle, nested }, heading);
  }
};

export default SplashText;
