import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SlimMom API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};