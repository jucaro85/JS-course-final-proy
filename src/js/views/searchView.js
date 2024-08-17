class SearchView{
    #parentEl = document.querySelector('.search');
    getQuery(){
        return this.#parentEl.querySelector('.search__field').value;
    }
    clearField(){
        this.#parentEl.querySelector('.search__field').value = '';
    }
    addHandlerRender(handler){
        this.#parentEl.addEventListener("submit",function(e){
            e.preventDefault();
            handler();
        });
    }
}
export default new SearchView();