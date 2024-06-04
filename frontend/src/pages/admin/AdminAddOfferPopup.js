import React, { useState, useEffect } from "react";
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
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/items");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

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
      window.location.reload();
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
        <DialogTitle style={{ background: "#204969", color: "white" }}>
          <h3>Add New Offer</h3>
          <IconButton onClick={closePopup} style={{ float: "right" }}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "white", paddingBottom: "16px" }}>
          <div className="container">
            <br/>
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="item-select-label">Item</InputLabel>
                  <Select
                    labelId="item-select-label"
                    value={item}
                    onChange={(e) => setSelectedItem(e.target.value)}
                  >
                    {items.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  type="number"
                  placeholder="New Price"
                  label="Price"
                  fullWidth
                  InputProps={{ inputProps: { min: 0 } }}
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
                style={{ background: "#204969" }}
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
