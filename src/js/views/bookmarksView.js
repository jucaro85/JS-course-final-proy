import View from "./view";
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View{
    _parentEl = document.querySelector('.bookmarks__list');
    _errorMeassage = 'No bookmarks yet';
    addHandlerRender(handler){
        window.addEventListener('load', handler());
    }
    _generateMarkUp(){        
        const theId = window.location.hash.slice(1);
        console.log(this._data);
        return this._data.map(item=>{
            return `
            <li class="preview">
                <a class="preview__link ${theId === item.id ? 'preview__link--active' : ''}" href="#${item.id}">
                <figure class="preview__fig">
                    <img src="${item.image}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${item.title}</h4>
                    <p class="preview__publisher">${item.publisher}</p>
                    <div class="preview__user-generated${item.key ? ' ' : ' hidden '}">
                    <svg>
                        <use href="${icons}#icon-user"></use>
                    </svg>
                    </div>
                </div>
                </a>
            </li>`; 
        }).join('');
        
    }
}

export default new BookmarksView();