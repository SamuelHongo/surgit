// Cargar la biblioteca de Google Maps y configurarla
(async (g => {
    const p = "The Google Maps JavaScript API";
    const c = "google";
    const q = "__ib__";
    const m = document;
    const b = window;
    b[c] = b[c] || {};
    const d = b.maps || (b.maps = {});
    const r = new Set();
    const e = new URLSearchParams();
    let h, a;
  
    const u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        a = m.createElement("script");
        e.set("libraries", [...r] + "");
        for (const k in g) {
          e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
        }
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + " could not load.")));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
  
    d.importLibrary
      ? console.warn(p + " only loads once. Ignoring:", g)
      : (d.importLibrary = (f, ...n) => r.add(f) && u().then(() => d.importLibrary(f, ...n)));
  })({
    key: "AIzaSyA3-aHb7s-d1KQ_ZmsswLYfOb3zwn5r1d8",
    v: "weekly",
  }));
  
  // Inicializar el mapa de Google Maps
  let map;
  
  async function initMap() {
    const position = { lat: 6.25184, lng: -75.56359 };
  
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
    map = new Map(document.getElementById("map"), {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
  
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  }
  
  initMap();
  