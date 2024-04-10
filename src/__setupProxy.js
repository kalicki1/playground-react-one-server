const { createProxyMiddleware } = require('http-proxy-middleware');

//function searchResults(req, res)
//{
//   res = 'Bob was here';
//}

module.exports = function(app) {
   
   //app.get('/searchresults', searchResults);

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true
    })
  );
};
