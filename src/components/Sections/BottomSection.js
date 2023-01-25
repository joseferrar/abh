import { Divider, Typography } from "@mui/material";
import React from "react";

function BottomSection() {
  return (
    <div>
      <Divider style={{ marginBottom: 20 }} />
      <Typography
        variant="subtitle1"
        style={{
          fontSize: 16,
          lineHeight: 2,
          fontFamily: "poppins-light",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        {" "}
        © 2022 All rights reserved, ABH Manufacturing, Inc. Logo is a registered
        trademark of Architectural Builders Hardware Manufacturing, Inc.|
        Privacy Policy | UNSUBSCRIBE
      </Typography>
    </div>
  );
}

export default BottomSection;
