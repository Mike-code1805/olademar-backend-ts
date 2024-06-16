import mongoose from "mongoose";
import { favoriteSchemma } from "../schema/favoriteSchema";
import { Favorite } from "../types/Favorite";

export const favoriteModel = mongoose.model<Favorite>('Favorite', favoriteSchemma);