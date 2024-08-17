import icons from 'url:../../img/icons.svg';
import {Fraction} from 'fractional';


export default class View{
    _data;
    _clearRecipeContainer(){this._parentEl.innerHTML =''};

    render(data,id){
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
        this._data = data;
        const recipeMarkUp = this._generateMarkUp();
        this._clearRecipeContainer();
        this._parentEl.insertAdjacentHTML('afterbegin',recipeMarkUp);
    }

    update(data){
      //if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

      this._data = data;
      const newMarkUp = this._generateMarkUp();

      const newDom = document.createRange().createContextualFragment(newMarkUp);
      const newEls = Array.from(newDom.querySelectorAll('*'));
      const curEls = Array.from(this._parentEl.querySelectorAll('*'));
      newEls.forEach((newEl, i)=>{
        const curEl = curEls[i];
        if(newEl.isEqualNode(curEl)) return;
        Array.from(newEl.attributes).forEach(attr=>curEl.setAttribute(attr.name, attr.value));
        if(newEl.querySelectorAll('*').length) return;
        curEl.innerText = newEl.innerText;
      });
    }

    renderError(err){ 
        const errorHTML = `
        <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${err ? err : this._errorMeassage}</p>
        </div>`;
        this._clearRecipeContainer();
        this._parentEl.insertAdjacentHTML('afterbegin', errorHTML);
    }

    renderMessage(msg = this._successMessage){
        const messageHTML = `
        <div class="message">
          <div>
            <svg>
              <use href="src/img/icons.svg#icon-smile"></use>
            </svg>
          </div>
          <p>${msg}</p>
        </div>`;
    }

    renderSpinner(){
        const markUp = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
        this._parentEl.innerHTML = '';
        this._parentEl.insertAdjacentHTML('afterbegin',markUp);
    }
}





