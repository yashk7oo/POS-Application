let products = [
    [101,'Chicken in Kerala', 225],
    [102,'Chicken Skewers', 299],
    [103,'Marinated chicken', 225],
    [104,'Chicken legs', 200],
    [105,'Semis, chicken in the marinade and spices', 500],
    [106,'Meat kofta', 299],
    [107,'steak masala, masala Stroganoff', 199],
    [108,'Fish tikka', 700],
    [109,'Canned sardines', 1200],
    [110,'Danone Yogurt', 60],
    [111,'Yogurt ', 25],
    [112,'Kerd (skim milk)', 23],
    [113,'Cottage cheese', 140],
    [114,'Milk ', 22],
    [115,'Cheese', 200],
    [116,'Paneer Cheese', 285],
    [117,'Mozzarella Cheese', 262],
    [118,'Butter', 450],
    [119,'Watermelon', 16],
    [120,'Onions', 20],
    [121,'Tomatoes', 20],
    [122,'Ginger root', 75],
    [123,'Garlic', 185],
    [124,'Carrots', 60],
    [125,'Cabbage', 25],
    [126,'Peppers', 70],
    [127,'Bananas', 19],
    [128,'Pineapple', 25],
    [129,'Pashion fruit', 200],
    [130,'Coconut', 20],
    [131,'Lemon', 86],
    [132,'Gooseberry', 65],
    [133,'Dates', 120],
    [134,'Grapes', 50],
    [135,'Guava red', 60],
    [136,'Chick', 59],
    [137,'Pistachio', 1400],
    [138,'Almonds', 975],
    [139,'Dried pineapples chopped', 800],
    [140,'Dried Cranberry', 1000],
    [141,'Dried strawberries', 1000],
    [142,'Dried red cherry', 950],
    [143,'Dried Prunes', 700],
    [144,'Dried golden raisins', 240],
    [145,'The Afghan raisins', 500],
    [146,'Dried Papaya', 600],
    [147,'Dried apricots ', 680],
    [148,'Turmeric', 165],
    [149,'Not powdered Turmeric ', 35 ],
    [150,'Masala', 219 ],   


];

function load(){
    var query=document.forms["myform1"]["Product-Id"].value;
    for(var z=0;z<products.length;z++){
        if(products[z][0] == query){
            alert(products[z][0]);
            alert(products[z][1]);
            alert(products[z][2]);
        //Found
        return ;
        }
    }
        
            alert("invalid Product Id");
            
        
   
}