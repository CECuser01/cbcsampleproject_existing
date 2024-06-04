document.addEventListener('DOMContentLoaded', () => {
  const callApiButton = document.getElementById('callApiButton');
  const displayElement = document.getElementById('display');

  callApiButton.addEventListener('click', () => {
    fetch('https://api.cbcpp-prod.com/gbiz?corporate_number=9021001026338&page=1&limit=1000')
      .then(response => response.json())
      .then(data => {
        // 取得したJSONデータを表示する
        displayElement.innerText = JSON.stringify(data);
      })
      .catch(error => {
        console.error(error);
      });
  });
});
