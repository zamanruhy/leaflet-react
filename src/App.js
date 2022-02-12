import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'
import { useState } from 'react'

const position = [51.505, -0.09]

const circleOptions = {
  fillColor: 'black',
  fillOpacity: 0.1,
  color: 'black',
  dashArray: '2 5',
  lineCap: 'butt',
  weight: 2,
}

// const markers = [
//   {
//     id: 1,
//     name: 'shop',
//     markers: [
//       {
//         id: 1,
//         position: [],
//       },
//     ],
//   },
// ]

const markers = [
  {
    id: 1,
    name: 'pharmacy',
    position: [51.505 + 0.001, -0.09 + 0.001],
  },
  {
    id: 2,
    name: 'shop',
    position: [51.505 + 0.002, -0.09 - 0.003],
  },
  {
    id: 3,
    name: 'school',
    position: [51.505 + 0.001, -0.09 + 0.002],
  },
  {
    id: 4,
    name: 'pharmacy',
    position: [51.505 - 0.002, -0.09 + 0.004],
  },
  {
    id: 5,
    name: 'shop',
    position: [51.505 + 0.004, -0.09 - 0.001],
  },
  {
    id: 6,
    name: 'school',
    position: [51.505 - 0.0035, -0.09 - 0.005],
  },
  {
    id: 7,
    name: 'pharmacy',
    position: [51.505 - 0.003, -0.09 + 0.007],
  },
]

