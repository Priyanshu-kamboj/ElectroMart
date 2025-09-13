import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { categories } from "@/data/products";

interface ProductFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductFilters = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const clearFilters = () => {
    onSearchChange("");
    onCategoryChange("All");
  };

  const hasActiveFilters = searchTerm || selectedCategory !== "All";

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4"
        />
      </div>

      {/* Filter Toggle (Mobile) */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {hasActiveFilters && (
            <Badge variant="destructive" className="ml-2 h-4 w-4 p-0 text-xs">
              !
            </Badge>
          )}
        </Button>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className={`space-y-3 ${showFilters ? "block" : "hidden md:block"}`}>
        <h3 className="font-medium text-sm text-foreground">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-primary text-white"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {searchTerm && (
            <Badge variant="secondary" className="text-xs">
              Search: "{searchTerm}"
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 ml-1"
                onClick={() => onSearchChange("")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="text-xs">
              Category: {selectedCategory}
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 ml-1"
                onClick={() => onCategoryChange("All")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductFilters;