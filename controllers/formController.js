module.exports = (app, urlencodedParser) => {
  app.get('/contact-us', function (req, res) {
      res.render('contactForm');
  });
  app.post('/contact-sent', urlencodedParser, function (req, res) {
      res.render('thankYou', {data: req.body});
  });
}