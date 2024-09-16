
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


const listButtonChangeStatus = document.querySelectorAll("[button-change-status]")
if(listButtonChangeStatus.length > 0){
  listButtonChangeStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.getAttribute("item-id");
      const statusChange = button.getAttribute("button-change-status")=="active"?"inactive":"active";
      const data = {
        id: itemId,
        status: statusChange
      }
      console.log(data)
      const dataPath = button.getAttribute("data-path")
      fetch(dataPath, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify(data)
      }).then(res => res.json()).then(data => {
        console.log(data)
        if(data.code == "Success"){
          location.reload();
        }
      })
    })
  })
}



const formChangeMulti = document.querySelector("[form-change-multi]")
if(formChangeMulti){
  formChangeMulti.addEventListener("submit", (event) => {
    event.preventDefault()
    const status = event.target.status.value 
    if(status == "delete"){
      const isComfirm = confirm("ban co chac muon xoa nhung ban ghi nay hay khong")
      if(!isComfirm) return;
    }
    const listInputChange = document.querySelectorAll("[input-change]:checked")
    const lst = []
    if(listInputChange.length > 0){
      listInputChange.forEach((item) => {
        const id = item.getAttribute("input-change")
        lst.push(id)
      })
    }
    const dataPath = formChangeMulti.getAttribute("data-path")
    data = {
      id: lst,
      status: status
    }
    console.log(status)
    fetch(dataPath, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
      console.log(data)
      if(data.code == "Success"){
        location.reload();
      }
    })
  })
}


const buttonDelete = document.querySelectorAll("[button-delete]")
if(buttonDelete.length > 0){
  buttonDelete.forEach(item => {
    item.addEventListener("click", () => {
      const isComfirm = confirm("Ban co chac muon xoa ban ghi nay ?")
      if(isComfirm){
        const id = item.getAttribute("item-id")
        const path = item.getAttribute("data-path")
        fetch(path, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "PATCH",
          body: JSON.stringify({
            id: id
          })
        }).then(res => res.json()).then(res => {
          console.log(res)
          if(res.code = "Success"){
            location.reload()
          }
        })
      }
    })
  })
}