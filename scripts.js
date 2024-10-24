// 選取 menu 和 menu-switch
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const menuSwitch = document.querySelector('.menu-switch');
const switchIcon = menuSwitch.querySelector('span');

// 為 menu-switch 設定點擊事件
menuSwitch.addEventListener('click', () => {
  // 切換 menu 的折疊樣式
  menu.classList.toggle('collapsed');
  
  // 切換 menu-list 的顯示/隱藏狀態
  menuList.classList.toggle('hidden');
  
  // 切換圖示
  if (menu.classList.contains('collapsed')) {
    switchIcon.textContent = 'menu'; // 折疊狀態顯示 menu 圖示
  } else {
    switchIcon.textContent = 'close'; // 展開狀態顯示 close 圖示
  }
});




// 現有的圖片切換邏輯
let currentGroup = 0;
const imageGroups = document.querySelectorAll('.image-group');
const switchButtons = document.querySelectorAll('.buttons button');
const totalGroups = imageGroups.length;

function showGroup(index) {
  if (index < 0 || index >= totalGroups) return; // 忽略無效的索引

  // 移除當前活動組的 active 類
  imageGroups[currentGroup].classList.remove('active');
  
  // 更新當前組
  currentGroup = index;
  
  // 添加新活動組的 active 類
  imageGroups[currentGroup].classList.add('active');
}

// 初始化時顯示第一組圖片
imageGroups[0].classList.add('active');

// 設定按鈕點擊事件
switchButtons.forEach((button, index) => {
  button.addEventListener('click', () => showGroup(index));
});

// 自動切換功能
function startAutoSwitch() {
  setInterval(() => {
    const nextGroup = (currentGroup + 1) % totalGroups;
    showGroup(nextGroup);
  }, 10000); // 每10秒切換
}

startAutoSwitch();







document.querySelectorAll('.menu-item a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default link action

    // Get the href of the clicked link
    const url = this.getAttribute('href');

    // Select the .picture div
    const pictureDiv = document.querySelector('.picture');

    // Clear existing content inside .picture
    pictureDiv.innerHTML = '';

    // Change the padding to 0px when a new link is clicked
    pictureDiv.style.padding = '0px';

    // Option 1: Load the content in an iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = '100%';
    iframe.height = '100%';
    pictureDiv.appendChild(iframe);

    // Option 2: If embedding iframe is not ideal, fetch and display the content via AJAX
    // fetch(url)
    //   .then(response => response.text())
    //   .then(data => {
    //     pictureDiv.innerHTML = data;
    //   })
    //   .catch(error => console.error('Error loading the content:', error));
  });
});






//-----

    // 監聽所有的 a 元素的點擊事件
    document.querySelectorAll('.submenu a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();  // 防止頁面跳轉

        // 取得點擊的 a 標籤的文字
        const clickedText = this.textContent;

        // 將該文字顯示在 header 的指定區域
        document.getElementById('selected-title').textContent = clickedText;
      });
    });



    //-----
    document.querySelector('.ai').addEventListener('click', function (event) {
      event.preventDefault(); // 阻止默認的連結跳轉行為
      loadAIChat(); // 調用函數加載內容到 picture
    });
    
    function loadAIChat() {
      const pictureDiv = document.querySelector('.picture');
    
      // 動態載入新內容
      pictureDiv.innerHTML = `
        <div>

          <iframe src="./ai_chat.html" style="width: 100%; height: 840px; border: none;
     
          "></iframe>
        </div>
      `;

      pictureDiv.style.padding = '0px';
    }







    