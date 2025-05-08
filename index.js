const express = require('express');
const app = express();
const PORT = 50600; 

app.use(express.static('public'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🌐 Web corriendo en puerto ${PORT}`);
});
