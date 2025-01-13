<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Google Map - Wonosobo</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=init" async defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="map" style="width: 100%; height: 500px;"></div>

    <script>
        var google;

        function init() {
            var myLatlng = new google.maps.LatLng(-7.360167, 109.938635); // Koordinat Wonosobo
            
            var mapOptions = {
                zoom: 14,  // Zoom lebih tinggi untuk area Wonosobo
                center: myLatlng,
                scrollwheel: false,
                styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
            };

            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            
            var addresses = ['Wonosobo, Indonesia'];  // Ganti dengan alamat Wonosobo

            for (var x = 0; x < addresses.length; x++) {
                var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addresses[x])}&sensor=false&key=YOUR_GOOGLE_MAPS_API_KEY`;

                $.getJSON(url, function (data) {
                    var p = data.results[0].geometry.location;
                    var latlng = new google.maps.LatLng(p.lat, p.lng);
                    new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: 'images/loc.png'  // Pastikan gambar loc.png ada di folder yang benar
                    });
                });
            }
        }
        
        google.maps.event.addDomListener(window, 'load', init);
    </script>
</body>
</html>
