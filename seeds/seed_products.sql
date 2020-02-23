TRUNCATE products CASCADE;
insert into products (product_name, product_roast, price, picture_main, details, origin, collection, sale ,sale_price , featured)
VALUES
/* coldbrew */
('Stone Street' , 'Dark', 15, 'https://m.media-amazon.com/images/I/61+ZAEo7T9L._AC_UL640_FMwebp_QL65_.jpg','Taste Profile: Low acidity, slightly sweet, smooth, well balanced, & bold coffee flavor.
/Coffee Origin: Single Origin Colombian Supremo /Roast Level: Dark Roast /Grind Level: Coarse ground for slow extraction', 'Colombia' ,'cold', TRUE, 14, TRUE),
('Tiny Footprint' , 'Light' , 12, 'https://m.media-amazon.com/images/I/71x370KDfBL._AC_UL640_FMwebp_QL65_.jpg' ,'Sweet, silky richness with subtle bright fruit and floral tones infused in a cocoa like body. /Coffee Origin: 100% Organic Shade-Grown USA Coffee /Roast Level: Light /Grind Level: The worlds first carbon negative coffee: For every pound that’s sold, we donate a portion of the proceeds to fund reforestation in Ecuador’s Mindo cloud forest.', 'USA','cold' , TRUE, 8, FALSE),
('Bizzy Organic' , 'Light' , 16 , 'https://m.media-amazon.com/images/I/814H-OOUBRL._AC_UL640_FMwebp_QL65_.jpg', 'Smooth and Sweet USDA Organic, ethically sourced coffee from Peru and Nicaragua.' , 'Peru', 'cold', FALSE, null, TRUE),
('Stone Cold' , 'Dark', 22, 'https://m.media-amazon.com/images/I/81aOQbkwQxL._AC_UL640_FMwebp_QL65_.jpg', 'Silky smooth with hints of toffee caramel chocolate grap  /Coffee Origin: Colombia /Roast Level: Dark /Grind Level:', 'Colombia' , 'cold', TRUE, 20, TRUE),
/* hotbrew */
('Death Wish' , 'Dark', 25, 'https://m.media-amazon.com/images/I/41dhaBF7JCL._AC_UL640_FMwebp_QL65_.jpg' ,'Taste Profile: Smooth Bold Delecious /Coffee Origin: USA Fairtrade /Roast Level: Dark /Grind Level: Bold, Strongest Coffee Available', 'USA', 'hot', FALSE, null, TRUE),
('Valhalla Java', 'Medium', 18, 'https://m.media-amazon.com/images/I/81pzCaCj7RL._AC_UL640_FMwebp_QL65_.jpg', 'Taste Profile: Expertly roasted to provide an ultra-strong coffee that is bold and smooth /Coffee Origin: USA Fairtrade /Roast Level: Medium /Grind Level: Medium-coarse', 'USA', 'hot', FALSE, null, TRUE),
('Death Wish' , 'Dark', 25, 'https://m.media-amazon.com/images/I/41dhaBF7JCL._AC_UL640_FMwebp_QL65_.jpg' ,'Taste Profile: Smooth Bold Delecious /Coffee Origin: USA Fairtrade /Roast Level: Dark /Grind Level: Bold, Strongest Coffee Available', 'USA', 'hot', FALSE, null, TRUE),
('Bizzy Organic' , 'Light' , 16 , 'https://m.media-amazon.com/images/I/814H-OOUBRL._AC_UL640_FMwebp_QL65_.jpg', 'Smooth and Sweet USDA Organic, ethically sourced coffee from Peru and Nicaragua.' , 'Peru', 'cold', FALSE, null, TRUE),
('Death Wish' , 'Dark', 25, 'https://m.media-amazon.com/images/I/41dhaBF7JCL._AC_UL640_FMwebp_QL65_.jpg' ,'Taste Profile: Smooth Bold Delecious /Coffee Origin: USA Fairtrade /Roast Level: Dark /Grind Level: Bold, Strongest Coffee Available', 'USA', 'hot', FALSE, null, TRUE),
('Stone Street' , 'Dark', 15, 'https://m.media-amazon.com/images/I/61+ZAEo7T9L._AC_UL640_FMwebp_QL65_.jpg','Taste Profile: Low acidity, slightly sweet, smooth, well balanced, & bold coffee flavor.
/Coffee Origin: Single Origin Colombian Supremo /Roast Level: Dark Roast /Grind Level: Coarse ground for slow extraction', 'Colombia' ,'cold', TRUE, 14, TRUE),
('Tiny Footprint' , 'Light' , 12, 'https://m.media-amazon.com/images/I/71x370KDfBL._AC_UL640_FMwebp_QL65_.jpg' ,'Sweet, silky richness with subtle bright fruit and floral tones infused in a cocoa like body. /Coffee Origin: 100% Organic Shade-Grown USA Coffee /Roast Level: Light /Grind Level: The worlds first carbon negative coffee: For every pound that’s sold, we donate a portion of the proceeds to fund reforestation in Ecuador’s Mindo cloud forest.', 'USA','cold' , TRUE, 8, FALSE),
('Bizzy Organic' , 'Light' , 16 , 'https://m.media-amazon.com/images/I/814H-OOUBRL._AC_UL640_FMwebp_QL65_.jpg', 'Smooth and Sweet USDA Organic, ethically sourced coffee from Peru and Nicaragua.' , 'Peru', 'cold', FALSE, null, TRUE),
('Stone Cold' , 'Dark', 22, 'https://m.media-amazon.com/images/I/81aOQbkwQxL._AC_UL640_FMwebp_QL65_.jpg', 'Silky smooth with hints of toffee caramel chocolate grap  /Coffee Origin: Colombia /Roast Level: Dark /Grind Level:', 'Colombia' , 'cold', TRUE, 20, TRUE),
/* hotbrew */
('Death Wish' , 'Dark', 25, 'https://m.media-amazon.com/images/I/41dhaBF7JCL._AC_UL640_FMwebp_QL65_.jpg' ,'Taste Profile: Smooth Bold Delecious /Coffee Origin: USA Fairtrade /Roast Level: Dark /Grind Level: Bold, Strongest Coffee Available', 'USA', 'hot', FALSE, null, TRUE),
('Valhalla Java', 'Medium', 18, 'https://m.media-amazon.com/images/I/81pzCaCj7RL._AC_UL640_FMwebp_QL65_.jpg', 'Taste Profile: Expertly roasted to provide an ultra-strong coffee that is bold and smooth /Coffee Origin: USA Fairtrade /Roast Level: Medium /Grind Level: Medium-coarse', 'USA', 'hot', FALSE, null, TRUE),
('Death Wish' , 'Dark', 25, 'https://m.media-amazon.com/images/I/41dhaBF7JCL._AC_UL640_FMwebp_QL65_.jpg' ,'Taste Profile: Smooth Bold Delecious /Coffee Origin: USA Fairtrade /Roast Level: Dark /Grind Level: Bold, Strongest Coffee Available', 'USA', 'hot', FALSE, null, TRUE),
('Bizzy Organic' , 'Light' , 16 , 'https://m.media-amazon.com/images/I/814H-OOUBRL._AC_UL640_FMwebp_QL65_.jpg', 'Smooth and Sweet USDA Organic, ethically sourced coffee from Peru and Nicaragua.' , 'Peru', 'cold', FALSE, null, TRUE),
('Death Wish' , 'Dark', 25, 'https://m.media-amazon.com/images/I/41dhaBF7JCL._AC_UL640_FMwebp_QL65_.jpg' ,'Taste Profile: Smooth Bold Delecious /Coffee Origin: USA Fairtrade /Roast Level: Dark /Grind Level: Bold, Strongest Coffee Available', 'USA', 'hot', FALSE, null, TRUE)


/* 
psql -U estoreapp -d estore -f./seeds/seed_products.sql 
Taste Profile: /Coffee Origin: /Roast Level: /Grind Level:

*/