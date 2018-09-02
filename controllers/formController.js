module.exports = (app) => {
  app.get('/contact-us', function (req, res) {
      res.render('contactForm');
  });
}