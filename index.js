const express = require('express');
const Sentiment = require('sentiment');
const app = express();
const sentiment = new Sentiment();

app.get('/analyze', (req, res) => {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Lütfen bir metin girin. Örn: ?text=I+love+this+car' });
  }

  const result = sentiment.analyze(text);
  res.json({ text, score: result.score });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
