import Color from "color";

const Tag = ({ text, tagColor }: any) => {
  const tagStyle = {
    backgroundColor: Color(tagColor).alpha(0.15),
    color: tagColor,
    padding: 4,
    borderRadius: 3,
  };

  return <div style={tagStyle}>{text}</div>;
};

export default Tag;
