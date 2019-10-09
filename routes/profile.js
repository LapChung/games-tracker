const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/:platform/:platformUserIdentifier", async (req, res) => {
  try {
    const headers = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY
    };

    const { platform, platformUserIdentifier } = req.params;

    const response = await fetch(
      `${process.env.APEX_TRACKER_API_URL}/profile/${platform}/${platformUserIdentifier}`,
      {
        headers
      }
    );

    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({ message: "User profile not found!" });
    }

    res.json(data);
  } catch (e) {
    res.status(500).json({ message: "Server error!" });
  }
});

module.exports = router;
