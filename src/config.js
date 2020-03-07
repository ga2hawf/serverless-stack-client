export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_zTt3AUU1OaTmp3OLSXThLBaB00mlqceQ0V",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "ach-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://udda7tav5i.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_tTBr23oss",
    APP_CLIENT_ID: "5361jesv353a2ccidveqq7lgb9",
    IDENTITY_POOL_ID: "eu-west-2:521aee81-cbbb-4800-bc51-421ce6fe52dd"
  }
};