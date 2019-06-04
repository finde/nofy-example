class Private {
  constructor(nofy) {
    this.nofy = nofy;
    this.router = {
      '/': 'index',
      // 'GET /testQuiz': 'createOrServe',
    };

    this.isPrivate = true;
    // global.QuizSession = nofy.models.QuizSession;
    return this;
  }

  index(req, res) {
    res.json({ message: 'this is message from private controller' });
  }
}

module.exports = Private;
