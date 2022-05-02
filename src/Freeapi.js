import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Freeapi extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={"AIzaSyD9d5mLmQEw1G9GaPfEYR0YS33zrTiC1Hc"}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Freeapi;

// import React, { useEffect, useState } from "react";

// function Freeapi() {
//   const [dataf, sdataf] = useState([]);

//   useEffect(() => {
//     Freeapi;
//   });

//   const Freeapi = async () => {
//     await fetch("https://jsonplaceholder.typicode.com/users")
//       .then((Response) => Response.jason())
//       .then((recievedata) => sdataf(recievedata));
//   };
//   console.log(dataf);
//   return (
//     <>
//       {dataf.map((user) => (
//         <div key={user.id}>
//           {user.name},{user.username}
//         </div>
//       ))}
//     </>
//   );
// }

// export default Freeapi;
