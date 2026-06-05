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
  { name: 'Napa', lat: 38.2975, lng: -122.2869 },
  { name: 'Fairfield', lat: 38.2494, lng: -122.0400 },
  { name: 'Benicia', lat: 38.0491, lng: -122.1597 },
  { name: 'Vallejo', lat: 38.1041, lng: -122.2566 },
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