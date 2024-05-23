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
  const [selectedItem, setSelectedItem] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  const items = ["Item 1", "Item 2", "Item 3"]; // Example items, replace with your own items

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Offer
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{ background: "blue" }}>
          <h3>Add New Offer</h3>
          <IconButton onClick={closePopup} style={{ float: "right" }}>
            <CloseIcon color="primary" />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "blue", paddingBottom: "16px" }}>
          <div className="container">
            <br />
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="item-select-label">Item</InputLabel>
                  <Select
                    labelId="item-select-label"
                    value={selectedItem}
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
                  value={description}
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
                onClick={closePopup}
              >
                Add Offer
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

export default AdminAddOfferPopup;
