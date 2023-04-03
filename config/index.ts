const env = process.env.NODE_ENV;

const { vars } =
  env !== null && typeof env !== `undefined` ? require(`./env/${env}`) : null;

export default () => ({
  ...(env && { NODE_ENV: env }),
  ...(vars || {}),
});
