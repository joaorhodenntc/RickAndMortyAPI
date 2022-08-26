const nameAvatar = document.querySelector('.nameAvatar');
const imgAvatar = document.querySelector('.imageAvatar')
const inputAvatar = document.querySelector('.inputAvatar');
const buttonNext = document.querySelector('.buttonNext');
const formAvatar = document.querySelector('.formAvatar');



const fetchApi = async (id) => {
    const APIResponse = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
    const data = await APIResponse.json();
    return data;
}
let idAvatar = 1;

const renderApi = async (id) => {
    const data = await fetchApi(id);

    if(data){
        imgAvatar.src = data.image;
        nameAvatar.innerHTML = data.name; 
        inputAvatar.value = '';
        idAvatar = data.id;
    }
    
}

renderApi(idAvatar);

formAvatar.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(inputAvatar.value && inputAvatar.value <= 826 && inputAvatar.value >= 1){
        renderApi(inputAvatar.value);
        inputAvatar.placeholder = "ID";
    } else {
        inputAvatar.value = "";
        inputAvatar.placeholder = "ID Inválido!";
    }
})

buttonNext.addEventListener('click',()=>{
    idAvatar += 1;
    renderApi(idAvatar);
})