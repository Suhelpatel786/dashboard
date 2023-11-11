import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import UnderConstructionModal from "../../components/UnderConstructionModal";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [openNotification, setOpenNotification] = useState(false);
  const [openSettings, setopenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [serachModal, setSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // setting
  const handleOpenSettings = () => setopenSettings(true);
  const handleCloseSettings = () => setopenSettings(false);
  // notification
  const handleOpenNotification = () => setOpenNotification(true);
  const handleCloseNotification = () => setOpenNotification(false);
  //profile
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);

  //search result
  const handleOpenSearchModal = () => setSearchModal(true);
  const handleCloseSearchModal = () => setSearchModal(false);
  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box display="flex" backgroundColor={"#f2f0f0"} borderRadius="3px">
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
          />
          <IconButton
            type="button"
            sx={{ p: 1 }}
            disabled={searchValue === ""}
            onClick={handleOpenSearchModal}
          >
            <SearchIcon />
          </IconButton>
        </Box>

        {/* ICONS */}
        <Box display="flex">
          {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
          <IconButton onClick={handleOpenNotification}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton onClick={handleOpenSettings}>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton onClick={handleOpenProfile}>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      {/* //notification */}
      <UnderConstructionModal
        handleOpen={handleOpenNotification}
        handleClose={handleCloseNotification}
        open={openNotification}
      />

      {/* setting  */}
      <UnderConstructionModal
        handleOpen={handleOpenSettings}
        handleClose={handleCloseSettings}
        open={openSettings}
      />

      {/* profile  */}
      <UnderConstructionModal
        handleOpen={handleOpenProfile}
        handleClose={handleCloseProfile}
        open={openProfile}
      />

      {/* search result  */}
      <UnderConstructionModal
        handleOpen={handleOpenSearchModal}
        handleClose={handleCloseSearchModal}
        open={serachModal}
      />
    </>
  );
};

export default Topbar;
