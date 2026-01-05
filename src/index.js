import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import express from "express";

const port = process.env.PORT || 8000;

connectDB()

    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at:`, port)
        })
    })

    .catch((error) => {
        console.log("Mongo DB connection failed", error)
    })













/*
(async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            `✅ MongoDB connected | DB: ${connectionInstance.connection.host}`
        );

        app.on("error", (error) => {
            console.error("❌ Express error:", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`🚀 App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("❌ Startup error:", error.message);
        process.exit(1);
    }
})();
*/
