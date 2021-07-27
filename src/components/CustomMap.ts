export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  element: Element;

  constructor(el: Element) {
    this.googleMap = new google.maps.Map(el, {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
    this.element = el;
  }

  addMarker(el: Mappable ): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: el.location,
      title: el.markerContent(),
    });
    this.addListener('click', marker);
  }

  private addInfoWindow(el: any): void {
    const infoWindow = new google.maps.InfoWindow({
      content: el.title,
    });
    this.googleMap.setCenter(el.position);
    this.googleMap.setZoom(5);
    infoWindow.open(this.googleMap, el);
  }

  private addListener(method: string, el: any): void {
    el.addListener(method, () => this.addInfoWindow(el))
  }
}