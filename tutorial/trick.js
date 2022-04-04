<script>
    element = document.getElementsByTagName("li")
    const ulElement = document.querySelector('#list_name')
    for (let index = 0; index < element.length; index++) {
      const element_a = element[index].getElementsByTagName("a")[0]
      const element_b = element[index].getElementsByTagName("a")[1]
      const liElement = document.createElement('tr');
      var name = element_a.textContent.replace(/\n/g, '');
      var lat = element_b.href.split("query=")[1].split(",")[0]
      var long = element_b.href.split("query=")[1].split(",")[1]
      liElement.innerHTML = "<td>" + name + "</td><td>" + lat + "</td><td>" + long + "</tb>"
      ulElement.appendChild(liElement);
    }
  </script>