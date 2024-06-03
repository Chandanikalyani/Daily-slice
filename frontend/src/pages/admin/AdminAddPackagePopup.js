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

const AdminAddPackagePopup = () => {
  const [open, setOpen] = useState(false);
  const [packageName, setPackageName] = useState("");
  const [packageItem, setPackageItem] = useState("");
  const [off, setOff] = useState("");
  const [price, setPrice] = useState("");
  const [describe, setDescription] = useState("");
  const [duration, setDuration] = useState("");


  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/packages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ packageName, packageItem, off, price, describe, duration }),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      alert("Package creation successful");
      closePopup();
    } catch (error) {
      alert("Package creation failed");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} color="success" variant="contained">
        + Add Package
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle style={{ background: "blue", color: "white" }}>
          <h3>Add New Package</h3>
          <IconButton onClick={closePopup} style={{ float: "right" }}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "blue", paddingBottom: "16px" }}>
          <div className="container">
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Package Name"
                  fullWidth
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                />
              </div>
              {/* <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Package Item"
                  fullWidth
                  value={packageItem}
                  onChange={(e) => setPackageItem(e.target.value)}
                />
              </div> */}
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Off (%)"
                  fullWidth
                  value={off}
                  onChange={(e) => setOff(e.target.value)}
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
                  value={describe}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  type="date"
                  label="Expird ON"
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
                Add Package
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAddPackagePopup;
