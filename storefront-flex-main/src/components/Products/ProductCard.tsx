import { Product } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "featured";
}

const ProductCard = ({ product, variant = "default" }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
    // This would integrate with a cart system in a real app
  };

  const handleQuickView = () => {
    console.log(`Quick view ${product.name}`);
    // This would open a product details modal
  };

  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 ${
      variant === "featured" ? "border-primary/20" : ""
    }`}>
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
            <span className="text-lg font-bold text-primary">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
          
          <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;