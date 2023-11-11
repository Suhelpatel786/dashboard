import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UnderConstructionModal({
  handleOpen,
  handleClose,
  open,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover", objectPosition: "center" }}
            src="./assets/construction.jpg"
            alt={"Under Construction Image"}
          />
        </Box>
      </Modal>
    </div>
  );
}
