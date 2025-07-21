'use server';

/**
 * @fileOverview AI-powered tool to suggest recipes using the available spices.
 *
 * - suggestRecipes - A function that handles the recipe suggestion process.
 * - SuggestRecipesInput - The input type for the suggestRecipes function.
 * - SuggestRecipesOutput - The return type for the suggestRecipes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRecipesInputSchema = z.object({
  spices: z
    .array(z.string())
    .describe('A list of spices that the user wants to use in a recipe.'),
});
export type SuggestRecipesInput = z.infer<typeof SuggestRecipesInputSchema>;

const RecipeSchema = z.object({
  title: z.object({
    en: z.string().describe('The English title of the recipe.'),
    si: z.string().describe('The Sinhala title of the recipe.'),
  }),
  ingredients: z.array(z.object({
    en: z.string().describe('The ingredient in English.'),
    si: z.string().describe('The ingredient in Sinhala.'),
  })).describe('The ingredients for the recipe, in both English and Sinhala.'),
  instructions: z.object({
    en: z.array(z.string()).describe('The instructions for the recipe in English, as a list of steps.'),
    si: z.array(z.string()).describe('The instructions for the recipe in Sinhala, as a list of steps.'),
  }),
  url: z.string().describe('The URL of the recipe.'),
});

const SuggestRecipesOutputSchema = z.object({
  recipes: z.array(RecipeSchema).describe('A list of recipe suggestions.'),
});
export type SuggestRecipesOutput = z.infer<typeof SuggestRecipesOutputSchema>;

export async function suggestRecipes(input: SuggestRecipesInput): Promise<SuggestRecipesOutput> {
  return suggestRecipesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRecipesPrompt',
  input: {schema: SuggestRecipesInputSchema},
  output: {schema: SuggestRecipesOutputSchema},
  prompt: `You are a recipe suggestion bot. A user will provide you with a list of spices that they want to use in a recipe.

You will use this information to find recipes that use the spices.

You should suggest multiple options from a third party API, linking to full recipes. 
You MUST provide all text content (titles, ingredients, instructions) in both English and Sinhala.
The instructions should be provided as an array of strings, where each string is a separate step.

Return a JSON object containing a list of recipes.

Spices: {{{spices}}}
`,
});

const suggestRecipesFlow = ai.defineFlow(
  {
    name: 'suggestRecipesFlow',
    inputSchema: SuggestRecipesInputSchema,
    outputSchema: SuggestRecipesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
