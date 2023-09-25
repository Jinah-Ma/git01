const large = document.querySelector("#large");
const small = document.querySelectorAll(".small");

/* function displaySrc(){
    alert("이미지 주소" + large.getAttribute("src"));
} */


small.forEach((el)=>{
    el.addEventListener('click', function(){
        let change = this.src;
        large.setAttribute('src', change);
    })
});

const detail = ('#detail');


document.querySelector('#view').addEventListener('click', function(){
    document.querySelector('#detail').style.display = 'block';
})