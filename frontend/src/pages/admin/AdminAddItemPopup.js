import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AdminAddItemPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Pizza"); // Default to "Pizza"
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  const openPopup = () => setOpen(true);
  const closePopup = () => {
    setOpen(false);
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setType("Pizza");
    setFile(null);
    setError("");
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!name || !description || !price || !file || !type) {
      setError("All fields are required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("http://localhost:4000/api/upload/item", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      const imagePath = data.imagePath;

      const itemData = { name, description, price, image: imagePath, type };

      const addItemResponse = await fetch("http://localhost:4000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });

      if (!addItemResponse.ok) {
        throw new Error("Failed to add item");
      }

      alert("Item creation successful");
      closePopup();
      window.location.reload();
    } catch (error) {
      setError("Item creation failed. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Item
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{ background: "#204969", color: "white" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3>Add New Item</h3>
            <IconButton onClick={closePopup}>
              <CloseIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "#FFEFEF", paddingBottom: "16px", color: "black" }}>
          <br/>
          <form>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                type="number"
                label="Price"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <FormControl component="fieldset" style={{ marginBottom: "1rem" }}>
              <label><h4>Type</h4></label>
              <RadioGroup
                row
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <FormControlLabel value="Pizza" control={<Radio />} label="Pizza" />
                <FormControlLabel value="Pasta" control={<Radio />} label="Pasta" />
                <FormControlLabel value="Drinks" control={<Radio />} label="Drinks" />
              </RadioGroup>
            </FormControl>
            <div>
              <label>
                <h4>Add Item Image</h4>
              </label>
              <br />
              <input type="file" onChange={handleChange} required />
              {file && (
                <div>
                  <p>File selected: {file.name}</p>
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Selected File"
                    style={{ maxWidth: "100%", marginTop: "10px" }}
                  />
                </div>
              )}
            </div>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            <br />
            <Button
              style={{ background: "#204969" }}
              type="button"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              Add Item
            </Button>
            <br />
            <br />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAddItemPopup;
