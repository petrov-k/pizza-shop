class AddProducts < ActiveRecord::Migration[6.1]
  def change
    
    Product.create ({:title => "Pizza One", 
                   :description => "Beautiful first pizza, have some flavours of ancient relics and spices from our grandfathers.",
                   :price => 12,
                   :size => 30,
                   :is_spicy => false,
                   :is_veg => false,
                   :is_best_offer => true,
                   :path_to_image => '/images/pizza1.jpg'
  })
    Product.create ({:title => "Pizza Two", 
                   :description => "Beautiful second pizza, have some flavours of ancient relics and spices from our grandfathers.",
                   :price => 13,
                   :size => 35,
                   :is_spicy => true,
                   :is_veg => false,
                   :is_best_offer => false,
                   :path_to_image => '/images/pizza2.jpg'
  })
    Product.create ({:title => "Pizza three", 
                   :description => "Beautiful third pizza, have some flavours of ancient relics and spices from our grandfathers.",
                   :price => 14,
                   :size => 27,
                   :is_spicy => false,
                   :is_veg => true,
                   :is_best_offer => false,
                   :path_to_image => '/images/pizza3.jpg'
    })
  end
end
