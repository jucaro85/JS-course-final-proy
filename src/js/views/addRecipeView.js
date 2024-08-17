import View from "./view";
import icons from 'url:../../img/icons.svg';

class addRecipeView extends View{
    _parentEl = document.querySelector('.upload');
    _windowEl = document.querySelector('.add-recipe-window');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _overlay = document.querySelector('.overlay');
    _btnClose = document.querySelector('.btn--close-modal');


    constructor(){
        super();
        this.addHandlerToggleWindow();
    }

    togglePopup(){
        this._overlay.classList.toggle('hidden');
        this._windowEl.classList.toggle('hidden');
    }

    addHandlerToggleWindow(){
        [this._overlay,this._btnClose,this._btnOpen].forEach(btn=>{ 
            btn.addEventListener('click',(e)=>{ 
                this.togglePopup();
            });
        });
    }

    addHandlerClick(handler){
        this._parentEl.addEventListener('click', function(e){
            const btn = e.target.closest('.nav__btn--add-recipe');
            if(!btn) return;
            handler();
        })
    }
    /**
     * Handler
     * @param {function} handler 
     * Executes function.
     */
    addHandlerUpload( handler){
        this._parentEl.addEventListener('submit', function(e){
            e.preventDefault();
            const dataArr = [...new FormData(this)];
            const data = Object.fromEntries(dataArr);
            handler(data);
            
        })
    }

    _generateMarkUp(){ 
        const markUp = ``;
        return markUp;
    }
}

export default new addRecipeView();