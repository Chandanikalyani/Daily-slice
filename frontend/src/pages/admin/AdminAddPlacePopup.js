import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AdminAddPlacePopup = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileType = selectedFile.type;

    if (
      fileType === "image/jpeg" ||
      fileType === "image/png" ||
      fileType === "image/jpg"
    ) {
      const fileURL = URL.createObjectURL(selectedFile);
      setFile(fileURL);
      setError("");
    } else {
      setFile(null);
      setError("Please select a file of type jpg, jpeg, or png.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Place
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{background:"blue"}}>
          <h3>Add New Place</h3>
          <IconButton onClick={closePopup} style={{ float: "right" }}>
            <CloseIcon color="primary" />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "blue", paddingBottom: "16px" }}>
          <div className="container">
            <br />
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Place No:"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField type="number" label="Number of Tables" fullWidth />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <TextField type="number" label="Number of Chairs" fullWidth />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="place-type"
                    name="place-type"
                    value={placeType}
                    onChange={(e) => setPlaceType(e.target.value)}
                  >
                    <FormControlLabel
                      value="indoor"
                      control={<Radio />}
                      label="Indoor"
                    />
                    <FormControlLabel
                      value="outdoor"
                      control={<Radio />}
                      label="Outdoor"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <label>
                  <h4>Add Place Image</h4>
                </label>
                <br />
              </div>

              <div>
                <input type="file" name="Picture1" onChange={handleChange} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                {file && <img src={file} alt="Selected" />}
              </div>

              <br />

              <div>
                <input type="file" name="Picture2" onChange={handleChange} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                {file && <img src={file} alt="Selected" />}
              </div>

              <br />

              <div>
                <input type="file" name="Picture3" onChange={handleChange} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                {file && <img src={file} alt="Selected" />}
              </div>

              <br />

              <Button
                style={{ background: "yellow" }}
                type="button"
                variant="contained"
                fullWidth
                onClick={closePopup}
              >
                Add Place
              </Button>
              <br />
              <br />
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAddPlacePopup;
