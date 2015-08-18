create table users (
  id serial,
  email text,
  name text,
  shortname text,
  hash text,
  createdate timestamp,
  PRIMARY KEY (id)
);
