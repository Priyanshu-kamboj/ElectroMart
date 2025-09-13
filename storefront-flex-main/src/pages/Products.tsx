import { useState, useMemo } from "react";
import ProductCard from "@/components/Products/ProductCard";
import ProductFilters from "@/components/Products/ProductFilters";
import { products, getProductsByCategory } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";
import productsHeroImage from "@/assets/products-hero.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    let filtered = getProductsByCategory(selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsHeroImage})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our carefully curated collection of premium products designed to meet your needs.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 p-6 shadow-soft">
                <CardContent className="p-0">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Filters
                  </h2>
                  <ProductFilters
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedCategory === "All" ? "All Products" : selectedCategory}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                    {searchTerm && (
                      <span> for "{searchTerm}"</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center shadow-soft">
                  <CardContent className="flex flex-col items-center justify-center">
                    <Package className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No products found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Info */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our diverse range of carefully selected products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory("Electronics")}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Electronics
                </h3>
                <p className="text-muted-foreground text-sm">
                  Latest gadgets and technology products
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory("Clothing")}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Clothing
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fashion and apparel for all occasions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory("Home & Garden")}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Home & Garden
                </h3>
                <p className="text-muted-foreground text-sm">
                  Everything for your home and garden
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-medium transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory("Sports")}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Sports
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fitness and sports equipment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;