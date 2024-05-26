import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AdminAddOfferPopup = () => {
  const [open, setOpen] = useState(false);
  const [item, setSelectedItem] = useState("");
  const [describe, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const items = ["Item 1", "Item 2", "Item 3"]; // Example items, replace with your own items

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item, describe, duration }),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      alert("Offer creation successful");
      closePopup();
    } catch (error) {
      alert("Offer creation failed");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Offer
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{ background: "blue", color: "white" }}>
          <h3>Add New Offer</h3>
          <IconButton onClick={closePopup} style={{ float: "right" }}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "blue", paddingBottom: "16px" }}>
          <div className="container">
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="item-select-label">Item</InputLabel>
                  <Select
                    labelId="item-select-label"
                    value={item}
                    onChange={(e) => setSelectedItem(e.target.value)}
                  >
                    {items.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  value={describe}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  type="date"
                  label="Duration"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              <Button
                style={{ background: "yellow" }}
                type="button"
                variant="contained"
                fullWidth
                onClick={handleSubmit}
              >
                Add Offer
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAddOfferPopup;