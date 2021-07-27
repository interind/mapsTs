interface Location {
  name?: string;
  companyName?: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(el: Element) {
    this.googleMap = new google.maps.Map(el, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(el: Location ): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: el.location,
      title: el.name || el.companyName,
    });
  }
}