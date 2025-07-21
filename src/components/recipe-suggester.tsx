'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useApp } from '@/hooks/use-app';
import type { Product, Recipe } from '@/lib/types';
import { uiStrings } from '@/data/products';
import { suggestRecipes } from '@/ai/flows/recipe-suggestion';
import { Lightbulb, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface RecipeSuggesterProps {
  products: Product[];
}

export function RecipeSuggester({ products }: RecipeSuggesterProps) {
  const { language } = useApp();
  const [selectedSpices, setSelectedSpices] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckboxChange = (spiceName: string, checked: boolean | 'indeterminate') => {
    if (checked) {
      setSelectedSpices((prev) => [...prev, spiceName]);
    } else {
      setSelectedSpices((prev) => prev.filter((s) => s !== spiceName));
    }
  };

  const handleSubmit = async () => {
    if (selectedSpices.length === 0) return;
    setIsLoading(true);
    setError(null);
    setRecipes([]);

    try {
      const result = await suggestRecipes({ spices: selectedSpices });
      setRecipes(result.recipes);
    } catch (e) {
      console.error(e);
      setError('Failed to get recipe suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <Lightbulb className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="font-headline text-3xl">{uiStrings.recipeToolTitle[language]}</CardTitle>
              <CardDescription>{uiStrings.recipeToolDescription[language]}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="font-semibold mb-4">{uiStrings.selectSpices[language]}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`spice-${product.id}`}
                        onCheckedChange={(checked) => handleCheckboxChange(product.name.en, checked)}
                      />
                      <Label htmlFor={`spice-${product.id}`}>{product.name[language]}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={handleSubmit} disabled={isLoading || selectedSpices.length === 0} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {uiStrings.generating[language]}
                  </>
                ) : (
                  uiStrings.suggestRecipes[language]
                )}
              </Button>
            </CardContent>
          </Card>
          
          {(recipes.length > 0 || error) && (
            <div className="mt-8">
              <h3 className="text-2xl font-headline font-bold text-center mb-6">{uiStrings.suggestions[language]}</h3>
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="grid gap-6">
                {recipes.map((recipe, index) => (
                   <Card key={index} className="overflow-hidden">
                     <CardHeader>
                       <CardTitle>{recipe.title}</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="font-semibold mb-2">Ingredients:</p>
                       <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                         {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                       </ul>
                       <p className="text-sm text-muted-foreground line-clamp-3">{recipe.instructions}</p>
                     </CardContent>
                     <CardFooter>
                       <Button asChild variant="link" className="p-0 h-auto">
                         <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                           {uiStrings.viewRecipe[language]}
                         </a>
                       </Button>
                     </CardFooter>
                   </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
