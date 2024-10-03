// Fetch, load and show categories on html

const loadData =  () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayData(data.categories))
    .catch((error) => console.log(error)
    )

}


// category
// : 
// "Music"
// category_id
// : 
// "1001"


const displayData = (categories) =>{
  const categoriContainer = document.getElementById('categories')

  categories.forEach((item) => {
    console.log(item);
    
    // create button
    const button = document.createElement('button');
    button.classList = 'btn';
    button.innerText = item.category;

    categoriContainer.append(button)
  })
   
};
loadData()


// load video
const loadVideo =  () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos))
    .catch((error) => console.log(error)
    )

}


const displayVideo = (videos) =>{
  const videoContainer = document.getElementById('videosFile')
  

  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement('div');
    card.classList = "card card-compact"
    card.innerHTML =`
     <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `
    videoContainer.append(card)
  })
   
};
loadVideo()

