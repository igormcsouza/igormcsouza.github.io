import { MainImage, NewsApiImage, NutritionAppImage, PersonalBinImage, PureTodoImage, PymetaheuristicsImage, Talk2WebImage, TodolistImage } from ".";

export default function getImage(image: string) {
  switch (image) {
    case "main":
      return MainImage;
    case "news-api":
      return NewsApiImage;
    case "pymetaheuristics":
      return PymetaheuristicsImage;
    case "todolist":
      return TodolistImage;
    case "talktoweb":
      return Talk2WebImage;
    case "personal-bin":
      return PersonalBinImage;
    case "nutrition-app":
      return NutritionAppImage;
    case "pure-todo":
      return PureTodoImage;
    default:
      return MainImage;
  }
}