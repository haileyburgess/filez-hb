import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const foldersList = [
    { name: "folder1" },
    { name: "folder2" },
    { name: "folder3" },
  ];
  const filesList = [
    { name: "file1", size: 3, folder_id: 1 },
    { name: "file2", size: 2, folder_id: 1 },
    { name: "file3", size: 1, folder_id: 1 },
    { name: "file4", size: 2, folder_id: 1 },
    { name: "file5", size: 1, folder_id: 1 },
    { name: "file6", size: 5, folder_id: 2 },
    { name: "file7", size: 5, folder_id: 2 },
    { name: "file8", size: 5, folder_id: 2 },
    { name: "file9", size: 5, folder_id: 2 },
    { name: "file10", size: 5, folder_id: 2 },
    { name: "file11", size: 5, folder_id: 3 },
    { name: "file12", size: 5, folder_id: 3 },
    { name: "file13", size: 5, folder_id: 3 },
    { name: "file14", size: 5, folder_id: 3 },
    { name: "file15", size: 5, folder_id: 3 },
  ];
}
