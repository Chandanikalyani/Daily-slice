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
  const [placeNo, setPlaceNo] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [numberOfTables, setNumberOfTables] = useState("");
  const [numberOfChairs, setNumberOfChairs] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  const openPopup = () => setOpen(true);
  const closePopup = () => {
    setOpen(false);
    clearForm();
  };

  const clearForm = () => {
    setPlaceNo("");
    setDescription("");
    setType("");
    setNumberOfTables("");
    setNumberOfChairs("");
    setImages([]);
    setError("");
  };

  const handleChange = (event) => setImages(event.target.files);

  const handleSubmit = async () => {
    if (!placeNo || !description || !type || !numberOfTables || !numberOfChairs || images.length === 0) {
      setError("All fields are required.");
      return;
    }

    try {
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      formData.append("place_no", placeNo);
      formData.append("description", description);
      formData.append("type", type);
      formData.append("number_of_tables", numberOfTables);
      formData.append("number_of_chairs", numberOfChairs);

      const response = await fetch("http://localhost:4000/api/upload/place", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      const data = await response.json();
      const imagePaths = data.imagePaths;

      const placeData = {
        place_no: placeNo,
        description,
        type,
        number_of_tables: numberOfTables,
        number_of_chairs: numberOfChairs,
        images :imagePaths,
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

      alert("Place creation successful");
      closePopup();
      window.location.reload();
    } catch (error) {
      setError("Place creation failed. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Place
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{ background: "#204969", color: "white" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3>Add New Place</h3>
            <IconButton onClick={closePopup}>
              <CloseIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "white", paddingBottom: "16px", color: "black" }}>
          <br/>
          <form>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                label="Place No:"
                fullWidth
                value={placeNo}
                onChange={(e) => setPlaceNo(e.target.value)}
                required
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                label="Description"
                fullWidth
                multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                type="number"
                label="Number of Tables"
                fullWidth
                value={numberOfTables}
                onChange={(e) => setNumberOfTables(e.target.value)}
                required
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                type="number"
                label="Number of Chairs"
                fullWidth
                value={numberOfChairs}
                onChange={(e) => setNumberOfChairs(e.target.value)}
                required
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="place-type"
                  name="place-type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <FormControlLabel
                    value="indoor"
                    control={<Radio style={{ color: "black" }} />}
                    label="Indoor"
                    style={{ color: "black" }}
                  />
                  <FormControlLabel
                    value="outdoor"
                    control={<Radio style={{ color: "black" }} />}
                    label="Outdoor"
                    style={{ color: "black" }}
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
              {images.length > 0 && (
                <div>
                  {Array.from(images).map((file, index) => (
                    <div key={index}>
                      <p>File selected: {file.name}</p>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={'Selected File ${index + 1}'}
                        style={{ maxWidth: "100%", marginTop: "10px" }}
                      />
                    </div>
                  ))}
                </div>
              )}
              {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            </div>
            <br />
            <Button
              style={{ background: "#204969" }}
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAddPlacePopup;