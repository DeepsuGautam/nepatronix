const fs = require("fs");
const path = require("path");
const Course = require("../models/course");

const uploadDir = path.join(process.cwd(), "videos"); // Ensure correct directory

const chunkUpload = async (req, res) => {
  try {
    const { id } = req.params; // Course ID
    const { chunkIndex, totalChunks, filename } = req.body;

    // Validate Course
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ error: "Course not found" });

    const videoName = filename; // Use filename from request if no video exists in DB
    const chunkPath = path.join(uploadDir, `${videoName}.part${chunkIndex}`);

    if (course?.video) {
      try {
        const fullpath = path.join(process.cwd(), "videos", course?.video);
        console.log(fullpath)
        if (fs.existsSync(fullpath)) {
          fs.unlinkSync(fullpath);
          console.log("Old video deleted!");
        } else {
          console.log("No old video");
        }
      } catch (err) {
        console.log(err?.message);
      }
    }

    // Save the chunk file to the desired location
    fs.renameSync(req.file.path, chunkPath); // Move the file to the correct path

    console.log(
      `Received chunk ${chunkIndex + 1}/${totalChunks} for ${videoName}`
    );

    // Merge Chunks when all are uploaded
    if (parseInt(chunkIndex) + 1 === parseInt(totalChunks)) {
      mergeChunks(videoName, totalChunks);

      // Update the course with the final video name
      course.video = videoName; // Set the video name in the course
      await course.save(); // Save the updated course with the video name
      console.log(`Updated course with new video: ${videoName}`);
    }

    res.json({ message: "Chunk uploaded successfully", chunkIndex });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Upload failed" });
  }
};

// Function to merge all chunks and delete the individual chunk files
const mergeChunks = (filename, totalChunks) => {
  const finalPath = path.join(uploadDir, filename);
  const writeStream = fs.createWriteStream(finalPath);

  for (let i = 0; i < totalChunks; i++) {
    const chunkPath = path.join(uploadDir, `${filename}.part${i}`);
    const chunkData = fs.readFileSync(chunkPath);

    writeStream.write(chunkData);
    fs.unlinkSync(chunkPath); // Delete chunk after merging
    console.log(`Deleted chunk ${i}`);
  }

  writeStream.end();
  console.log(`Merged video saved as: ${filename}`);
};

module.exports = chunkUpload;
