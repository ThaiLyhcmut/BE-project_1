const boxFilter = document.querySelector("[box-filter]")

if(boxFilter) {
  let url = new URL(location.href); // nhan ban url
  boxFilter.addEventListener("change", (event) => {
    const status = event.target.value
    if(status){
      url.searchParams.set("status", status)
    }
    else{
      url.searchParams.delete("status")
    }
    location.href = url.href
      
  })
  const statusCurrent = url.searchParams.get("status");
  if(statusCurrent){
    boxFilter.value = statusCurrent
  }
}


const formSearch = document.querySelector("[form-search")
if(formSearch) {
  let url = new URL(location.href);
  formSearch.addEventListener("submit", (event) => {
    event.preventDefault()
    const content = event.target.keyword.value
    if(content){
      url.searchParams.set("keyword", content)
    }
    else{
      url.searchParams.delete("keyword")
    }
    location.href = url.href
  })
  const contentCurrent = url.searchParams.get("keyword");
  if(contentCurrent){
    formSearch.keyword.value = contentCurrent
  }
}

const listButtonPagination = document.querySelectorAll("[button-pagination]")
if(listButtonPagination.length > 0){
  let url = new URL(location.href);
  listButtonPagination.forEach((button) => {
    button.addEventListener("click", (event) => {
      const page = button.getAttribute("button-pagination")
      if(page){
        url.searchParams.set("page", page)
      }else{
        url.searchParams.delete("page")
      }
      location.href = url.href
    })
  })
}