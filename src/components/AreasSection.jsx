import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon for leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const areaLocations = [
  { name: 'Benicia', lat: 38.0491, lng: -122.1597 },
  { name: 'Vallejo', lat: 38.1041, lng: -122.2566 },
  { name: 'Fairfield', lat: 38.2494, lng: -122.0400 },
  { name: 'Suisun City', lat: 38.2382, lng: -122.0185 },
  { name: 'Vacaville', lat: 38.3566, lng: -121.9877 },
  { name: 'Rio Vista', lat: 38.1574, lng: -121.6902 },
  { name: 'Martinez', lat: 37.9954, lng: -122.1341 },
  { name: 'Concord', lat: 37.9780, lng: -122.0311 },
  { name: 'Pleasant Hill', lat: 37.9477, lng: -122.0608 },
  { name: 'Walnut Creek', lat: 37.9101, lng: -122.0652 },
  { name: 'Lafayette', lat: 37.8858, lng: -122.1180 },
  { name: 'Orinda', lat: 37.8771, lng: -122.1802 },
  { name: 'Moraga', lat: 37.8349, lng: -122.1302 },
  { name: 'Clayton', lat: 37.9410, lng: -121.9358 },
  { name: 'Pittsburg', lat: 38.0280, lng: -121.8847 },
  { name: 'Antioch', lat: 38.0049, lng: -121.8058 },
  { name: 'Berkeley', lat: 37.8716, lng: -122.2727 },
  { name: 'Albany', lat: 37.8871, lng: -122.2977 },
  { name: 'El Cerrito', lat: 37.9238, lng: -122.3177 },
  { name: 'Richmond', lat: 37.9358, lng: -122.3477 },
  { name: 'Oakland', lat: 37.8044, lng: -122.2712 },
  { name: 'Alameda', lat: 37.7652, lng: -122.2416 },
  { name: 'Napa', lat: 38.2975, lng: -122.2869 },
  { name: 'American Canyon', lat: 38.1749, lng: -122.2558 },
];

const areas = areaLocations.map(a => a.name);

export default function AreasSection() {
  return (
    <section id="areas" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Coverage</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Areas We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide fast, reliable locksmith services across the metropolitan area and surrounding communities.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl mb-12 h-96 border border-border/50"
        >
          <MapContainer
            center={[38.0491, -122.1597]}
            zoom={9}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {areaLocations.map(area => (
              <Marker key={area.name} position={[area.lat, area.lng]}>
                <Popup>
                  <strong>{area.name}</strong><br />
                  Securikey Locksmith serves this area
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Area chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="bg-card border border-border/50 rounded-xl p-4 text-center hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
            >
              <MapPin className="h-4 w-4 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground/80">{area}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}