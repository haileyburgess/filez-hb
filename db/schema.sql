
DROP TABLE IF EXISTS folders CASCADE;
DROP TABLE IF EXISTS files;


CREATE TABLE files (
   id serial PRIMARY KEY,
    name text NOT NULL
);

CREATE TABLE folders (
    id serial PRIMARY KEY,
    name text NOT NULL,
    size int NOT NULL,
    folder_id int NOT NULL REFERENCES files(id) ON DELETE CASCADE,
    UNIQUE (name, folder_id)
);
