// export const browse = (store) =>{
//     const x = document.getElementById('search')
//     x.addEventListener('keydown',function(event){
//         if(event.key === 'Enter'){
//             store(event.target.value)
//         }
//     })
// }

export const browse = (store) =>{
    const x = document.getElementById('search')
    const a = x.value
    store(a)
}
