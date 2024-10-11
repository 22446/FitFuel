export interface Idietplan {
  mealPlan: MealPlan;
}

interface MealPlan {
  meals: Meal[];
  BreakFast: BreakFast;
  Lunch: BreakFast;
  Dinner: BreakFast;
}
interface Meal {
  Recipe: string;
  Time: string;
  Ingredients: string[];
  Calories: number;
  Protein: number;
  Carbohydrates: number;
  Fats: number;
}
interface BreakFast {
  Recipe: string;
  Ingredients: string[];
  Calories: number;
  Protein: number;
  Carbohydrates: number;
  Fats: number;
}
