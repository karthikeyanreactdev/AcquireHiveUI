import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import ListItemText from "@material-ui/core/ListItemText";
// import Button from "@material-ui/core/Button";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  paper: {
    // position: "absolute",
    // width: 400,
    // backgroundColor: theme.palette.background.paper,
    // // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    // top: "50%",
    // left: "50%",
    // borderRadius: "8px",
    // transform: "translate(-50%, -50%)",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Vue",
  "Node.js",
  "Express",
];

const ResumeDetailModal = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: [],
    phone: "",
  });

  const [personName, setPersonName] = React.useState([]);

  const handleMultiChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSkillChange = (event) => {
    setFormData({ ...formData, skills: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <SwipeableDrawer
        anchor={"right"}
        open={isOpen}
        onClose={onClose}
        onOpen={onClose}
        sx={{ width: "400px" }}
      >
        <Box sx={{ padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" component="h2">
              Enter your information
            </Typography>
            <ClearOutlinedIcon
              sx={{ cursor: "pointer" }}
              aria-label="close"
              onClick={onClose}
            />
          </Box>
          <Box>
            {/* <h2 id="simple-modal-title">Enter your information</h2> */}
            <form onSubmit={handleSubmit}>
              <TextField
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
              />
              <br />
              <TextField
                id="email"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
              />
              <br />
              {/* <Select
          variant="outlined"
          labelId="skills-label"
          id="skills"
          multiple
          name="skills"
          value={formData.skills}
          onChange={handleSkillChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
        >
          {skills.map((skill) => (
            <MenuItem key={skill} value={skill}>
              <Checkbox checked={formData.skills.indexOf(skill) > -1} />
              <ListItemText primary={skill} />
            </MenuItem>
          ))}
        </Select> */}

              <FormControl sx={{ mt: 2 }} fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">Skill</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Skill" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {skills.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                id="phone"
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default ResumeDetailModal;
