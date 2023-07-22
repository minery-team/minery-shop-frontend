const stage = process.env.STAGE;
const name = `minery-wine-shop-frontend-${stage}`;
const distributionId = stage === 'alpha ' ? undefined : 'E3UEKP0PSVMGFD';

module.exports = {
  stage: stage,
  useDotenv: true,
  [name]: {
    component: '@sls-next/serverless-component@3.6.0',
    inputs: {
      bucketName: name,
      bucketRegion: 'ap-northeast-2',
      name: {
        defaultLambda: name,
        imageLambda: `${name}-images`,
      },
      roleArn: 'arn:aws:iam::917306879000:role/8m1ef18-etyjhsc',
      build: { env: { STAGE: stage } },
      cloudfront: distributionId
        ? { distributionId, comment: name }
        : undefined,
    },
  },
};
