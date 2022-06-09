import { Button } from "@mui/material";

const ComponentButton = (props: any) => {
  const { title, style, icon } = props;

  return (
    <div>
      <Button style={style}>
        {title}
        {icon && icon}
      </Button>
    </div>
  );
};

export default ComponentButton;
