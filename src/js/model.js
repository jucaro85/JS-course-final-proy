import { API_URL, API_KEY } from './config.js';
import { getJson, sendJson } from './helpers.js';
import { RESULTSPERPAGE } from './config.js';
import addRecipeView from './views/addRecipeView.js';

export const state = {
    recipe: {},
    search:{
        query: '',
        results: [],
        resultsPerPage: RESULTSPERPAGE,
        page: 1
    },
    bookmarks:[]
}

const createRecipeObj= function(data){
    const { recipe } = data.data;
    const newRecObj =  {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...(recipe.key && { key: recipe.key})
    }
    return newRecObj;
}

export const loadRecipe = async function (id) {
    try{
        const responseData = await getJson(`${API_URL}/${id}`);

        state.recipe = createRecipeObj(responseData);

        if(state.bookmarks.some(b=> b.id === id)){ 
            state.recipe.bookmarked = true;
        }else{
            state.recipe.bookmarked = false;
        };
    }catch(err){
        throw err;
    }
}

export const loadSearchResults = async function (query) {
    try{
        const responseData = await getJson(`${API_URL}?search=${query}&key=${API_KEY}`);
        state.search.query = query;
        state.search.page = 1;
        state.search.results = responseData.data.recipes.map(rec=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                sourceUrl: rec.source_url,
                image: rec.image_url,
                servings: rec.servings,
                cookingTime: rec.cooking_time,
                ...(rec.key && { key: rec.key})
            }
        })
        
        
    }catch(err){
        throw err;
    }
}

export const getResultsPage = function(page = state.search.page){
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end); 
}

export const updateServings = function(newServings) {
    state.recipe.ingredients.forEach( ing =>{
        ing.quantity = (ing.quantity * newServings) /state.recipe.servings;
    });
    state.recipe.servings = newServings;
}

export const addBookmark = function(recipe){   
    state.bookmarks.push(recipe);
    if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    saveBookmarks();
}
export const deleteBookmark = function(id){
    state.bookmarks = state.bookmarks.filter( b => b.id !== id);
    if(id === state.recipe.id) state.recipe.bookmarked = false;
    saveBookmarks();
}

const loadBookmarks = function(){
    const saved =  localStorage.getItem('forkBookmarks');
    if(saved) state.bookmarks = JSON.parse(saved);
}
loadBookmarks();

const saveBookmarks = function(){
    localStorage.setItem('forkBookmarks', JSON.stringify(state.bookmarks));
}

export const uploadRecipe = async function(newRecipe){
    try{
        const ingredientsFilter = Object.entries(newRecipe).filter(entry=> entry[0].startsWith('ingredient') && entry[1] !== '' );
        const ingredientsObj = ingredientsFilter.map(ing=>{
            const ingArr = ing[1].trim().split(',');
            if(ingArr.length !== 3 ) throw new Error('Wrong ingredient format');
            const [quantity,unit, description] = ing[1].trim().split(',');
            return {quantity: quantity ? +quantity : null,unit,description};
        });

        const recipe = {
            title: newRecipe.title,
            publisher: newRecipe.publisher,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            servings: newRecipe.servings,
            cooking_time: newRecipe.cookingTime,
            ingredients: ingredientsObj
         }
         
         const data = await sendJson(`${API_URL}?key=${API_KEY}`,recipe);
         
         state.recipe = createRecipeObj(data);
         //Add recipe to Bookmark
         addBookmark(state.recipe);
         
    }catch(err){
        throw(err);
    }

     
}