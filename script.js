

    // fecthing all data api
    const all_data=()=>{
        const url=fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res)=>res.json())
        .then((all_isses)=>load_data(all_isses.data));
        
    }

 
// load fetching data(all)
const load_data=(data)=>{
const mother=document.getElementById("card_sec")
mother.innerHTML=""

data.forEach(element => {
    console.log(element.id)
    const child_card_sec=document.createElement("div");
    child_card_sec.className="bg-white rounded-lg shadow p-5 flex flex-col justify-between border-t-4 border-green-500"
    child_card_sec.innerHTML=`
        <div class="flex justify-between items-start">
        <img src="./assets/Open-Status.png" alt="">
    <span class="text-sm md:text-base font-semibold text-green-700 bg-green-100 px-3 py-1.5 rounded-2xl shadow-sm hover:bg-green-200 transition-all duration-300">
  HIGH
</span>
    </div>
    <h2 class="text-md font-semibold mt-2">Fix Navigation Menu On Mobile Devices</h2>
    <p class="text-gray-500 text-sm mt-1">The navigation menu doesn't collapse properly on mobile devices...</p>
    <div class="flex flex-wrap gap-2 my-3">
      <span class="badge badge-outline badge-error bg-red-100">BUG</span>
      <span class="badge badge-outline badge-warning bg-yellow-100">HELP WANTED</span>
    </div>
    <hr class=" opacity-20">
    <div class=" text-gray-400 text-xs mt-3 space-y-3">
      <p>by john_doe</p>
      <p>1/15/2024</p>
    </div>
    
    `
    mother.appendChild(child_card_sec);
});
}

window.addEventListener("DOMContentLoaded", all_data);

document.getElementById("all_btn").addEventListener("click",()=>{
all_data(); 

})

// all_sec done
