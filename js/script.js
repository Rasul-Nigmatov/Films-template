//har bir elementlarni document dan olib kelish

const elWrapper = document.querySelector(".wrapper")
const elForm = document.querySelector(".form")
const elSearchInput = document.querySelector(".form-input")
const elSearchBtn = document.querySelector(".search-btn")
const elTemplate = document.querySelector("#template").content;
const newMovies = kinolar.splice(0, 100);

//map chaqirib ishlash reflesh qilish
const normalizeMovies = newMovies.map(function (item) {
    return{
        Title: item.title,
        Year: item.year,
        Cast: item.cast.join(", "),
        Genres: item.genres.join(", ")
    }
});
//template document dan olib kelib uni ichida qiymatini olish js orqali
const elFragment = document.createDocumentFragment()

function renderMovies(item, wrapper) { 
    item.forEach((array) => {
        const newTemplate = elTemplate.cloneNode(true)
        newTemplate.querySelector(".wrapper-title").textContent = array.Title
        newTemplate.querySelector(".wrapper-year").textContent = array.Year
        newTemplate.querySelector(".wrapper-cast").textContent = array.Cast
        newTemplate.querySelector(".wrapper-genres").textContent = array.Genres
        elFragment.appendChild(newTemplate)
    })
    wrapper.appendChild(elFragment)
}

//render otgan dan keuyin oziga charirib qoyish
renderMovies(normalizeMovies, elWrapper);

function serachFind(movie_title) {
    return normalizeMovies.filter(function (movie) {
        return movie.Title.match(movie_title)
        
    })
}
//input boganda form oziga quloq tashab qoyib ichidagi input dagi value olib uni kinolar di title tenglashtirib qoyish
//va js dagi ozini Reg Exp code da foydalanish
elForm.addEventListener("input", (evt) => {
    evt.preventDefault()
    const searchInput = elSearchInput.value;

    const pattern = new RegExp(searchInput, "gi")
    const result = serachFind(pattern)
    

    elWrapper.innerHTML = null
    renderMovies(result, elWrapper);
    console.log(searchValue);
})

