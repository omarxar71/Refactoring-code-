
function butoonPosition(){
    let scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition)
    if (scrollPosition > '100'){
        document.getElementById('top').classList.replace('d-none' , 'd-block')


    }else if (scrollPosition < '100'){
        document.getElementById('top').classList.replace('d-block' ,'d-none'  )
    }
}
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth',
    })
}