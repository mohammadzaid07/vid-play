import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlink(localFilePath, () => {});
    return response;

  } catch (error) {
    console.error("❌ Cloudinary upload failed:", error.message);

    if (fs.existsSync(localFilePath)) {
      fs.unlink(localFilePath, () => {});
    }
    return null;
  }
};

export { uploadOnCloudinary };
