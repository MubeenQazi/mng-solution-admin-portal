/** @format */
/** @format */
import Button from "@mui/material/Button";
import { CsvBuilder } from "filefy";

const DownloadButton = ({ rows, columns, filename }: any) => {
      const downloadCSV = () => {
      const filteredRows = rows.map((row: any) => {
      let rowCopy = { ...row };
      rowCopy.action = "";
      rowCopy.lineItem = JSON.stringify(rowCopy.lineItem);
      return Object.values(rowCopy);
    });
    var csvBuilder = new CsvBuilder(filename)
      .setColumns(columns)
      .addRows(Object.values(filteredRows))
      .exportFile();
    };
    
  return (
    <Button
      size="small"
      sx={{
        paddingLeft: `30px`,
        paddingRight: `30px`,
        height: `50px`,
        borderRadius: `50px`,
        textTransform: `inherit`,
        backgroundColor: "#FEB127",
        font: `normal normal 500 20px/80px Raleway`,
        "&:hover, &:active": {
          backgroundColor: "#FEB127",
          color: "#fff",
        },
      }}
      variant="contained"
      onClick={downloadCSV}
    >
      Download
    </Button>
  );
};

export default DownloadButton;


