CREATE TABLE users(
  id VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email  VARCHAR(50) NOT NULL,
  role VARCHAR(50) NOT NULL
);

INSERT INTO users(id, name, phone, email, role) VALUES
('15998', "Avi Agababa", "1800888999","agababa@hobo.com", "manager"),
('22222222', "Ameriko Vespuchi", "158654889","amritser@hobo.com", "manager");

CREATE TABLE products(
  part_number VARCHAR(50) NOT NULL,
  description VARCHAR(50) NOT NULL,
  qty INT NOT NULL,
  price  INT NOT NULL,
  img_url VARCHAR(500) NOT NULL
);

INSERT INTO products(part_number, description, qty, price, img_url) VALUES
('123', "Satin Dall", "19","300" ,"https://www.markeybass.com:8003"),
('222', "R2D2", "100","2000", "https://www.youtube.com/watch?v=72SlQezipBg&ab_channel=MarkKirzhner");

