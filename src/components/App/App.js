import Card from '../Card';
import Header from '../Header';
import './App.css';
import data from '../../data.js'

function App() {
  /*
  id: 2,
      title: "Sydney Opera House",
      location: "Australia",
      googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
      startDate: "27 May, 2021",
      endDate: "08 June, 2021",
      description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
      imageUrl: "https://unsplash.com/photos/JmuyB_LibRo"
  */
  return (
    <div className="App">
      <Header />
      {data.map((item) => {
    return (
      <Card 
        key={item.id} 
        title={item.title} 
        location={item.location}
        mapUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />)
  })}
    </div>
  );
}

export default App;
