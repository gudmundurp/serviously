create table items (
    id serial,
    content text,
    category text,
    author text,       
    parent integer,
    status text,
    rank smallint,
    createdate timestamp,
    editdate timestamp, 
    PRIMARY KEY (id)                                                   
);