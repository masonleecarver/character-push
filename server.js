import express from "express";
import fs from "fs/promises";

const app = express();
const PORT = 3000;

// Allow Express to read JSON request bodies
app.use(express.json());

// Serve your frontend files
app.use(express.static("src"));

app.post("/api/characters", async (req, res) => {
    try {
        const filePath = "./src/public/json/characters.json";

        const file = await fs.readFile(filePath, "utf8");
        const characters = JSON.parse(file);

        characters.push(req.body);

        await fs.writeFile(
            filePath,
            JSON.stringify(characters, null, 2)
        );

        res.status(201).json({
            message: "Character saved!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Could not save character"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
