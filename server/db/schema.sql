DROP DATABASE IF EXISTS pds_db;
CREATE DATABASE pds_db;

\c pds_db;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album  TEXT,
    time TEXT,
    is_favorite BOOLEAN
);



INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
    ('Wild Irish Roses', 'Smino', 'blkswn', '2:49', true),
    ('Skeemin', 'Arin Ray', 'Platinum Fire', '3:13', true),
    ('No Role Modelz', 'J. Cole', '2014 Forest Hills Drive', '4:52', true),
    ('Come Together', 'The Internet', 'Hive Mind', '3:40', true),
    ('Stronger', 'Kanye West', 'Graduation', '5:11', true);
