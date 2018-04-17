function initMap () {
  // 第一个参数为地图容器的元素id
  let map = new AMap.Map('map-container', {
    resizeEnable: true,
    zoom: 11,
    center: [116.397428, 39.90923]
  });
  let marker = new AMap.Marker({
    position: [116.480983, 39.989628],//marker所在的位置
    map: map
  });
  marker.setMap(map);
}

function addMapScript () {
  let mapScript = document.createElement('script');
  let mapKey = '01027aec29efd3b7d9740c3b4cbceeb0'
  mapScript.setAttribute('src', `http://webapi.amap.com/maps?v=1.4.5&key=${mapKey}&callback=initMap`);
  document.body.appendChild(mapScript);
}

export {
  addMapScript,
  initMap
}