export default function App() {
  const [selected, setSelected] = useState([])

  const types = markers.reduce(
    (acc, cur) => (acc.find((a) => a.name === cur.name) ? acc : [...acc, cur]),
    []
  )

  const filteredMarkers =
    selected.length === 0
      ? markers
      : markers.filter((m) => selected.includes(m.name))

  function onClick(e, t) {
    setSelected((s) => (s.includes(t) ? s.filter((v) => v !== t) : [...s, t]))
  }

  return (
    <>
      {JSON.stringify(selected)}
      <div className='flex h-10 gap-3'>
        <button
          className={selected.length === 0 && 'font-bold'}
          onClick={() => setSelected([])}
        >
          All
        </button>
        {types.map((t) => (
          <button
            key={t.name}
            className={selected.includes(t.name) && 'font-bold'}
            onClick={(e) => onClick(e, t.name)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <MapContainer style={{ height: '100vh' }} center={position} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker
          position={position}
          draggable
          eventHandlers1={{
            dragend() {
              const marker = markerRef.current
              if (marker != null) {
                console.log(marker.getLatLng())
              }
            },
          }}
          icon={
            new L.Icon({
              iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='65' height='66' viewBox='0 0 65 66' fill='none'%3E%3Ccircle cx='32.5' cy='33.0732' r='32.5' fill='%23072A29'/%3E%3Cpath d='M32.5689 23.7111L23.0867 33.1934L32.5689 42.6756L42.0512 33.1934L32.5689 23.7111Z' fill='white'/%3E%3Cpath d='M46.0474 37.3018L36.6149 46.7343H46.0474V37.3018Z' fill='white'/%3E%3Cpath d='M19 37.3018V46.7343H28.4325L19 37.3018Z' fill='white'/%3E%3Cpath d='M19 19.5732V29.0057L28.4325 19.5732H19Z' fill='white'/%3E%3Cpath d='M46.0474 19.5732H36.6149L46.0474 29.0057V19.5732Z' fill='white'/%3E%3C/svg%3E`,
              // iconAnchor: null,
              // popupAnchor: null,
              iconSize: [40, 40],
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker
          position={[position[0], position[1] + 0.002]}
          icon={
            new L.Icon({
              iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='13' viewBox='0 0 44 13' fill='none'%3E%3Cpath d='M4.72 12.176c-.661 0-1.232-.085-1.712-.256-.47-.17-.859-.4-1.168-.688a2.96 2.96 0 01-.704-.976A3.577 3.577 0 01.88 9.12H2.8c.053.384.24.71.56.976.33.256.784.384 1.36.384.65 0 1.157-.192 1.52-.576.373-.384.56-.944.56-1.68 0-.416-.064-.763-.192-1.04a1.82 1.82 0 00-.464-.688 1.629 1.629 0 00-.672-.384 2.274 2.274 0 00-.752-.128c-.459 0-.843.08-1.152.24-.299.16-.539.379-.72.656H1.12V.8h6.96v1.664H3.008v2.608c.245-.235.533-.421.864-.56.33-.15.747-.224 1.248-.224a4.02 4.02 0 011.472.256c.448.17.827.421 1.136.752.32.33.565.741.736 1.232.17.48.256 1.04.256 1.68a4.49 4.49 0 01-.288 1.648c-.192.49-.464.907-.816 1.248a3.76 3.76 0 01-1.264.8 4.678 4.678 0 01-1.632.272zm9.681-8.656h1.984l2.704 4.96 2.704-4.96h1.888V12h-1.76V6.16l-2.24 4.08h-1.28l-2.24-4.08V12h-1.76V3.52zm11.516 0h1.76v6l4.08-6h1.68V12h-1.76V6l-4.08 6h-1.68V3.52zm9.765 0h1.76v3.408h4V3.52h1.76V12h-1.76V8.432h-4V12h-1.76V3.52z' fill='%231A1A1A'/%3E%3C/svg%3E`,
              // iconAnchor: null,
              iconSize: [43, 14],
            })
          }
        />
        <Marker
          position={[position[0], position[1] + 0.0045]}
          icon={
            new L.Icon({
              iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='13' viewBox='0 0 52 13' fill='none'%3E%3Cpath d='M.8 10.336h2.64V2.832L.8 4.704V2.72L3.504.8H5.36v9.536h2.16V12H.8v-1.664zm11.842 1.84c-.662 0-1.232-.085-1.712-.256-.47-.17-.859-.4-1.168-.688a2.959 2.959 0 01-.704-.976 3.576 3.576 0 01-.256-1.136h1.92c.053.384.24.71.56.976.33.256.784.384 1.36.384.65 0 1.157-.192 1.52-.576.373-.384.56-.944.56-1.68 0-.416-.064-.763-.192-1.04a1.82 1.82 0 00-.464-.688 1.629 1.629 0 00-.672-.384 2.274 2.274 0 00-.752-.128c-.459 0-.843.08-1.152.24-.299.16-.539.379-.72.656H9.042V.8h6.96v1.664H10.93v2.608c.245-.235.533-.421.864-.56.33-.15.746-.224 1.248-.224.544 0 1.034.085 1.472.256.448.17.827.421 1.136.752.32.33.565.741.736 1.232.17.48.256 1.04.256 1.68a4.49 4.49 0 01-.288 1.648c-.192.49-.464.907-.816 1.248a3.76 3.76 0 01-1.264.8 4.678 4.678 0 01-1.632.272zm9.681-8.656h1.984l2.704 4.96 2.704-4.96h1.888V12h-1.76V6.16l-2.24 4.08h-1.28l-2.24-4.08V12h-1.76V3.52zm11.516 0h1.76v6l4.08-6h1.68V12h-1.76V6l-4.08 6h-1.68V3.52zm9.765 0h1.76v3.408h4V3.52h1.76V12h-1.76V8.432h-4V12h-1.76V3.52z' fill='%231A1A1A'/%3E%3C/svg%3E`,
              // iconAnchor: [49, 7],
              iconSize: [49, 14],
            })
          }
        />
        <Marker
          position={[position[0], position[1] + 0.0075]}
          icon={
            new L.Icon({
              iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='13' viewBox='0 0 54 13' fill='none'%3E%3Cpath d='M4.64 12.176c-.65 0-1.227-.08-1.728-.24a3.732 3.732 0 01-1.248-.704 3.132 3.132 0 01-.768-1.056A3.592 3.592 0 01.64 8.8h1.92c0 .533.165.95.496 1.248.341.288.87.432 1.584.432.693 0 1.21-.144 1.552-.432.352-.299.528-.715.528-1.248 0-.544-.16-.97-.48-1.28-.32-.32-.853-.48-1.6-.48H3.52v-1.6h1.12c.64 0 1.12-.133 1.44-.4.32-.277.48-.672.48-1.184 0-.512-.155-.896-.464-1.152-.299-.256-.784-.384-1.456-.384-.661 0-1.152.133-1.472.4-.31.267-.464.64-.464 1.12H.784c0-.97.325-1.75.976-2.336.661-.587 1.621-.88 2.88-.88.63 0 1.184.08 1.664.24.48.16.88.379 1.2.656.32.267.56.581.72.944.17.363.256.752.256 1.168 0 .64-.17 1.179-.512 1.616-.341.427-.81.73-1.408.912.65.192 1.157.517 1.52.976.373.448.56 1.056.56 1.824 0 .448-.085.87-.256 1.264a2.76 2.76 0 01-.768 1.024c-.33.288-.747.517-1.248.688-.501.16-1.077.24-1.728.24zm9.916 0c-.587 0-1.136-.09-1.648-.272a3.095 3.095 0 01-1.312-.928c-.374-.448-.667-1.04-.88-1.776-.214-.747-.32-1.68-.32-2.8v-.32c0-1.035.106-1.899.32-2.592.213-.704.506-1.264.88-1.68.373-.427.81-.73 1.312-.912a4.901 4.901 0 011.648-.272c.586 0 1.13.09 1.632.272.512.181.954.485 1.328.912.373.416.666.976.88 1.68.213.693.32 1.557.32 2.592v.32c0 1.12-.107 2.053-.32 2.8-.214.736-.507 1.328-.88 1.776a3.078 3.078 0 01-1.328.928 4.764 4.764 0 01-1.632.272zm0-1.664c.298 0 .581-.059.848-.176.266-.117.501-.325.704-.624.213-.31.378-.73.496-1.264.128-.533.192-1.216.192-2.048v-.32c0-.747-.064-1.365-.192-1.856-.118-.49-.283-.88-.496-1.168-.203-.288-.438-.485-.704-.592a2.082 2.082 0 00-.848-.176c-.299 0-.582.059-.848.176-.267.107-.507.304-.72.592-.203.288-.368.677-.496 1.168-.118.49-.176 1.11-.176 1.856v.32c0 .832.058 1.515.176 2.048.128.533.293.955.496 1.264.213.299.453.507.72.624.266.117.549.176.848.176zM24.558 3.52h1.983l2.704 4.96 2.704-4.96h1.888V12h-1.76V6.16l-2.24 4.08h-1.28l-2.24-4.08V12h-1.76V3.52zm11.515 0h1.76v6l4.08-6h1.68V12h-1.76V6l-4.08 6h-1.68V3.52zm9.766 0h1.76v3.408h4V3.52h1.76V12h-1.76V8.432h-4V12h-1.76V3.52z' fill='%231A1A1A'/%3E%3C/svg%3E`,
              // iconAnchor: [63, 7],
              iconSize: [63, 14],
            })
          }
        />

        {filteredMarkers.map((m) => (
          <Marker
            position={m.position}
            icon={
              new L.Icon({
                iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='65' height='66' viewBox='0 0 65 66' fill='none'%3E%3Ccircle cx='32.5' cy='33.0732' r='32.5' fill='%23072A29'/%3E%3Cpath d='M32.5689 23.7111L23.0867 33.1934L32.5689 42.6756L42.0512 33.1934L32.5689 23.7111Z' fill='white'/%3E%3Cpath d='M46.0474 37.3018L36.6149 46.7343H46.0474V37.3018Z' fill='white'/%3E%3Cpath d='M19 37.3018V46.7343H28.4325L19 37.3018Z' fill='white'/%3E%3Cpath d='M19 19.5732V29.0057L28.4325 19.5732H19Z' fill='white'/%3E%3Cpath d='M46.0474 19.5732H36.6149L46.0474 29.0057V19.5732Z' fill='white'/%3E%3C/svg%3E`,
                // iconAnchor: null,
                // popupAnchor: null,
                iconSize: [40, 40],
              })
            }
          >
            <Popup>{m.name}</Popup>
          </Marker>
        ))}

        <Circle
          center={position}
          pathOptions={circleOptions}
          stroke='green'
          radius={200}
        />
        <Circle center={position} pathOptions={circleOptions} radius={360} />
        <Circle center={position} pathOptions={circleOptions} radius={600} />
      </MapContainer>
    </>
  )
}
