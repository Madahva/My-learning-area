L.mapquest.key = 'wjMiPyhvTrhd9FwdRVYsGrWbyWVMsO4d';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [51.095529, 10.378682],
  // 1. change 'map' to 'hybrid', try other type of map
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

// 2. Add control
map.addControl(L.mapquest.control());

// 3. Add icon
L.marker([51.095529, 10.378682], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#ffce00',
    secondaryColor: '#dd0000',
    shadow: true,
    size: 'md',
    symbol: 'D'
  })
})
.bindPopup('Hier ist deutschland!')
.addTo(map);