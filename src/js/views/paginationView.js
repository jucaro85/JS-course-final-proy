import View from "./view";
import icons from 'url:../../img/icons.svg';

class Pagination extends View{
    _parentEl = document.querySelector('.pagination');

    addHandlerClick(handler){
        this._parentEl.addEventListener('click', function(e){
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;
            const goto = btn.dataset.goto;
            handler(goto);
        })
    }

    _generateMarkUp(){
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        const currPage = this._data.page;        
        let markUp = '';
        if(currPage > 1){
            markUp += `
            <button data-goto="${+currPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${+currPage - 1}</span>
            </button>`}
        if(currPage < numPages){
            markUp += `<button data-goto="${+currPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${+currPage + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>`;}
        return markUp;
    }
}

export default new Pagination();