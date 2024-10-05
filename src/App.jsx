import React, { useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

const App = () => {


  const data = [
    { image: "https://images.unsplash.com/photo-1530419248307-be80b9468e77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D", name: "Change My Mind", artist: "Harsh", added: false },
    { image: "https://images.unsplash.com/photo-1495434942214-9b525bba74e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29uZ3xlbnwwfHwwfHx8MA%3D%3D", name: "On My Way", artist: "Alan Walker", added: false },
    { image: "https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmd8ZW58MHx8MHx8fDA%3D", name: "Ocean", artist: "Sharma Ji", added: false },
    { image: "https://images.unsplash.com/photo-1518887572120-cae9ec0daab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvbmd8ZW58MHx8MHx8fDA%3D", name: "mixit in", artist: "Jasprit Bumrah", added: false },
    { image: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbmd8ZW58MHx8MHx8fDA%3D", name: "Dj Disco", artist: "Virat Kohli", added: false },

  ];


  const [songData, setSongData] = useState(data);

  const handleAdd = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    })
  };



  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={songData} />
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((obj, index) => {
            return <Card data={obj} key={index} index={index} handleAdd={handleAdd} />
          })}
        </div>
      </div>
    </>
  );
};

export default App;
