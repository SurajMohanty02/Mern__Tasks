import React from "react";

import { useState } from "react";
import { Container, FormControlLabel, Paper } from "@material-ui/core";

import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";

import PublishIcon from "@material-ui/icons/Publish";
import Slider from "@material-ui/core/Slider";
import { createPost } from "../store/reducers/AsyncMethods";
function valuetext(value) {
  return `${value}°C`;
}
const CompanyDetails = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [Showfile, setShowFile] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneno: "",
    website: "",
    challenge: "",
    desc: "",
  });

  const handlePdf = (e) => {
    if (e.target.value.legth !== 0) {
      setFile(e.target.files[0]);
      setShowFile(e.target.files[0].name);
    }
  };
  const [checkValue, setCheckValue] = useState({
    checkedA: "Web or Mobile Apps Development",
    checkedB: "Hire Dedicated Developers",
    checkedC: "AI/ML Development Services",
    checkedD: "Custom Software Development",
    checkedE: "Software Testing and QA",
    checkedF: "API Development & Integration",
  });
  const handleInput = (e) => {
    let { name, value } = e.target;
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
  });

  const handleCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  console.log(input);
  const [value, setValue] = React.useState([50000, 500000]);
  const marks = [
    {
      value: 0,
      label: "50000$",
    },
    {
      value: 25,
      label: "10000",
    },
    {
      value: 50,
      label: "150000",
    },
    {
      value: 100,
      label: "200000",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phoneno, website, challenge, desc } = input;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneno", phoneno);
    formData.append("website", website);
    formData.append("challenge", challenge);
    formData.append("desc", desc);
    formData.append("range", value);
    formData.append("file", file);

    dispatch(createPost(formData));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="xl" fixed>
        <h3 style={{ textAlign: "left" }}>1.Tell us about your company</h3>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            id="standard-error-helper-text"
            label="Your Name*"
            name="name"
            type="text"
            value={input.name}
            defaultValue=""
            variant="outlined"
            fullWidth
            onChange={handleInput}
          />
        </div>
        <div style={{ display: "flex" }}>
          <TextField
            id="standard-error-helper-text"
            name="email"
            label="Your Email*"
            defaultValue=""
            variant="outlined"
            style={{ marginRight: "10px" }}
            fullWidth
            type="email"
            value={input.email}
            onChange={handleInput}
          />
          <TextField
            id="outlined-basic"
            label="Your PhoneNo"
            variant="outlined"
            fullWidth
            name="phoneno"
            type="text"
            value={state.phone}
            onChange={handleInput}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Company Website"
            type="text"
            value={input.website}
            variant="outlined"
            name="website"
            fullWidth
            onChange={handleInput}
            style={{ marginBottom: "10px" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Whats your Company's Biggest challenge today"
            variant="outlined"
            name="challenge"
            type="text"
            value={input.challenge}
            fullWidth
            onChange={handleInput}
          />
        </div>

        <Container>
          <h3 style={{ textAlign: "left" }}>
            2. What are you looking to work on?
          </h3>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              id="outlined-multiline-static"
              label="Describe your Project Briefly *"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              name="desc"
              onChange={handleInput}
              value={input.desc}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Container fixed style={{ border: "1px solid lightgray" }}>
              <h4 style={{ textAlign: "left" }}>What's Your Budget?</h4>
              <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                marks={marks}
              />
            </Container>
          </div>
          <Container style={{ border: "1px solid lightgray" }}>
            <input type="file" hidden id="upload" onChange={handlePdf} />
            {Showfile ? (
              Showfile
            ) : (
              <label
                htmlFor="upload"
                style={{
                  display: "flex",
                  alignItems: "cenetr",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "cenetr" }}>
                  <PublishIcon style={{ paddingTop: "20px" }} />
                  <h3>Upload Your Project Brefiely</h3>
                </div>
                <p>UPLOAD</p>
              </label>
            )}
          </Container>
        </Container>
        <Container style={{ marginBottom: "10px" }}>
          <h3 style={{ textAlign: "left" }}>
            3. What services are you interested in?
          </h3>
          <Container
            maxWidth=""
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr 1fr",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleCheck}
                    name="checkedA"
                    color="primary"
                    value="Web or Mobile Apps
                  Development"
                  />
                }
                label="Web or Mobile Apps
            Development"
              />
            </Paper>
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleCheck}
                    name="checkedB"
                    color="primary"
                    value="Hire Dedicated Developers"
                  />
                }
                label="Hire Dedicated Developers"
              />
            </Paper>
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleCheck}
                    name="checkedC"
                    color="primary"
                    value="AI/ML Development Services"
                  />
                }
                label="AI/ML Development Services"
              />
            </Paper>
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleCheck}
                    name="checkedD"
                    color="primary"
                    value="Custom Software Development"
                  />
                }
                label="Custom Software Development"
              />
            </Paper>
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedE}
                    onChange={handleCheck}
                    name="checkedE"
                    color="primary"
                    value="Software Testing and QA"
                  />
                }
                label="Software Testing and QA"
              />
            </Paper>
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedF}
                    onChange={handleCheck}
                    name="checkedF"
                    color="primary"
                    value="API Development &
            Integration"
                  />
                }
                label="API Development &
            Integration"
              />
            </Paper>
          </Container>
        </Container>
      </Container>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default CompanyDetails;
