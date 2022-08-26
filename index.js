const nameAvatar = document.querySelector('.nameAvatar');
const imgAvatar = document.querySelector('.imageAvatar')
const inputAvatar = document.querySelector('.inputAvatar');
const buttonAvatar = document.querySelector ('.buttonAvatar');


const fetchApi = async (id) => {
    const APIResponse = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
    const data = await APIResponse.json();
    return data;
}

const renderApi = async (id) => {
    const data = await fetchApi(id);
    imgAvatar.src = data.image;
    nameAvatar.innerHTML = data.name;  
}

renderApi(1);

buttonAvatar.addEventListener('click', () => {
    if (inputAvatar.value){
        renderApi(inputAvatar.value);
        inputAvatar.value = "";
    } else {
        const random = Math.floor(Math.random() * 826)
        renderApi(random);
        
    }
});

