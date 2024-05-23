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

const AdminAddPackagePopup = () => {
  const [open, setOpen] = useState(false);
  const [packageName, setPackageName] = useState("");
  const [packageItems, setPackageItems] = useState("");
  const [discount, setDiscount] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Package
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{ background: "blue" }}>
          <h3>Add New Package</h3>
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
                  label="Package Name"
                  fullWidth
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Package Items"
                  fullWidth
                  value={packageItems}
                  onChange={(e) => setPackageItems(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  type="number"
                  label="Discount (Off)"
                  fullWidth
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
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
                Add Package
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

export default AdminAddPackagePopup;
