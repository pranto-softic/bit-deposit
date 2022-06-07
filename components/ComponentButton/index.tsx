import { Button } from "@mui/material";

const ComponentButton = (props: any) => {
  const { title, style } = props;

  return (
    <div>
      <Button style={style}>{title}</Button>
    </div>
  );
};

export default ComponentButton;
