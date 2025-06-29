import express, { request } from "express";
import { foldersList, filesList } from "../db/seed.js";
const router = express.Router();

export default router;

router.route("/files").get(async (request, response) => {
  try {
    const sql = `
        SELECT files.*,
        (
        SELECT to_json(folders)
        FROM folders
        WHERE folders.id = files.folder_id
        ) AS folder
        FROM files
        `;
    const { rows: files } = await db.query(sql);
    response.json(files);
  } catch (error) {
    response.status(500).send("server error retrieving files");
  }
});
