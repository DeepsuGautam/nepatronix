const { mkdirSync, unlinkSync } = require("fs");
const multer = require("multer");
const { extname, join } = require("path");
const crypto = require("crypto");

const storage = (root) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      try {
        const folder = req.headers?.folder;
        if (!folder) {
          throw new Error("Folder name is missing in headers.");
        }

        const fullpath = join(process.cwd(), "public", root, folder);
        mkdirSync(fullpath, { recursive: true });

        req.headers.folder = `public/${root}/${folder}`;
        req[file?.fieldname] = folder;

        cb(null, fullpath);
      } catch (error) {
        console.error("Error in destination function:", error.message);
        cb(error, null);
      }
    },

    filename: (req, file, cb) => {
      try {
        const name = `${file.fieldname}${Math.round(
          new Date().getTime() * new Date().getTime()
        )}${extname(file.originalname)}`;
        req[file.fieldname] = `/${req.headers.folder}/${name}`;
        cb(null, name);
      } catch (error) {
        console.error("Error in filename function:", error.message);
        cb(error, null);
      }
    },
  });

const vdoStore = () =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      const fullpath = join(process.cwd(), "videos");
      mkdirSync(fullpath, { recursive: true });
      cb(null, fullpath);
    },

    filename: (req, file, cb) => {
      const courseId = req.params?.id || "unknown";
      const uniqueHash = crypto.randomBytes(8).toString("hex");
      const name = `${Date.now()}-${courseId}-${uniqueHash}.mp4`;
      req.videoFilename = name; // Store filename in request
      cb(null, name);
    },
  });

const uploadVdo = () => multer({ storage: vdoStore() });

const upload = (root) => multer({ storage: storage(root) });

module.exports = { upload, uploadVdo };
