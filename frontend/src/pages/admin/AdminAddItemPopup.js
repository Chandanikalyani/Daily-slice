import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AdminAddItemPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState([]);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    const validFiles = selectedFiles.filter(file =>
      validFileTypes.includes(file.type)
    );

    if (validFiles.length === selectedFiles.length) {
      const fileURLs = validFiles.map(file => URL.createObjectURL(file));
      setFile(fileURLs);
      setError("");
    } else {
      setFile([]);
      setError("Please select files of type jpg, jpeg, or png.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Item
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{ background: "blue" }}>
          <h3>Add New Item</h3>
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
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  label="Price"
                  fullWidth
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div>
                <label>
                  <h4>Add Item Images</h4>
                </label>
                <br />
                <input type="file" multiple onChange={handleChange} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div>
                  {file.map((fileURL, index) => (
                    <img key={index} src={fileURL} alt={`Selected ${index}`} style={{ maxWidth: "100%", margin: "1rem 0" }} />
                  ))}
                </div>
              </div>

              <br />

              <Button
                style={{ background: "yellow" }}
                type="button"
                variant="contained"
                fullWidth
                onClick={closePopup}
              >
                Add Item
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

export default AdminAddItemPopup;
