function e(e){return e&&e.__esModule?e.default:e}var r,t,n,i=globalThis,a={},s={},o=i.parcelRequire3a11;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var r=s[e];delete s[e];var t={id:e,exports:{}};return a[e]=t,r.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){s[e]=r},i.parcelRequire3a11=o),(0,o.register)("27Lyk",function(e,r){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,n=new Map;t=function(e,r){for(var t=0;t<r.length-1;t+=2)n.set(r[t],{baseUrl:e,path:r[t+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.05d4e93e.js","eyyUD","icons.c14567a0.svg"]'));const c="https://forkify-api.herokuapp.com/api/v2/recipes",l="69df3815-0626-4933-ac21-d1eb388f7d7d",d=function(e){return new Promise(function(r,t){setTimeout(function(){t(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},u=async function(e){try{let r=await Promise.race([d(7),fetch(`${e}`)]),t=await r.json();if(!r.ok)throw Error(t.message);return t}catch(e){throw e}},p=async function(e,r){try{let t=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),n=await Promise.race([d(7),t]),i=await n.json();if(!n.ok)throw Error(i.message);return i}catch(e){throw e}};var h={};h=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,r){if(void 0!==e&&r)"number"==typeof e&&"number"==typeof r?(this.numerator=e,this.denominator=r):"string"==typeof e&&"string"==typeof r&&(this.numerator=parseInt(e),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,n,i=num.split(" ");if(i[0]&&(t=i[0]),i[1]&&(n=i[1]),t%1==0&&n&&n.match("/"))return new Fraction(t).add(new Fraction(n));if(!t||n)return;if("string"==typeof t&&t.match("/")){var a=t.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,t=this.denominator,n=[];return 0!=e&&n.push(e),0!=r&&n.push((0===e?r:Math.abs(r))+"/"+t),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var r=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator+=e.numerator,r.normalize()},Fraction.prototype.subtract=function(e){var r=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator-=e.numerator,r.normalize()},Fraction.prototype.multiply=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.numerator,r.denominator*=e.denominator;else{if("number"!=typeof e)return r.multiply(new Fraction(e));r.numerator*=e}return r.normalize()},Fraction.prototype.divide=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.denominator,r.denominator*=e.numerator;else{if("number"!=typeof e)return r.divide(new Fraction(e));r.denominator*=e}return r.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var r=this.clone().normalize(),e=e.clone().normalize();return r.numerator===e.numerator&&r.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,r){if(!r)return Math.round(e);var t=Math.pow(10,r);return Math.round(e*t)/t},function(){if(r(this.denominator)){var e=t(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(r(this.numerator)){var e=t(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,r){var t=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(r);return(n.forEach(function(e){var r=i.indexOf(e);r>=0&&(t.push(e),i.splice(r,1))}),0===t.length)?1:function(){var e,r=t[0];for(e=1;e<t.length;e++)r*=t[e];return r}()},Fraction.primeFactors=function(e){for(var r=Math.abs(e),t=[],n=2;n*n<=r;)r%n==0?(t.push(n),r/=n):n++;return 1!=r&&t.push(r),t},n=Fraction;class g{_data;_clearRecipeContainer(){this._parentEl.innerHTML=""}render(e,r){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkUp();this._clearRecipeContainer(),this._parentEl.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let r=this._generateMarkUp(),t=Array.from(document.createRange().createContextualFragment(r).querySelectorAll("*")),n=Array.from(this._parentEl.querySelectorAll("*"));t.forEach((e,r)=>{let t=n[r];!e.isEqualNode(t)&&(Array.from(e.attributes).forEach(e=>t.setAttribute(e.name,e.value)),e.querySelectorAll("*").length||(t.innerText=e.innerText))})}renderError(r){let t=`
        <div class="error">
            <div>
              <svg>
                <use href="${e(h)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${r||this._errorMeassage}</p>
        </div>`;this._clearRecipeContainer(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){}renderSpinner(){let r=`
        <div class="spinner">
          <svg>
            <use href="${e(h)}#icon-loader"></use>
          </svg>
        </div>`;this._parentEl.innerHTML="",this._parentEl.insertAdjacentHTML("afterbegin",r)}}class m extends g{_parentEl=document.querySelector(".upload");_windowEl=document.querySelector(".add-recipe-window");_btnOpen=document.querySelector(".nav__btn--add-recipe");_overlay=document.querySelector(".overlay");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this.addHandlerToggleWindow()}togglePopup(){this._overlay.classList.toggle("hidden"),this._windowEl.classList.toggle("hidden")}addHandlerToggleWindow(){[this._overlay,this._btnClose,this._btnOpen].forEach(e=>{e.addEventListener("click",e=>{this.togglePopup()})})}addHandlerClick(e){this._parentEl.addEventListener("click",function(r){r.target.closest(".nav__btn--add-recipe")&&e()})}addHandlerUpload(e){this._parentEl.addEventListener("submit",function(r){r.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkUp(){return""}}var _=new m;const f={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},v=function(e){let{recipe:r}=e.data;return{id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients,...r.key&&{key:r.key}}},k=async function(e){try{let r=await u(`${c}/${e}`);f.recipe=v(r),f.bookmarks.some(r=>r.id===e)?f.recipe.bookmarked=!0:f.recipe.bookmarked=!1}catch(e){throw e}},y=async function(e){try{let r=await u(`${c}?search=${e}&key=${l}`);f.search.query=e,f.search.page=1,f.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,...e.key&&{key:e.key}}))}catch(e){throw e}},b=function(e=f.search.page){let r=(e-1)*f.search.resultsPerPage,t=e*f.search.resultsPerPage;return f.search.results.slice(r,t)},w=function(e){f.recipe.ingredients.forEach(r=>{r.quantity=r.quantity*e/f.recipe.servings}),f.recipe.servings=e},$=function(e){f.bookmarks.push(e),e.id===f.recipe.id&&(f.recipe.bookmarked=!0),F()},E=function(e){f.bookmarks=f.bookmarks.filter(r=>r.id!==e),e===f.recipe.id&&(f.recipe.bookmarked=!1),F()};!function(){let e=localStorage.getItem("forkBookmarks");e&&(f.bookmarks=JSON.parse(e))}();const F=function(){localStorage.setItem("forkBookmarks",JSON.stringify(f.bookmarks))},S=async function(e){try{let r=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let r=e[1].trim().split(",");if(3!==r.length)throw Error("Wrong ingredient format");let[t,n,i]=e[1].trim().split(",");return{quantity:t?+t:null,unit:n,description:i}}),t={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:e.servings,cooking_time:e.cookingTime,ingredients:r},n=await p(`${c}?key=${l}`,t);f.recipe=v(n),$(f.recipe)}catch(e){throw e}};class M extends g{_parentEl=document.querySelector(".recipe");_errorMeassage="Recipe not found!";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}addHandlerServings(e){this._parentEl.addEventListener("click",function(r){let t=r.target.closest(".recipe__info-buttons .btn--tiny");if(!t)return;let n=t.dataset.servs;n>0&&e(n)})}addHandlerBookmark(e){this._parentEl.addEventListener("click",function(r){r.target.closest(".btn--bookmark")&&e()})}_generateMarkUp(){return`
            <figure class="recipe__fig">
                <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
                <h1 class="recipe__title">
                <span>${this._data.title}</span>
                </h1>
            </figure>
        
            <div class="recipe__details">
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${e(h)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${e(h)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>
        
                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--increase-servings" data-servs="${+this._data.servings-1}">
                    <svg>
                        <use href="${e(h)}#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--increase-servings" data-servs="${+this._data.servings+1}">
                    <svg>
                        <use href="${e(h)}#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
                </div>
        
                <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                    <use href="${e(h)}#icon-user"></use>
                </svg>
                </div>
                <button class="btn--round btn--bookmark">
                <svg class="">
                    <use href="${e(h)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
                </button>
            </div>
        
            <div class="recipe__ingredients">
                <h2 class="heading--2">Recipe ingredients</h2>
                <ul class="recipe__ingredient-list">
                ${this._renderIngredients(this._data.ingredients)}
                </ul>
            </div>
        
            <div class="recipe__directions">
                <h2 class="heading--2">How to cook it</h2>
                <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
                </p>
                <a
                class="btn--small recipe__btn"
                href="${this._data.sourceUrl}"
                target="_blank"
                >
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="${e(h)}#icon-arrow-right"></use>
                </svg>
                </a>
            </div>
        `}_renderIngredients(r){return r.map(r=>`
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${e(h)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${r.quantity?new n(r.quantity).toString():""}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${r.unit}</span>
              ${r.description}
            </div>
          </li>
        `).join("")}}var q=new M;class H{#e=document.querySelector(".search");getQuery(){return this.#e.querySelector(".search__field").value}clearField(){this.#e.querySelector(".search__field").value=""}addHandlerRender(e){this.#e.addEventListener("submit",function(r){r.preventDefault(),e()})}}var T=new H;class L extends g{_parentEl=document.querySelector(".results");_errorMeassage="No recipes found! Please try another query";_generateMarkUp(){let r=window.location.hash.slice(1);return this._data.map(t=>`
            <li class="preview">
                <a class="preview__link ${r===t.id?"preview__link--active":""}" href="#${t.id}">
                <figure class="preview__fig">
                    <img src="${t.image}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${t.title}</h4>
                    <p class="preview__publisher">${t.publisher}</p>
                    <div class="preview__user-generated${t.key?" ":" hidden "}">
                    <svg>
                        <use href="${e(h)}#icon-user"></use>
                    </svg>
                    </div>
                </div>
                </a>
            </li>`).join("")}}var R=new L;class x extends g{_parentEl=document.querySelector(".bookmarks__list");_errorMeassage="No bookmarks yet";addHandlerRender(e){window.addEventListener("load",e())}_generateMarkUp(){let r=window.location.hash.slice(1);return console.log(this._data),this._data.map(t=>`
            <li class="preview">
                <a class="preview__link ${r===t.id?"preview__link--active":""}" href="#${t.id}">
                <figure class="preview__fig">
                    <img src="${t.image}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${t.title}</h4>
                    <p class="preview__publisher">${t.publisher}</p>
                    <div class="preview__user-generated${t.key?" ":" hidden "}">
                    <svg>
                        <use href="${e(h)}#icon-user"></use>
                    </svg>
                    </div>
                </div>
                </a>
            </li>`).join("")}}var P=new x;class U extends g{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",function(r){let t=r.target.closest(".btn--inline");t&&e(t.dataset.goto)})}_generateMarkUp(){let r=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page,n="";return t>1&&(n+=`
            <button data-goto="${+t-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${e(h)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${+t-1}</span>
            </button>`),t<r&&(n+=`<button data-goto="${+t+1}" class="btn--inline pagination__btn--next">
                <span>Page ${+t+1}</span>
                <svg class="search__icon">
                <use href="${e(h)}#icon-arrow-right"></use>
                </svg>
            </button>`),n}}var A=new U;const j=async function(e){try{let e=window.location.hash.slice(1);if(!e)return;q.renderSpinner(),R.update(b()),P.update(f.bookmarks),await k(e);let{recipe:r}=f;q.render(f.recipe)}catch(e){console.error(e),q.renderError()}},O=async function(){try{let e=T.getQuery();if(!e)return;R.renderSpinner(),await y(e),T.clearField(),R.render(b(1),f.recipe.id),A.render(f.search)}catch(e){console.log(e)}};O();const N=async function(e){try{_.renderSpinner(),await S(e),P.render(f.bookmarks),q.render(f.recipe),_.renderMessage("Recipe Uploaded"),setTimeout(function(){_.togglePopup()},2500),window.history.pushState(null,"",`#${f.recipe.id}`)}catch(e){console.log(e),_.renderError(e.message)}};T.addHandlerRender(O),q.addHandlerRender(j),A.addHandlerClick(function(e){f.search.page=e,R.render(b(e),f.recipe.id),A.render(f.search)}),q.addHandlerServings(function(e){w(e),q.update(f.recipe)}),q.addHandlerBookmark(function(){f.recipe.bookmarked?E(f.recipe.id):$(f.recipe),q.update(f.recipe),P.render(f.bookmarks)}),P.addHandlerRender(function(){P.render(f.bookmarks)}),_.addHandlerUpload(N);
//# sourceMappingURL=index.05d4e93e.js.map
