class Public {
  constructor(nofy) {
    this.nofy = nofy;
    this.router = {
      '/': 'index',
      // 'GET /testQuiz': 'createOrServe',
    };

    // global.QuizSession = nofy.models.QuizSession;

    return this;
  }

  index(req, res) {
    res.json({message: 'this is message from public controller'})
  }
}

module.exports = Public;