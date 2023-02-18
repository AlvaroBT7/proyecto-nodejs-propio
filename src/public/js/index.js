const formData = new FormData();
const headers = new Headers({
  "Content-Type": "application/json"
})
formData.append("key1", "value1");
formData.append("key2", "value2");
fetch("http://localhost:3000",{
    method: "POST",
    body: formData,
    headers: headers
  }
)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err));