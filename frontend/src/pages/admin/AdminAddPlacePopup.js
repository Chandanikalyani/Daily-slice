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
  const [numTables, setNumTables] = useState("");
  const [numChairs, setNumChairs] = useState("");
  const [error, setError] = useState("");
  const [files, setFiles] = useState([]);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
      formData.append("title", title);
      formData.append("description", description);
      formData.append("placeType", placeType);
      formData.append("numTables", numTables);
      formData.append("numChairs", numChairs);

      const response = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      const data = await response.json();
      const imagePaths = data.imagePaths;

      const placeData = {
        title,
        description,
        placeType,
        numTables,
        numChairs,
        imagePaths,
      };

      const addItemResponse = await fetch("http://localhost:4000/api/places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(placeData),
      });

      if (!addItemResponse.ok) {
        throw new Error("Failed to add place");
      }

      const responseData = await addItemResponse.json();
      alert("Place creation successful");
      closePopup();
    } catch (error) {
      alert("Place creation failed");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Place
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{ background: "blue" }}>
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
                <TextField
                  type="number"
                  label="Number of Tables"
                  fullWidth
                  value={numTables}
                  onChange={(e) => setNumTables(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  type="number"
                  label="Number of Chairs"
                  fullWidth
                  value={numChairs}
                  onChange={(e) => setNumChairs(e.target.value)}
                />
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
                  <h4>Add Place Images</h4>
                </label>
                <br />
                <input type="file" name="images" multiple onChange={handleChange} />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              <br />
              <Button
                style={{ background: "yellow" }}
                type="button"
                variant="contained"
                fullWidth
                onClick={handleSubmit}
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