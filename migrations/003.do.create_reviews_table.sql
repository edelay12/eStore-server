create table reviews (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    product_name text not null,
    USER_NAME text REFERENCES users(user_name) not null,
    date_created TIMESTAMP NOT NULL DEFAULT now(),
    title text NOT NULL,
    content text NOT NULL,
    rating INTEGER,
    verified boolean DEFAULT FALSE
);


