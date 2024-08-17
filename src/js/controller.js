'strict mode'
import * as model from './model.js';
import {TIMEOUT_MESSAGE} from './config.js';
import recipeview from './views/recipeview.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';
import { API_URL } from './config.js';


const showRecipe = async function(params) {
  try{
    const id = window.location.hash.slice(1);
    if(!id) return;
    recipeview.renderSpinner();

    resultsView.update(model.getResultsPage());
    bookmarksView.update(model.state.bookmarks);

    //Loading Recipe
    await model.loadRecipe(id)
    const {recipe} = model.state;

    // Render Recipe
    recipeview.render(model.state.recipe);

  }catch(err){
    console.error(err);
    recipeview.renderError();
  }
};

const controlSearchResults = async function(){
  try{

    //Get search query
    const query = searchView.getQuery();
    if(!query) return;

    resultsView.renderSpinner();
    
    //Load results
    await model.loadSearchResults(query);
    searchView.clearField();

    //Render results
    resultsView.render(model.getResultsPage(1),model.state.recipe.id);

    //Render Pagination
    paginationView.render(model.state.search);
    
  }catch(err){
    console.log(err);
  }
}
controlSearchResults();

const controlPagination = function(newPage){
  model.state.search.page = newPage

  //Render results
  resultsView.render(model.getResultsPage(newPage),model.state.recipe.id);

  //Render Pagination
  paginationView.render(model.state.search);
}

const controlServings = function(x){
  //Update State
  model.updateServings(x);

  //Update the view
  //recipeview.render(model.state.recipe);
  recipeview.update(model.state.recipe);

}

const controlBookmarks = function(){
  if(model.state.recipe.bookmarked) {
    model.deleteBookmark(model.state.recipe.id);
  }else{ model.addBookmark(model.state.recipe);}
  
  recipeview.update(model.state.recipe);
  
  bookmarksView.render(model.state.bookmarks);
}

const loadBookmarks = function(){
  bookmarksView.render(model.state.bookmarks);
}
const controlAddRecipe = async function(newRecipe){
  try{
    addRecipeView.renderSpinner();

    //Upload Recipe
    await model.uploadRecipe(newRecipe);

    //Render Recipe
    bookmarksView.render(model.state.bookmarks);
    recipeview.render(model.state.recipe);

    addRecipeView.renderMessage('Recipe Uploaded');

    setTimeout(function(){
      addRecipeView.togglePopup();
    }, TIMEOUT_MESSAGE * 1000);

    window.history.pushState(null,'',`#${model.state.recipe.id}`);
    
  }catch(err){
    console.log(err);
    addRecipeView.renderError(err.message);
  }
  //upload new Recipe
}

const init = function(){
  searchView.addHandlerRender(controlSearchResults);
  recipeview.addHandlerRender(showRecipe);
  paginationView.addHandlerClick(controlPagination);
  recipeview.addHandlerServings(controlServings);
  recipeview.addHandlerBookmark(controlBookmarks);
  bookmarksView.addHandlerRender(loadBookmarks);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}
init();