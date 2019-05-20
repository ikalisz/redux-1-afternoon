import {createStore} from 'redux'

const initialState = {
    recipeName: '',
    recipeCategory: '',
    first_name: '',
    last_name: '',
    ingredients: [],
    instructions: [],
    recipes: [],
}

export const RECIPE_NAME = 'RECIPE_NAME'
export const RECIPE_CATEGORY = 'RECIPE_CATEGORY'
export const FIRST_NAME = 'FIRST_NAME'
export const LAST_NAME = 'LAST_NAME'
export const INGREDIENTS_ADD = 'INGREDIENTS_ADD'
export const INSTRUCTION_ADD = 'INSTRUCTION_ADD'
export const RECIPE_ADD = 'RECIPE_ADD'

function reducer (state = initialState, action) {
    switch (action.type) {
        case RECIPE_NAME:
            return {
                ...state,
                recipeName: action.recipeName
            }
        case RECIPE_CATEGORY:
            return {
                ...state,
                recipeCategory: action.recipeCategory
            }
        case FIRST_NAME:
            return {
                ...state,
                first_name: action.first_name
            }
        case LAST_NAME:
            return {
                ...state,
                last_name: action.last_name
            }
        case INGREDIENTS_ADD: 
            return {
                ...state,
                ingredients: [...state.ingredients, action.ingredient]
            }
        case INSTRUCTION_ADD: 
            return {
                ...state,
                instructions: [...state.instructions, action.instruction]
            }
        case RECIPE_ADD:
            return {
                recipes: [...state.recipes, {
                    recipeName: state.recipeName,
                    recipeCategory: state.recipeCategory,
                    first_name: state.first_name,
                    last_name: state.last_name,
                    ingredients: [...state.ingredients],
                    instructions: [...state.instructions]
                }]
            }
        default: 
            return state
    }
}

export default createStore(reducer)
