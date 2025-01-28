import { asyncHandler } from "../utils/asyncHandler.js";

const registeruser = asyncHandler(async (req, res) => {
 
  res.status(201).json({
    message: "User registered successfully",
  });
});

export { registeruser };
