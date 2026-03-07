arr=[1,2,3];

function synonym_display(id){
const new_arr=id.map(el=>` <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition">
    ${el}
  </span>`);
return (new_arr.join(" "));
}

synonym_display(arr);