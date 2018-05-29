function initMap () {
  // 第一个参数为地图容器的元素id
  let map = new AMap.Map('map-container', {
    resizeEnable: true,
    zoom: 17,
    center: [120.12478, 30.277046]
  });
  let icon = new AMap.Icon({
    image: require('images/pin.png'),
    //icon可缺省，缺省时为默认的蓝色水滴图标，
    size: new AMap.Size(32, 38),
    imageSize: new AMap.Size(32, 38)
  });
  let marker = new AMap.Marker({
    icon: icon,
    position: [120.12478, 30.277046],//marker所在的位置
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
