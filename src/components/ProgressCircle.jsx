import { Box } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(#fff 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg, #0c101b ${angle}deg 360deg),
       #868dfb`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></Box>
  );
};
export default ProgressCircle;
