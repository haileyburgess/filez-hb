import express, { request } from "express";
import { foldersList, filesList } from "../db/seed.js";
const router = express.Router();

export default router;

router.route("/folders").get(async (request, response) => {
  try {
    const sql = `
          SELECT * FROM folders
          `;
    const { rows: folders } = await db.query(sql);
    response.json(folders);
  } catch (error) {
    response.status(500).send("server error retrieving folders");
  }
});
router.route("/folders/:id").get(async (request, response) => {
  try {
    const { id } = request.params;
    const sql = `
          SELECT folders.*,
          (
          SELECT json_agg(files)
          FROM files
          WHERE files.folder_id = folders.id
          ) AS files
          FROM folders
          WHERE folders.id = $1;
          `;
    const {
      rows: [folder],
    } = await db.query(sql, [id]);

    if (!folder) {
      return response.status(404).send("Folder not found");
    }
    response.json(folder);
  } catch (error) {
    response.status(500).send("server error retrieving folders");
  }
});
