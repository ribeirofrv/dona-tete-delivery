const { JsonWebTokenError } = require('jsonwebtoken');

const ErrorMiddleware = (error, _request, response, _next) => {
  /** Para lidar com futuros erros do JOI */
  const { message } = error;
  if (message.includes('|')) {
    const [status, err] = message.split('|');

    return response.status(+status).json({ message: err });
  }

  if (error instanceof JsonWebTokenError) {
    return response.status(401).json({ message: 'Invalid token' });
  }

  return response.status(500).json({ message: 'Something went wrong!' });
};

module.exports = ErrorMiddleware;
