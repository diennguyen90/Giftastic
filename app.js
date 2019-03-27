// // array of topics
let topics = ['football','basketball','hockey','baseball','boxing']

//Create a function to call and loop through array for buttons
function getGif(){
    for(let i = 0; i <topics.length;i++){
        let gifBtn = document.createElement('button')

            gifBtn.innerHTML = topics[i]
            gifBtn.setAttribute('value', topics[i])
            gifBtn.setAttribute('data-topic', topics[i])

            gifBtn.setAttribute('class', 'topicBtn btn waves-light')
            document.getElementById('topics').append(gifBtn)
    }
    let toggle = false
//Create a click listener to fetch through giphy api
document.addEventListener('click', e =>{
    if(e.target.className === 'topicBtn btn waves-light'){
        let sports = e.target.value
        console.log(sports)
        fetch('http://api.giphy.com/v1/gifs/search?q=' + sports + '&api_key=dc6zaTOxFJmzC&limit=10')
            .then(r => r.json())
            .then( r=>{
                    console.log(r)
                    document.getElementById('gifDiv').innerHTML = ''
                    // loop and create img divs for each giphy                  
                        r.data.forEach(r =>{
                            let gifElem = document.createElement('span')

                            gifElem.innerHTML = `
                                <h5> Rating: ${r.rating}</h5>
                                <img src="${r.images.fixed_height_still.url}" data-state="still" class="test"alt="${sports}" data-still="${r.images.fixed_height_still.url}"data-animate="${r.images.fixed_height.url}">
                            `
                            gifElem.setAttribute('class', 'gif')
                            document.getElementById('gifDiv').append(gifElem)
                        })
    }).catch(e => console.log(e))
    // pause and play GIF
    }else if(e.target.className === 'test'){
        switch (e.target.dataset.state) {
            case 'still':
              e.target.src = e.target.dataset.animate
              e.target.setAttribute('data-state', 'animate')
              break
            case 'animate':
              e.target.src = e.target.dataset.still
              e.target.setAttribute('data-state', 'still')
              break
          }
    }
})
}
getGif()

// First Attempt
// document.querySelector('#addSport').addEventListener('click', e =>{
//     e.preventDefault()
//     let topics = document.getElementById('sportVal').value
//     fetch('http://api.giphy.com/v1/gifs/search?q=' + topics + '&api_key=dc6zaTOxFJmzC&limit=10')
//         .then( r => r.json())
//         .then( r => {
//             // let url = r.data.images.fixed_height_still.url
//             // let animated = r.data.images.fixed_height.url
//             console.log(r.data)
//             let gifBtn = document.createElement('button')

//             gifBtn.textContent = `${topics}`
//             gifBtn.setAttribute('data-topic', topics)
//             gifBtn.setAttribute('class', 'topicBtn')
//             document.getElementById('gifDiv').innerHTML = ''
//             document.getElementById('topics').append(gifBtn)
//             // loop to populate gif on the html
//             const getGif = () =>{
//             r.data.forEach(r =>{
//                 let gifElem = document.createElement('span')
                
//                 gifElem.innerHTML = `<h5>Rating: ${r.rating}</h5>
//                     <img src="${r.images.fixed_height.url}" alt="gif">
//                 `
//                 gifElem.setAttribute('class', 'inline')
//                 document.getElementById('gifDiv').append(gifElem)
//             })
            
//         }
//         getGif()
//             document.addEventListener('click', e =>{
//                 if(e.target.className=== 'topicBtn'){
//                     getGif()
//                 }
//             })
//         }).catch(e =>{
//             console.log(e)
//         })
// })

