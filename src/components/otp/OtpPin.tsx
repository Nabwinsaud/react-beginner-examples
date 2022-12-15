import React, { useState } from "react";

const OTPInput = () => {
  const [otp, setOTP] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers to be entered
    const newOTP = event.target.value.replace(/[^0-9]/g, "");

    // Update the OTP state variable
    setOTP(newOTP);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle the Backspace key to allow deleting individual digits
    if (event.key === "Backspace") {
      setOTP(otp.slice(0, -1));
    }
  };

  return (
    <input
      type="tel"
      pattern="[0-9]*"
      value={otp}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
