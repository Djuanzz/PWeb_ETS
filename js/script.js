console.log("Adnan Abdullah Juan 5025221155 UTS PWEB");

async function getBio() {
  try {
    const res = await fetch("http://159.223.51.203/api/bio");
    const data = await res.json();
    console.log(data);

    const wadah = document.querySelectorAll(".wadah");
    wadah.forEach((item, index) => {
      //   console.log(item.children[1]);
      item.children[0].innerHTML = data[index].name.toUpperCase();
      item.children[1].innerHTML = data[index].id;
    });
  } catch (err) {
    console.log(err);
  }
}

getBio();
