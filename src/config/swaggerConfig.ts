import swaggerJSDoc from "swagger-jsdoc";

export const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Projects API',
      version: '1.0.0',
      description: 'Express projects-tasks API',
    },
    servers: [
      {
        url: `http://localhost:5000`,
        description: 'Local server development',
      },
    ],
  },
  apis: ['src/docs/**/*.yaml', 'src/auth/swagger/*.yaml'],
};

export const swaggerSpecs = swaggerJSDoc(options);
