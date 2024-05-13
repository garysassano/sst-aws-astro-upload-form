/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-aws-astro-upload-form",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },

  async run() {
    const bucket = new sst.aws.Bucket("MyBucket", {
      public: true,
    });

    new sst.aws.Astro("MyWebsite", {
      link: [bucket],
    });
  },
});
