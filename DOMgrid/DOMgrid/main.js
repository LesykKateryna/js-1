function createDoc() {
  const rootEl = document.querySelector('.playground');
  const headerCourse = document.createElement('header');
  const asideCourse = document.createElement('aside');
  const mainCourse = document.createElement('main');
  const footerCourse = document.createElement('footer');
  const headerUl=document.createElement('ul')

  rootEl.append(headerCourse);
  rootEl.append(asideCourse);
  rootEl.append(mainCourse);
  rootEl.append(footerCourse);
  headerCourse.appendChild(headerUl);

  headerCourse.setAttribute('id', 'header-course');
  asideCourse.setAttribute('id', 'aside-course');
  mainCourse.setAttribute('id', 'main-course');
  footerCourse.setAttribute('id', 'footer-course');
  footerCourse.textContent = 'JS Course Beetroot';
  headerUl.setAttribute('id','root-list');

  const placeHolder = document.createElement('h2');
  placeHolder.append('Welcome dear strange!!!');
  placeHolder.className = 'place-course';
  placeHolder.addEventListener('click', handlerPlaceHolder);

  mainCourse.append(placeHolder);
  mainCourse.append(authUser());
  
  let jsItem=["Цикли","Об'єкти","Функції","Масиви","Класи"];

  for (let i = 0; i <= 4; i++)
  {
      let li = document.createElement("li");  
      li.className = "file";
  
      var a = document.createElement("a");
      a.innerHTML = jsItem[i];
  
      li.appendChild(a);
      headerUl.appendChild(li);
  }
}
// a.setAttribute('href','#');
function handlerPlaceHolder() {
  console.log('Evgeniy');
}

createDoc();
