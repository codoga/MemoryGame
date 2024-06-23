const generateShuffledCards = () => {
    const imageUrls = [
      '/images/Ekran görüntüsü 2024-06-23 153406.png', '/images/Ekran görüntüsü 2024-06-23 153503.png', '/images/Ekran görüntüsü 2024-06-23 153535.png', '/images/Ekran görüntüsü 2024-06-23 153615.png', '/images/Ekran görüntüsü 2024-06-23 165008.png',
      '/images/melihsakarya-175x175.jpg', '/images/Fırat.jpg', '/images/Ekran görüntüsü 2024-06-23 160343.png', '/images/Ekran görüntüsü 2024-06-23 160429.png', '/images/Ekran görüntüsü 2024-06-23 161022.png',
    ];
  
    const cards = [...imageUrls, ...imageUrls]; 
  

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  
    return cards;
  };
  
  export default generateShuffledCards;
  