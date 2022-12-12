/** @format */
import Button from "@mui/material/Button";

const MSButton = ({ text, icon, backgroundColor, clickAction }: any) => {
  return (
    <Button
      size="small"
      sx={{
        paddingLeft: `30px`,
        paddingRight: `30px`,
        height: `50px`,
        borderRadius: `50px`,
        textTransform: `inherit`,
        backgroundColor: backgroundColor,
        font: `normal normal 500 20px/80px Raleway`,
        "&:hover, &:active": {
          backgroundColor: backgroundColor,
          color: "#fff",
        },
      }}
      variant="contained"
      startIcon={icon}
      onClick={clickAction}
    >
      {text}
    </Button>
  );
};

export default MSButton;
